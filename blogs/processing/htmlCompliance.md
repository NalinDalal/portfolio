---
title: "Auto-Link and Auto-Close Issues on PRs to Dev Branches"
date: "2025-11-09"
tags: ["processing", "github", "documentation", "html"]
---

# Fix `<ul>` and `<ol>` Direct Children for HTML Compliance

**Issue:** [#869](https://github.com/processing/p5.js-website/issues/869)
**Pull Request:** [p5.js-website PR #974](https://github.com/processing/p5.js-website/pull/974), [PR Main-cherry-pick](https://github.com/processing/p5.js-website/pull/983)

## Problem

Some `<ul>` and `<ol>` elements contained direct children that were not `<li>`, `<script>`, or `<template>`. Examples included rendering `<GridItem*>` components directly inside `<ul>` without wrapping them.

This violated the **HTML specification** and introduced several risks:

- **Accessibility**: Assistive technologies (e.g., screen readers) could not correctly interpret the list structure (WCAG 1.3.1 violation).
- **Cross-browser inconsistency**: Different browsers could render the markup in unexpected ways.
- **Maintainability**: Future contributors might unintentionally propagate invalid markup.

## Objective

- Ensure all `<ul>` and `<ol>` elements comply with the HTML spec.
- Improve accessibility and semantic correctness across the site.
- Maintain existing layout and grid styling without regressions.

## Solution

- **Refactored markup** in two Astro components where `<ul>` had disallowed direct children:
  - `src/components/RelatedItems/index.astro`
  - `src/layouts/SketchesLayout.astro`

- Wrapped all rendered component outputs (`<GridItemSketch>`, `<GridItemReference>`, `<GridItemExample>`, `<GridItemEvent>`) in `<li>` elements.

- Verified other templates to ensure no similar violations exist.

- Confirmed visual layout remains unchanged since `<li>` elements inherit grid styling.

## Technical Challenges

- Preserving the **grid-based layout**: wrapping in `<li>` needed to maintain CSS classes (`content-grid-simple`) without breaking spacing or alignment.
- Ensuring **no duplicate rendering**: replaced direct mapping with `<li>`-wrapped components carefully to avoid double outputs.
- Validating accessibility tree in DevTools and screen readers to confirm list semantics were restored.

## Why

- **HTML Specification**: `<ul>` and `<ol>` must only contain `<li>`, `<script>`, or `<template>` as direct children.
- **Accessibility (WCAG 1.3.1)**: Proper list semantics ensure screen readers and assistive technologies correctly interpret list structures.
- **Cross-browser consistency**: Prevents rendering inconsistencies across browsers.

**References:**

- [WCAG 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [WCAG Technique H48: Using `<ul>` and `<ol>` for lists](https://www.w3.org/WAI/WCAG21/Techniques/html/H48.html)
- [Failure F43: Misuse of list structure](https://www.w3.org/WAI/WCAG21/Techniques/failures/F43.html)

## How to Test

1. Open affected pages (e.g., `/reference/p5/arc/`, `/community/sketches/`).
2. Inspect the DOM in DevTools:
   - Confirm `<ul>` and `<ol>` elements only have `<li>`, `<script>`, or `<template>` as direct children.
   - Confirm that wrapped components (`GridItem*`) are nested inside `<li>`.

3. Verify visual layout and grid alignment remain unchanged.
4. Check accessibility tree (e.g., using VoiceOver/NVDA) to confirm correct list semantics.

## Maintainer Comments & Cherry-Pick Process

- Maintainer (`ksen0`) suggested cherry-picking the fix from branch `processing:2.0` into `main`.
- Attempted cherry-pick of commit `874d129`:
  - The commit was a **merge commit**, requiring `-m 1` to specify the mainline.
  - Cherry-pick produced **an empty commit**, indicating the fix was **already present in `main`**.

- No additional PR was needed since the changes for `<ul>`/`<ol>` compliance already exist in `main`.
- Temporary cherry-pick branches (`fix-issue-main` and `fix-issue-main-clean`) were deleted after verification.

when i checked from local and then pushed it to remote branch i guess that happened and the pr was filed then to `main` brnach by cherry picking thst specific commiy

## Related Issue

Closes #869

## Additional Notes

- No visual regressions expected since wrapping in `<li>` does not alter layout under `display: grid`.
- If additional similar violations are found in other files, they can be addressed in follow-up PRs.
