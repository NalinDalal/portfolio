# AGENTS.md

Read this before making any changes to the portfolio. Written for coding agents; applies to human contributors too. The README covers "what this is"; this file covers "how to change it safely."

## Glossary

- **blog post** — a PR write-up stored as a `.md` file in `blogs/<topic>/`. The folder name is the URL slug, the file name (minus extension) is the subslug: `blogs/asyncapi/edit-link.md` renders at `/blogs/asyncapi/edit-link`.
- **case study** — a project deep-dive stored as MDX in `case-study/<slug>.mdx`, linked from `data/projects.json` via the `caseStudy` field.
- **project** — an entry in `data/projects.json`, typed by `types/project.ts`. All project cards and pages render from it.
- **subslug** — the blog file name without the extension (`edit-link` in the example above).

## What makes this portfolio special

Everything is filesystem-driven and static. There is no CMS, no database, and no runtime data fetching for pages: server components read `blogs/`, `case-study/`, and `data/projects.json` directly from disk at build time. Adding content means adding a file — nothing gets registered anywhere (the old `blogs-manifest.ts` was deleted because it kept going stale).

GitHub-derived TypeScript types (`types/github.ts`) use camelCase fields (`htmlUrl`, `mergedAt`, `stargazersCount`), but the raw API dumps in `data/user.json` and `data/repositories.json` keep GitHub's native snake_case keys — they are served verbatim by `app/api/data/route.ts` and never cast to the local types.

## What to never compromise on

1. **Never hand-edit `data/mergedPRs.json`** — `.github/workflows/merged-pr.yml` regenerates and commits it every 6 hours via `scripts/updateMergedPRs.js`. Any manual edit is silently overwritten on the next run. If you need different data, change the script or the workflow, not the file.
2. **Don't reintroduce a blog manifest** — blog routing (`app/blogs/[slug]/[subslug]/page.tsx`) discovers posts from the filesystem. Any import-map or registry for blog content will drift out of sync with the files, exactly like the deleted one did.
3. **Keep the frontmatter schemas stable** — blog posts use `title` + `date` (required), `tags` + `description` (optional); that's what `utils/get-blog-posts.ts` validates with zod. Case studies use `title` + `date`. Do NOT copy the stray `version`/`author` frontmatter from `case-study/blind.mdx` — nothing reads it.
4. **Code identifiers are camelCase** — including keys mapped from GitHub API responses (`htmlUrl`, `mergedAt`). snake_case keys exist only inside the raw `data/*.json` API dumps, because that's what GitHub sends.

## How and where it's working

Static export of a Next.js 15 App Router site, deployed on Vercel / Netlify. Server components (page files in `app/`) read local data and render HTML at build time; `"use client"` components (tabs, GitHub calendar, pull-request cards) hydrate for interactivity. Styling is Tailwind CSS v4 with design tokens (`bg-primary`, `text-secondary`, `accent`, `surface`, `border`) declared once via `@theme` — class strings in components use those tokens, there are no loose hex colors in JSX. The only API route (`app/api/data/route.ts`) serves the raw data files as JSON.

## Good vs. bad examples

### Adding a blog post

Bad — stale `-pr` convention from the deleted manifest:

```
blogs/mypr-pr/my-writeup.md     # wrong folder name → wrong URL slug
```

Good — folder = topic (URL slug), file = subslug:

```
blogs/processing/htmlCompliance.md
```
```markdown
---
title: "Improve Accessibility Guidance for describe() Usage"
date: "2025-11-09"
tags: ["processing", "github", "documentation"]
description: "Optional one-liner."
---
```
Why: the file system *is* the route table; use filenames that read well as URLs.

### Referencing GitHub fields in code

Bad:
```ts
const isMerged = pullRequest.merged_at !== null;
```
Good:
```ts
const isMerged = pullRequest.mergedAt !== null;
```
Why: `types/github.ts` types are camelCase; snake_case keys only exist inside raw `data/*.json` API dumps.

### Refreshing merged PR data

Bad: editing `data/mergedPRs.json` by hand.
Good: `bun run update:prs` — it rewrites the file, creates a `.backup`, and validates the JSON. `GITHUB_TOKEN` in `.env.local` only raises the API rate limit.
Why: CI also runs this on a schedule; hand edits always lose.

## A note from the author

[inferred — replace with your own if you want] This site started as a student portfolio and grew around my open-source work (GSSoC, AsyncAPI, Processing/p5.js). Rule of thumb: content outlives code here. If you're touching rendering or routing, keep `data/projects.json`'s shape and the frontmatter schemas frozen — there's a lot of hand-written MDX depending on them, and the last two "clever" refactors (manifest, `-pr` folders) both had to be unwound.