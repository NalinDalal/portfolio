import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HashScrollHandler from "@/components/HashScrollHandler";

// ------------------------------------------------------
//  1. Generate Static Params
// ------------------------------------------------------
export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "blogs");

  try {
    const topics = await fs.readdir(blogsDir, { withFileTypes: true });
    const paths: { slug: string; subslug: string }[] = [];

    for (const topic of topics) {
      if (!topic.isDirectory()) continue;

      const topicPath = path.join(blogsDir, topic.name);
      const files = await fs.readdir(topicPath);

      for (const file of files) {
        if (file.endsWith(".md") || file.endsWith(".mdx")) {
          const subslug = file.replace(/\.mdx?$/, "");
          paths.push({ slug: topic.name, subslug });
        }
      }
    }

    console.log(" Static paths generated:", paths);
    return paths;
  } catch (err) {
    console.error("Error generating static params:", err);
    return [];
  }
}

// ------------------------------------------------------
//  2. Custom MDX Components
// ------------------------------------------------------
const Callout = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success" | "error";
}) => {
  const styles = {
    info: "border-blue-500/50 bg-blue-950/30 text-blue-200",
    warning: "border-yellow-500/50 bg-yellow-950/30 text-yellow-200",
    success: "border-green-500/50 bg-green-950/30 text-green-200",
    error: "border-red-500/50 bg-red-950/30 text-red-200",
  };
  return (
    <div className={`rounded-lg border-2 p-4 my-6 ${styles[type]}`}>
      {children}
    </div>
  );
};

const mdxComponents = {
  h1: (props: any) => (
    <h1
      {...props}
      className="text-4xl font-bold text-white mb-6 mt-8 scroll-mt-20"
    />
  ),
  h2: (props: any) => (
    <h2
      {...props}
      className="text-3xl font-bold text-white mb-4 mt-8 scroll-mt-20"
    />
  ),
  p: (props: any) => (
    <p {...props} className="text-white/90 mb-4 leading-relaxed text-base" />
  ),
  a: (props: any) => {
    const isAnchor = props.href?.startsWith("#");
    return (
      <a
        {...props}
        className={`text-blue-400 hover:text-blue-300 underline ${
          isAnchor ? "cursor-pointer" : ""
        }`}
        target={isAnchor ? undefined : "_blank"}
        rel={isAnchor ? undefined : "noopener noreferrer"}
      />
    );
  },
  ul: (props: any) => (
    <ul
      {...props}
      className="list-disc list-inside text-white mb-4 space-y-2 ml-4"
    />
  ),
  li: (props: any) => <li {...props} className="text-white ml-2" />,
  code: (props: any) => {
    const { className, children } = props;
    const isInline = !className;
    if (isInline)
      return (
        <code className="bg-slate-800 text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    return (
      <code className="block bg-slate-900 text-slate-200 p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
        {children}
      </code>
    );
  },
  pre: (props: any) => (
    <pre
      {...props}
      className="bg-slate-900 rounded-lg overflow-x-auto mb-6 border border-slate-700"
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      {...props}
      className="border-l-4 border-slate-500 pl-4 italic text-white/90 my-6 bg-slate-800/30 py-2"
    />
  ),
  Callout,
};

// ------------------------------------------------------
// 3. Page Component
// ------------------------------------------------------
export default async function BlogPage({
  params,
}: {
  params: { slug: string; subslug: string };
}) {
  const { slug, subslug } = params;

  const mdDir = path.join(process.cwd(), "blogs", slug);
  const possiblePaths = [
    path.join(mdDir, `${subslug}.mdx`),
    path.join(mdDir, `${subslug}.md`),
  ];

  let mdPath: string | null = null;
  for (const p of possiblePaths) {
    try {
      await fs.access(p);
      mdPath = p;
      break;
    } catch {}
  }

  if (!mdPath) return notFound();

  try {
    const raw = await fs.readFile(mdPath, "utf8");
    const { content, data } = matter(raw);

    const formattedDate = data.date
      ? new Date(data.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <HashScrollHandler />

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>

          <header className="mb-12 pb-8 border-b border-slate-800">
            <h1 className="text-5xl font-bold mb-2 text-white">
              {data.title || subslug}
            </h1>

            {formattedDate && (
              <p className="text-slate-400 mb-2 text-sm">{formattedDate}</p>
            )}

            {data.tags && (
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {data.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-slate-800 text-slate-300 px-2 py-1 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {data.description && (
              <p className="text-lg text-slate-300 mt-2">{data.description}</p>
            )}
          </header>

          <article className="prose prose-invert prose-slate max-w-none">
            <MDXRemote source={content} components={mdxComponents} />
          </article>

          <footer className="mt-16 pt-8 border-t border-slate-800">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
            >
              <ArrowLeft size={16} />
              Back to all blogs
            </Link>
          </footer>
        </div>
      </div>
    );
  } catch (err) {
    console.error(` Failed to load blog ${slug}/${subslug}:`, err);
    return notFound();
  }
}

// ------------------------------------------------------
//  4. Metadata
// ------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: { slug: string; subslug: string };
}) {
  const mdPath = path.join(
    process.cwd(),
    "blogs",
    params.slug,
    `${params.subslug}.md`,
  );
  try {
    const raw = await fs.readFile(mdPath, "utf8");
    const parsed = matter(raw);
    return {
      title: parsed.data.title || params.subslug,
      description: parsed.data.description || "",
    };
  } catch {
    return { title: "Blog Not Found" };
  }
}
