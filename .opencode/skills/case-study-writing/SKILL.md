---
name: case-study-writing
description: Write or rewrite a case study (case-study/*.mdx) for this portfolio. Use when adding, editing, or auditing a project deep-dive. Enforces the outcome-first, ask-don't-infer, verified-links standard so the portfolio never publishes claims the author didn't make.
---

# Case Study Writing

A case study is a project deep-dive read by lazy, non-technical people (recruiters, founders). This skill exists because past case studies shipped content that was wrong, invented, or unfixable:

- `case-study/blind.mdx` once described a **fictional voice-navigation app** for the visually impaired; the real repo was an anonymous college community platform. Nobody checked, and it was live on the site.
- Links were 404 (a dead `cal.com/nalin-dalal` booking handle, mini-project repos renamed on GitHub, a bare `codraw.nerdev.in` markdown link with no `https://` that rendered as a broken relative URL).
- The resume claimed AWS ECR/ECS + New Relic while the case study said EC2 + Prometheus/Grafana.

The Modheshwari rewrite is the gold standard. Mirror its shape, tone, and length (~100-120 lines).

## Non-negotiables

1. **Ask the user for facts. Never write them yourself.** Every claim, metric, feature, role detail, and product description must be supplied or confirmed by the user. You may ground yourself by reading the repo README and `data/projects.json`, but if a fact can't be traced to the user, the README, or the live site, **stop and ask before writing it**. When in doubt, list every unverified claim at the end of the session and get confirmation on each. Content that isn't verified gets you in trouble in interviews — this is the single most important rule.
2. **Outcomes over mechanics.** Say what the user/community gets, in plain words. No phase-by-phase journeys, no schema/table dumps, no incident postmortems, no commit/LOC lists in the body. Technical depth belongs in a blog post, not a case study.
3. **Strong role statement first.** "My Role" leads with an end-to-end ownership claim ("Designed and built the product end-to-end as a solo engineer, owning the architecture, backend, realtime infrastructure...") with bolded bullets per concern, closing on a "This wasn't simply…" punchline.
4. **At least one Mermaid diagram** — `language-mermaid` code fences render through `components/Mermaid`. People love pictures; a page with zero diagrams is a red flag.
5. **Every link verified before finishing.** `curl -s -o /dev/null -w "%{http_code}" -L <url>` on every URL in the file and in `data/projects.json`. Anything not 200 gets fixed or dropped. Check bare domains in markdown links (`[x](codraw.nerdev.in)` without `https://` is a broken relative link). If a project's repo was renamed on GitHub, find the real repo before linking.
6. **Frontmatter stays** `title` + `date` + optional `tags`/`description`. Nothing else.

## Workflow

1. **Ground yourself.** Read `data/projects.json` entry for the slug. Fetch the raw repo README (`https://raw.githubusercontent.com/<owner>/<repo>/main/README.md`). Note which claims are provable.
2. **Draft outcome-first.** Follow the Modheshwari structure: The Problem → My Role → What It Does → Making It Work in the Real World → Results → Current State → links. Keep it ~100-120 lines. Put one diagram in the What It Does area.
3. **Review like the lazy reader.** Re-read it cold: would a recruiter who isn't a developer get the point in a 30-second skim? If a sentence mentions an implementation detail the reader can't picture, cut or rephrase toward the outcome.
4. **Ask, then confirm.** Surface every claim you could not verify and ask the user to confirm or correct each one before calling it done. Do not push facts you assumed.
5. **Verify links.** Curl everything (MDX + `data/projects.json`). Fix or drop anything not 200.
6. **Finish with a build check** — `bun run build` must pass and the slug must appear in the `/projects/[slug]` output.