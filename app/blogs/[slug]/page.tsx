import fs from "fs";
import path from "path";

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

  const docs = fs
    .readdirSync(folderPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  return (
    <main className="px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">{slug} Docs</h1>
      <ul>
        {docs.map((doc) => (
          <li key={doc}>
            <a href={`/blogs/${slug}/${doc}`} className="text-blue-500">
              {doc}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
