---
title: "Auto-Link and Auto-Close Issues on PRs to Dev Branches"
date: "2025-11-09"
tags: ["processing", "github", "documentation"]
---

# PR: Improve Accessibility Guidance for `describe()` Usage (Fixes #6387)

## Overview

This PR improves the visibility and clarity of accessibility guidance for using `describe()` in p5.js. It consolidates best practices, adds concrete examples, and strengthens cross-linking across contributor documentation and tutorials, as requested in [#6387](https://github.com/processing/p5.js/issues/6387).

**Pull Request:** [#8101](https://github.com/processing/p5.js/pull/8101)

## What Changed

- Added a new section **“Canvas Accessibility Descriptions: `describe()`”** in `documentation_style_guide.md`.
  - Defined best practices: concise (1–3 sentences), visual-only, non-redundant, and clear.
  - Included a Do/Don’t examples table.

- Updated `contributing_to_the_p5js_reference.md` with links to all accessibility-related resources.
- Updated `web_accessibility.md` with a cross-reference to the new style guide section.
- Audited tutorials and contributor docs for contradictions; confirmed consistency.
- Identified missing or weak `describe()` calls in some JSDoc reference examples (e.g., `ellipse()`, `line()`) and noted improvements.

## Context

The `describe()` function provides screen reader–friendly descriptions of p5.js sketches. While existing documentation covered it in parts (tutorials, contributor docs), the guidance was scattered and inconsistent. This PR centralizes the guidance, improves discoverability, and gives contributors clear rules and examples to follow.

## Example

### Do

```js
describe("A blue rectangle in the center of a white canvas.");
```

### Don’t

```js
describe("This code draws a rectangle.");
```

This ensures reference examples include concise, visual descriptions without redundant or vague wording.

maintainers had asked why certain places were repeated, so i removed them, and yes pointed out that it will make no sense in repeating stuff

well then i tried, but didn't really landed anywhere nice, so now maintainers asked me to basically cleam up code, since most were due to lsp, also i had repeated some places where there was no need, like
whole COde Section in Content Table was repeated twice

then i tried to remove that, i guess i made it through, then maintainers aske dme to revert changes in docs, but then i got busy with my placement(there was a ppt) i guess

so kit actually did cleanup my dos i think
now the maintainers asked each others review, limzykenneth approved it
dave remains
