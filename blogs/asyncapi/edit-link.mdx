# Refactor: Optimize Directory Traversal in `check-edit-links` Script ([#4126](https://github.com/asyncapi/website/pull/4126))

## Purpose

This PR refactors and improves the `check-edit-links.ts` script to:

* Efficiently traverse markdown documentation directories.
* Dynamically generate “Edit on GitHub” links based on project config.
* Validate links by checking for 404 errors.
* Report broken edit links during validation.

This fully resolves [Issue #3586](https://github.com/asyncapi/website/issues/3586).

---

## Key Changes

### Script Refactor

* Replaced recursive traversal with a streaming async generator (`walkDirectory`) to improve memory efficiency and performance for large doc trees.
* Refactored link generation and validation:

  * `generatePaths` now uses the async generator.
  * Added input validation and detailed error handling.
  * Improved CLI output and logging for debugging and developer experience.

---

## Tests

* Refactored and expanded the test suite for `check-edit-links.ts`.
* Achieved 100% code coverage:

  * Functions tested: `generatePaths`, `processBatch`, `checkUrls`, `determineEditLink`.
* Covered edge cases:

  * Invalid paths
  * Empty directories
  * Broken links
  * Nested folders
  * Network timeouts
* Modernized test mocking using `fs.readdir` and `fs.Dirent`.

---

## Lint and Style

* Passed all lint and type checks.
* Reorganized utility structure and code layout for clarity and long-term maintainability.

---

## Documentation

* Added complete JSDoc coverage for all major functions.
* Included inline comments explaining key decisions and implementation logic.
* Updated `next-env.d.ts` with reference to the latest Next.js configuration.

---

## Impact Summary

| Metric         | Status                                  |
| -------------- | --------------------------------------- |
| Performance    | 36 (expected: validation adds overhead) |
| Accessibility  | 98                                      |
| Best Practices | 92                                      |
| SEO            | 100                                     |
| PWA            | 33 (unrelated to PR)                    |
| Code Coverage  | 100.00%                                 |
| Build Status   | Passed                                  |

---

## Technical Highlights

### Async Generator for Directory Traversal

Avoids memory-heavy recursion, ideal for deep or large markdown trees.

### Validation Pipeline

```ts
for await (const path of walkDirectory(dir)) {
  if (isMarkdown(path)) {
    const link = determineEditLink(path);
    if (!(await urlExists(link))) brokenLinks.push({ path, link });
  }
}
```

### Error-Resilient

Handles:

* Filesystem errors (permissions, missing files)
* Invalid project configs
* Network timeouts and failures
* Non-200 HTTP responses

---

## Reviews and Feedback

* **Reviewers:** @derberg, @akshatnema, @TRohit20, @magicmatatjahu, others
* **CodeRabbit AI Review:**

  * Highlighted strong JSDoc, inline comments, and thorough test coverage.
  * No out-of-scope changes identified.

Marked as **ready-to-merge** by maintainers.

