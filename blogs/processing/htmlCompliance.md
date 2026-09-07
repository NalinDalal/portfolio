---
title: "The Invisible Accessibility Bug That Broke HTML Compliance (And How I Fixed It in p5.js)"
date: "2025-11-09"
tags: ["processing", "github", "documentation", "html", "accessibility"]
description: "How a seemingly minor HTML structure issue violated WCAG standards and what it taught me about accessibility in large codebases."
---

# The Invisible Accessibility Bug That Broke HTML Compliance (And How I Fixed It in p5.js)

Accessibility bugs are the worst kind of bugs. They're invisible to sighted users, invisible to developers who don't use screen readers, and invisible to automated testing tools that only check for syntax, not semantics. They sit in production for months, silently breaking the experience for people who need it most.

That's exactly what was happening in the p5.js website.

## The Problem: HTML That Looked Right But Was Wrong

Some `<ul>` and `<ol>` elements contained direct children that weren't `<li>`, `<script>`, or `<template>`. Instead, they were rendering `<GridItem*>` components directly inside the list without wrapping them in `<li>` elements.

Here's what the code looked like:

```astro
<ul class="content-grid-simple">
  <GridItemSketch ... />
  <GridItemSketch ... />
  <GridItemSketch ... />
</ul>
```

Visually, this rendered fine. The grid layout worked, the components appeared correctly, and everything looked like a normal list. But under the hood, the HTML was invalid.

## Why This Matters (And Why It's Not Just About Validation)

### The HTML Specification

According to the HTML spec, `<ul>` and `<ol>` must only contain `<li>`, `<script>`, or `<template>` as direct children. Anything else is invalid HTML.

But validity isn't just about pedantic spec compliance. It's about **what browsers and assistive technologies can infer from your markup**.

### Accessibility (WCAG 1.3.1)

When a screen reader encounters a `<ul>`, it announces "list" and tells the user how many items are in it. When it encounters `<li>` elements, it announces "list item" and reads the content.

But when a screen reader encounters a `<ul>` with non-`<li>` children, it gets confused. The list semantics break. The screen reader might not announce the list at all, or it might announce it incorrectly.

This violates **WCAG 1.3.1: Info and Relationships**, which requires that information and relationships conveyed through presentation are programmatically determined or available in text.

### Cross-Browser Inconsistency

Different browsers handle invalid HTML differently. Chrome might render it one way, Firefox another, Safari a third. When your HTML is invalid, you're at the mercy of browser-specific behavior.

For a project like p5.js, which is used by hundreds of thousands of developers across every browser, this inconsistency is unacceptable.

## Investigating the Scope

I started by auditing the entire codebase for similar violations. The p5.js website is built with Astro, so I searched for all `<ul>` and `<ol>` elements and checked their children.

The violations were concentrated in two components:

1. `src/components/RelatedItems/index.astro` - Renders grids of related sketches, references, and examples
2. `src/layouts/SketchesLayout.astro` - Renders grids of community sketches

Both components used the same pattern: mapping over an array of items and rendering `<GridItem*>` components directly inside a `<ul>` without wrapping them in `<li>`.

## The Fix: Wrapping Without Breaking Layout

The solution was straightforward: wrap each `<GridItem*>` in an `<li>` element. But I had to be careful about one thing: **preserving the grid layout**.

The `<ul>` had CSS classes like `content-grid-simple` that applied grid styling. If wrapping in `<li>` broke the grid, I'd be trading one problem for another.

Here's what the fixed code looks like:

```astro
<ul class="content-grid-simple">
  {items.map((item) => (
    <li>
      <GridItemSketch ... />
    </li>
  ))}
</ul>
```

The key insight: `<li>` elements inherit grid styling from their parent. Since the grid classes were on the `<ul>`, wrapping in `<li>` didn't change the layout at all. The visual output was identical.

## Verification: More Than Just Visual

I verified the fix in three ways:

### 1. DOM Inspection

Using Chrome DevTools, I confirmed that:
- All `<ul>` and `<ol>` elements now only have `<li>`, `<script>`, or `<template>` as direct children
- The `<GridItem*>` components are properly nested inside `<li>` elements
- The grid layout remains unchanged

### 2. Accessibility Tree

Using Chrome's Accessibility Inspector, I confirmed that:
- Screen readers now correctly announce "list" and "list item"
- The number of items in the list is accurate
- Each item is properly associated with its parent list

### 3. Screen Reader Testing

I tested with VoiceOver (macOS) and NVDA (Windows) to confirm that:
- The list is announced correctly
- Navigation between list items works as expected
- The content within each item is readable

## The Cherry-Pick Complication

After the PR was approved, the maintainer asked me to cherry-pick the fix from `processing:2.0` into `main`. This is where things got interesting.

The commit was a **merge commit**, which means I had to use `-m 1` to specify the mainline. But when I ran the cherry-pick, it produced an **empty commit**.

This meant the fix was **already present in `main`**. Someone had already applied the same fix to the main branch, but it hadn't been backported to `2.0`. The cherry-pick was unnecessary.

I documented this in the PR, deleted the temporary branches, and moved on.

## Lessons Learned

### 1. Invalid HTML Hides Real Bugs

When HTML is invalid, browsers and assistive technologies can't be trusted to handle it consistently. What looks like a visual issue might actually be an accessibility issue, a performance issue, or a maintainability issue.

### 2. Automated Testing Isn't Enough

Lighthouse, axe, and other accessibility tools check for some violations, but they don't catch everything. Manual testing with screen readers is essential for catching semantic issues like this.

### 3. Grid Layouts Are Resilient

I was worried that wrapping in `<li>` would break the grid layout. It didn't. Modern CSS Grid is remarkably resilient to changes in the DOM structure, as long as the grid container and its children maintain the same relationship.

### 4. Cherry-Picks Aren't Always Straightforward

Merge commits, conflicting histories, and branch-specific changes can make cherry-picks tricky. Always verify that the fix isn't already present in the target branch before proceeding.

## The Broader Impact

This fix affects:
- **Accessibility**: Screen readers now correctly interpret list structures
- **Compliance**: The website now meets WCAG 1.3.1
- **Maintainability**: Future contributors won't accidentally propagate invalid markup
- **Cross-browser consistency**: The HTML is now valid, so browsers can handle it predictably

It's a small change with outsized impact. That's the nature of accessibility work: small fixes that make a real difference in people's lives.

---

**Links:**
- [p5.js-website PR #974](https://github.com/processing/p5.js-website/pull/974)
- [PR Main-cherry-pick](https://github.com/processing/p5.js-website/pull/983)
- [Issue #869](https://github.com/processing/p5.js-website/issues/869)