import fs from "fs";
import path from "path";

const blogsDir = path.join(process.cwd(), "blogs");
const manifestPath = path.join(process.cwd(), "blogs-manifest.ts");

const folders = fs.readdirSync(blogsDir).filter((f) => f.endsWith("-pr"));

const imports: string[] = [];
const entries: string[] = [];

for (const folder of folders) {
  const slug = folder.replace(/-pr$/, "");
  const files = fs
    .readdirSync(path.join(blogsDir, folder))
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  for (const file of files) {
    const name = path.parse(file).name;
    const key = `${slug}/${name}`;
    const importPath = `@/blogs/${folder}/${file}`;
    const varName = `${slug}_${name}`.replace(/[^a-zA-Z0-9_]/g, "_");
    imports.push(`"${key}": () => import("${importPath}"),`);
  }
}

const manifest = `// AUTO-GENERATED FILE. DO NOT EDIT.
export const blogs: Record<string, () => Promise<any>> = {
  ${imports.join("\n  ")}
};
`;

fs.writeFileSync(manifestPath, manifest);
console.log(
  `✅ Wrote manifest with ${imports.length} entries to blogs-manifest.ts`,
);
