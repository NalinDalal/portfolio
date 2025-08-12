import fs from "fs";
import path from "path";

interface PRDocsProps {
  params: { folder: string };
}

// This function tells Next.js all possible `folder` params to statically generate
export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "blogs");

  // Read all folder names ending with '-pr' inside blogs
  const blogFolders = fs
    .readdirSync(blogsDir)
    .filter((name) => name.endsWith("-pr"))
    .map((name) => ({
      folder: name.replace(/-pr$/, ""),
    }));

  return blogFolders;
}

export default async function PRDocs({ params }: PRDocsProps) {
  const { folder } = params;
  const prFolder = `${folder}-pr`;
  const folderPath = path.join(process.cwd(), "blogs", prFolder);

  const docs = fs
    .readdirSync(folderPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  return (
    <main className="px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">{folder} Docs</h1>
      <ul>
        {docs.map((doc) => (
          <li key={doc}>
            <a href={`/blogs/${folder}/${doc}`} className="text-blue-500">
              {doc}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

