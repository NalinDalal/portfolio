# Nalin Dalal — Portfolio

Built with Next.js 15, React 19, TypeScript, Tailwind CSS, MDX.

## Local Development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Adding Content

### Pull Request Docs

Create a folder ending in `-pr` inside `blogs/` and add your `.mdx` file:

```
blogs/asyncapi-pr/shaderImprovement.mdx
```

This auto-populates at `/blogs/asyncapi/shaderImprovement`.

After adding a PR doc:

```bash
npm run prebuild
npm run build
```

### Projects & Case Studies

Projects are populated from `data/projects.json`. Add entries there with `projectName`, `liveLink`, `githubLink`, `summary`, `tags`, and `caseStudy` path.

Case studies are MDX files in `case-study/`. The `caseStudy` field in `projects.json` links a project to its case study page.

## Deployment

Exports to Vercel / Netlify.
