---
title: "Why GitHub's Auto-Close Doesn't Work for Dev Branches (And How I Fixed It for p5.js)"
date: "2025-07-26"
tags: ["processing", "github", "automation", "devops"]
description: "A deep dive into GitHub's auto-close limitations for non-default branches and how I built a custom GitHub Action to solve it for p5.js."
---

# Why GitHub's Auto-Close Doesn't Work for Dev Branches (And How I Fixed It for p5.js)

When you type `Fixes #123` in a pull request description, GitHub automatically closes that issue when the PR merges. It's one of those features that feels so fundamental you never think about it—until it stops working.

That's exactly what happened in the p5.js repository.

## The Problem Nobody Noticed (Until They Did)

p5.js was in the middle of a major rewrite: the `2.0` branch. This wasn't the default branch (`main`), so PRs merging into `2.0` or `dev-2.0` didn't trigger GitHub's auto-close behavior. Contributors would reference issues, merge their PRs, and the issues would just... sit there.

The result was a slow accumulation of stale issues that were actually fixed but never closed. Project boards became unreliable. Contributors stopped trusting the system. And maintainers had to manually chase down and close issues that should have been handled automatically.

I stumbled on this while working on PR #7971, which fixed issue #7905. The PR merged cleanly, but the issue stayed open. That's when I realized the problem wasn't a one-off—it was systemic.

## Understanding the Constraint

GitHub's auto-close behavior is tied to the **default branch**. When you merge a PR into `main`, GitHub parses the PR description for keywords like `Fixes #`, `Closes #`, and `Resolves #`, then closes the referenced issues via the API.

But when you merge into a non-default branch—like `2.0` in p5.js's case—GitHub doesn't run this parsing at all. It's not a bug; it's a design decision. GitHub assumes non-default branches are temporary or experimental, so it doesn't apply production workflows to them.

For a project like p5.js, which was actively developing on `2.0` for months, this assumption was wrong.

## The Architecture Decision: Why Not Just Cherry-Pick?

My first instinct was to cherry-pick merged PRs from `2.0` back to `main`. That way, GitHub's native auto-close would kick in on the default branch.

But this approach had problems:

1. **Merge conflicts**: Cherry-picking across branches with divergent histories is fragile.
2. **Timing**: The cherry-pick had to happen after the PR merged, creating a window where issues stayed open.
3. **Complexity**: It added another step to an already complex release process.

The real solution was simpler: **run the same logic GitHub uses, but as a GitHub Action on the `2.0` branch**.

## Building the Solution

I created `.github/workflows/auto-close-issues.yml` in both `p5.js` and `p5.js-website`. The workflow does three things:

### 1. Parse PR Descriptions

When a PR merges into `2.0` or `dev-2.0`, the workflow extracts the PR body and searches for issue-closing keywords using regex:

```yaml
- name: Extract issue references
  id: extract
  run: |
    echo "$PR_BODY" | grep -oE "(Fixes|Closes|Resolves) #[0-9]+" | \
    grep -oE "[0-9]+" > issues.txt
```

### 2. Validate References

Before closing anything, the workflow validates that the referenced issues actually exist and are open. This prevents false positives from malformed descriptions or typos.

### 3. Close Issues via GitHub API

For each valid reference, the workflow sends a POST request to GitHub's API to close the issue:

```yaml
- name: Close issues
  run: |
    while read issue; do
      curl -X PATCH \
        -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/${{ github.repository }}/issues/$issue" \
        -d '{"state": "closed"}'
    done < issues.txt
```

The workflow uses the built-in `GITHUB_TOKEN` for authentication, so no additional secrets are needed.

## Edge Cases and Lessons

Building this taught me a lot about GitHub's API and the quirks of large open-source projects:

### Malformed Descriptions

Not everyone follows the `Fixes #123` convention. Some contributors write "This closes issue 123" or "Resolved #123 and #456." The regex had to be flexible enough to handle variations while strict enough to avoid false positives.

### Multiple References

A single PR might reference multiple issues. The workflow processes each one independently, so if one fails (e.g., the issue doesn't exist), the others still get closed.

### Rate Limiting

GitHub's API has rate limits. For a busy repository like p5.js, closing many issues in quick succession could hit those limits. The workflow includes retry logic with exponential backoff.

### Idempotency

If the workflow runs twice on the same PR (which can happen with GitHub Actions), it shouldn't try to close already-closed issues. The validation step handles this by checking the issue's current state before attempting to close it.

## The Impact

After deploying this workflow:

- **Issues auto-close on PR merges into non-default branches**—no manual intervention needed.
- **Project boards became accurate again**—contributors and maintainers could trust the issue tracker.
- **The workflow runs silently**—no new notifications, no new steps in the PR process.

The solution is transparent to contributors. They write their PR descriptions as they always have, and the system handles the rest.

## Why This Matters Beyond p5.js

This pattern applies to any project that develops on non-default branches. Feature branches, release candidates, long-running rewrites—if you're merging PRs into anything other than `main`, GitHub's native auto-close won't work.

The GitHub Action approach is portable. You can drop it into any repository, configure the target branches, and get the same behavior. It's a small piece of infrastructure that solves a real workflow problem.

## What I'd Do Differently

If I were building this again, I'd add two things:

1. **A status check**: So maintainers can see at a glance whether the workflow ran successfully on a PR.
2. **Notification integration**: Instead of silently closing issues, post a comment linking to the PR that fixed them. This gives contributors context when they check why an issue was closed.

These are enhancements, not fixes. The core solution works as-is, and that's what matters.

---

**Links:**
- [p5.js PR #7989](https://github.com/processing/p5.js/pull/7989)
- [p5.js-website PR #919](https://github.com/processing/p5.js-website/pull/919)
- [Issue #7975](https://github.com/processing/p5.js/issues/7975)