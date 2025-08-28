// scripts/sync-mdx-to-app.js
// Copies all .mdx files from blogs/*-pr/ to app/blogs/[slug]/[file]/page.mdx
// and creates a page.tsx that imports and renders the MDX file

const fs = require("fs");
const path = require("path");

const blogsDir = path.join(process.cwd(), "blogs");
const appBlogsDir = path.join(process.cwd(), "app", "blogs");

const folders = fs.readdirSync(blogsDir).filter((f) => f.endsWith("-pr"));

for (const folder of folders) {
  const slug = folder.replace(/-pr$/, "");
  const folderPath = path.join(blogsDir, folder);
  const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const fileName = path.parse(file).name;
    const srcPath = path.join(folderPath, file);
    const destDir = path.join(appBlogsDir, slug, fileName);
    const destMDXPath = path.join(destDir, "page.mdx");
    const destTSXPath = path.join(destDir, "page.tsx");

    // Ensure destination directory exists
    fs.mkdirSync(destDir, { recursive: true });

    // Copy MDX file
    fs.copyFileSync(srcPath, destMDXPath);

    // Create page.tsx
    const tsxContent = `import MDXContent from './page.mdx';\n\nexport default function Page() {\n  return <MDXContent />;\n}\n`;
    fs.writeFileSync(destTSXPath, tsxContent);
  }
}

console.log("All MDX blog posts synced to app/blogs/[slug]/[file]/");
