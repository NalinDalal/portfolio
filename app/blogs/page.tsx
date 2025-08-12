import fs from "fs";
import path from "path";
import Link from "next/link";

export default function BlogsIndex() {
  const blogsDir = path.join(process.cwd(), "blogs");
  const prFolders = fs.readdirSync(blogsDir).filter((f) => f.endsWith("-pr"));

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Pull Request Docs
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {prFolders.map((folder) => {
          const displayName = folder.replace(/-pr$/, "");
          return (
            <Link
              key={folder}
              href={`/blogs/${displayName}`}
              className="block p-6 bg-white rounded-xl shadow-md border border-gray-200 
                         hover:shadow-lg hover:border-gray-300 transition-all duration-200"
            >
              <h2 className="text-lg font-semibold text-gray-800 capitalize">
                {displayName}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Documentation for <span className="font-medium">{folder}</span>
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

