import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "blogs");
  const blogFolders = fs
    .readdirSync(blogsDir)
    .filter((name) => name.endsWith("-pr"))
    .map((name) => ({ slug: name.replace(/-pr$/, "") }));
  return blogFolders;
}
// @ts-ignore
export default async function Page({ params }) {
  const { slug } = params;
  const prFolder = `${slug}-pr`;
  const folderPath = path.join(process.cwd(), "blogs", prFolder);

  let mainFile = null;
  let fileContent = null;
  try {
    const files = fs
      .readdirSync(folderPath)
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
    if (files.length > 0) {
      mainFile = files[0];
      fileContent = fs.readFileSync(path.join(folderPath, mainFile), "utf8");
    }
  } catch (e) {
    // Folder not found or error
  }

  if (!mainFile || !fileContent) {
    return (
      <main className="px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">{slug}</h1>
        <div className="text-slate-400">No blog post found for this topic.</div>
      </main>
    );
  }

  return (
    <main className="px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">{slug}</h1>
      <article className="prose prose-invert max-w-none">
        <MDXRemote source={fileContent} />
      </article>
    </main>
  );
}
