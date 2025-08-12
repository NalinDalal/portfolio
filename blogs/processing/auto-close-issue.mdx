# Auto-Link and Auto-Close Issues on PRs to Dev Branches (`dev-2.0`)

**Issue:** [#7975](https://github.com/processing/p5.js/issues/7975)
**Pull Requests:**

* [p5.js PR #7989](https://github.com/processing/p5.js/pull/7989)
* [p5.js-website PR #919](https://github.com/processing/p5.js-website/pull/919)

## Problem

GitHub’s built-in auto-close behavior (`Fixes #`, `Closes #`) only works for PRs merged into the **default branch**. This created issues:

* PRs into `2.0` or `dev-2.0` didn't auto-link or auto-close issues
* Contributors had to manually close referenced issues
* Example: [PR #7971](https://github.com/processing/p5.js/pull/7971) failed to close [Issue #7905](https://github.com/processing/p5.js/issues/7905)

## Objective

* Create a GitHub Action that runs when PRs are merged into `2.0` or `dev-2.0`
* Parse PR body for issue-closing keywords
* Automatically close referenced issues via GitHub API

## Solution

* Wrote `.github/workflows/auto-close-issues.yml` in both `p5.js` and `p5.js-website`
* Script parses PR descriptions and extracts issue references
* Sends POST requests to GitHub API to close those issues
* Uses secure `GITHUB_TOKEN` for authentication
* Logs warnings for malformed/missing issue references

## Outcome

* Issues auto-close on PR merges into non-default branches (like `dev-2.0`)
* No manual issue management needed by contributors
* Cleaner project boards and faster feedback loops

## Technical Challenges

* GitHub doesn't support this behavior natively for non-default branches
* Required manual parsing and API calls to close issues
* Handled edge cases like malformed PR descriptions, missing references, and multiple issue links
