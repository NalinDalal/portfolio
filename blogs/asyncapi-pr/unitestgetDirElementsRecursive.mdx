---
title: "Add Comprehensive Unit Tests for getDirElementsRecursive"
date: "2025-08-27"
tags: ["asyncapi", "testing", "helpers", "jest"]
---
# Test: Add Comprehensive Unit Tests for `getDirElementsRecursive` ([#1679](https://github.com/asyncapi/generator/pull/1679))

## Purpose

This PR introduces a full set of Jest unit tests for the `getDirElementsRecursive` helper in `packages/helpers/src/testing.js`.  

It resolves [Issue #1668](https://github.com/asyncapi/generator/issues/1668) by ensuring recursive directory traversal is validated across nested, empty, and mixed structures.

***

## Key Changes

### Unit Tests

* Added `packages/helpers/test/getDirElementsRecursive.test.js`.
* Covered core scenarios:

  * Recursive traversal of nested files and directories.
  * Handling of empty folders.
  * Deeply nested hierarchies with multiple levels.
  * Mixed file and directory structures.

* Verified consistent cross-platform path handling with `path.join`.
* Mocked filesystem calls via `jest.mock('fs/promises')`.

***

## Tests

* Achieved comprehensive Jest coverage for `getDirElementsRecursive`.
* Edge cases covered:

  * Empty directories.
  * Mixed file/folder structures.
  * Multi-level recursion.

* Validated:

  * Output object shape (`type`, `name`, `path`, `children`).
  * Correct detection of files vs. directories.
  * Recursive child resolution.

Run locally:

```bash
npm install --prefix packages/helpers
npx --prefix packages/helpers jest test/getDirElementsRecursive.test.js
````

---

## Impact Summary

| Metric         | Status         |
| -------------- | -------------- |
| Performance    | No impact      |
| Accessibility  | No impact      |
| Best Practices | Improved tests |
| SEO            | N/A            |
| PWA            | N/A            |
| Code Coverage  | Increased ✅    |
| Build Status   | Passed ✅       |

---

## Technical Highlights

### Jest Mocking for Filesystem

Replaced `mockImplementation` with cleaner `mockResolvedValue`:

```js
fs.readdir.mockResolvedValue([
  { name: "file1.txt", isDirectory: () => false, isFile: () => true },
  { name: "subdir", isDirectory: () => true, isFile: () => false },
]);
```

### Test Structure Improvements

* Consolidated all imports (`path`, `getDirElementsRecursive`) at the top.
* Imported `getDirElementsRecursive` from `@asyncapi/generator-helpers`.
* Retained only `beforeEach` for consistent mocking cleanup.

---

## Reviews and Feedback

* Incorporated reviewer feedback from @Adi-204:

  * Moved all imports to file top.
  * Switched from `mockImplementation` to `mockResolvedValue`.
  * Simplified test lifecycle hooks.
* Final tests are consistent, maintainable, and ready to merge.
* **Merged**
