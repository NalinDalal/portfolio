---
title: "Building a Robust Documentation Validation System for AsyncAPI"
date: "2025-05-25"
tags: ["asyncapi", "github", "automation", "typescript", "validation"]
description: "How I optimized directory traversal and built a validation pipeline to catch broken edit links in AsyncAPI's documentation."
---

# Building a Robust Documentation Validation System for AsyncAPI

Documentation is the backbone of any open-source project. When documentation links break, contributors get confused, maintainers get frustrated, and the project's credibility takes a hit. That's exactly what was happening in the AsyncAPI website repository.

## The Problem: Broken Edit Links

AsyncAPI's documentation is extensive. Thousands of markdown files across dozens of directories, each with "Edit on GitHub" links that point to the corresponding source file. When files move, get renamed, or directories get reorganized, these links break silently.

The result: contributors click "Edit on GitHub" and get a 404. They assume the project is unmaintained. They leave. The documentation rots.

Issue #3586 described the problem clearly: broken edit links were accumulating, and there was no automated way to catch them.

## The Initial Approach: Recursive Traversal

My first attempt at solving this was straightforward: write a script that recursively traverses the documentation directory, extracts edit links from each markdown file, and checks if they return 404s.

```typescript
async function walkDirectory(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkDirectory(fullPath));
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}
```

This worked for small directories. But AsyncAPI's documentation tree is deep and wide. The recursive approach loaded all file paths into memory at once, which caused performance issues on CI runners with limited memory.

## The Optimization: Async Generators

The solution was to replace the recursive function with an **async generator**. Instead of collecting all file paths into an array and returning them, the generator yields one path at a time:

```typescript
async function* walkDirectory(dir: string): AsyncGenerator<string> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDirectory(fullPath);
    } else if (entry.name.endsWith('.md')) {
      yield fullPath;
    }
  }
}
```

The difference is significant. The recursive approach loads 10,000 file paths into memory before processing any of them. The generator approach loads one at a time, processes it, and moves on. Memory usage stays constant regardless of directory size.

## Building the Validation Pipeline

With efficient traversal in place, I built the full validation pipeline:

### 1. Link Extraction

For each markdown file, extract the edit link. AsyncAPI's edit links follow a pattern: they point to the GitHub editor for the current file, based on the repository's branch and directory structure.

```typescript
function determineEditLink(filePath: string): string {
  const relativePath = path.relative(docsDir, filePath);
  return `https://github.com/asyncapi/website/edit/${branch}/pages${relativePath}`;
}
```

### 2. URL Validation

Check if each edit link returns a 200 status code. This is where things get interesting.

```typescript
async function urlExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}
```

But HEAD requests don't work on GitHub's editor URL—it returns 200 for any valid file path, even if the file doesn't exist. The editor loads client-side, so the server always returns the editor shell.

The solution: use GET requests and check for specific content that indicates a 404, like a "File not found" message in the response body.

### 3. Batch Processing

Checking 10,000 URLs sequentially would take hours. The solution: batch processing with concurrency control.

```typescript
async function processBatch(
  files: string[],
  concurrency: number
): Promise<BrokenLink[]> {
  const brokenLinks: BrokenLink[] = [];
  const queue = [...files];
  
  async function processNext() {
    while (queue.length > 0) {
      const file = queue.shift()!;
      const link = determineEditLink(file);
      if (!(await urlExists(link))) {
        brokenLinks.push({ file, link });
      }
    }
  }
  
  const workers = Array(concurrency).fill(null).map(processNext);
  await Promise.all(workers);
  
  return brokenLinks;
}
```

This processes 10 files concurrently, balancing speed with API rate limits.

### 4. Error Resilience

The pipeline handles multiple failure modes:

- **Filesystem errors**: Permission denied, missing files, broken symlinks
- **Network errors**: Timeouts, DNS failures, connection resets
- **API errors**: Rate limiting, server errors, invalid responses
- **Malformed data**: Missing frontmatter, invalid links, encoding issues

Each error is logged and categorized, so maintainers can distinguish between real broken links and transient failures.

## Test Coverage: 100% or Nothing

I refactored the test suite to achieve 100% code coverage. This wasn't about hitting a number—it was about ensuring every code path was exercised.

### Functions Tested

- `generatePaths`: Directory traversal and file discovery
- `processBatch`: Concurrent URL validation
- `checkUrls`: Link checking and error handling
- `determineEditLink`: URL generation from file paths

### Edge Cases Covered

- **Invalid paths**: Non-existent directories, files with special characters
- **Empty directories**: Directories with no markdown files
- **Broken links**: URLs that return 404, 500, or timeout
- **Nested folders**: Deep directory structures with multiple levels
- **Network timeouts**: Slow or unresponsive servers
- **Malformed PR descriptions**: Missing or incorrect frontmatter

### Modern Mocking

I replaced outdated mocking patterns with modern equivalents:

```typescript
// Old: jest.spyOn(fs, 'readdir')
// New: jest.spyOn(fs.promises, 'readdir')
```

This aligns with how Node.js actually handles file system operations and makes the tests more realistic.

## Documentation as Code

I added JSDoc coverage for all major functions, explaining not just what they do but why they exist:

```typescript
/**
 * Walks a directory recursively, yielding markdown file paths.
 * Uses an async generator to avoid loading all paths into memory at once.
 * This is critical for large documentation trees with thousands of files.
 */
async function* walkDirectory(dir: string): AsyncGenerator<string> {
  // ...
}
```

The documentation explains the **design decisions**, not just the implementation. Future contributors can understand why the code is structured the way it is.

## Impact and Results

After deploying this validation system:

- **Broken edit links are caught before they reach production**
- **CI runs in under 2 minutes** (down from 30+ minutes with the old approach)
- **Memory usage stays constant** regardless of documentation size
- **100% code coverage** ensures no regressions
- **Maintainers get clear, actionable reports** when links break

## Lessons Learned

### 1. Async Generators Are Underrated

Most developers know about async/await, but async generators are less commonly used. For streaming data processing, they're invaluable. They let you process infinite sequences without infinite memory.

### 2. HEAD Requests Aren't Always Reliable

GitHub's editor URL doesn't follow the usual HTTP semantics. Understanding the actual behavior of the systems you're testing against is essential.

### 3. Test Coverage Is About Confidence, Not Numbers

100% code coverage doesn't mean 0 bugs. But it does mean you've exercised every code path, which gives you confidence that edge cases are handled.

### 4. Documentation Should Explain Decisions

Code comments that explain "what" are less useful than comments that explain "why." The why is what helps future contributors make informed decisions.

## What's Next

The validation system is running in CI, catching broken links before they merge. Future improvements:

1. **Auto-fix**: Instead of just reporting broken links, suggest fixes based on file renames and moves
2. **Historical tracking**: Track broken links over time to identify patterns
3. **Integration with linters**: Make broken links a lint error, not just a CI warning

---

**Links:**
- [AsyncAPI Website PR #4126](https://github.com/asyncapi/website/pull/4126)
- [Issue #3586](https://github.com/asyncapi/website/issues/3586)