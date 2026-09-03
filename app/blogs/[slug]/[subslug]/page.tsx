import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import remarkGfm from "remark-gfm";
import HashScrollHandler from "@/components/HashScrollHandler";
import { Mermaid } from "@/components/Mermaid";

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
    info: "border-accent/30 bg-accent/5 text-accent",
    warning: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400",
    success: "border-teal/30 bg-teal/5 text-teal",
    error: "border-red-500/30 bg-red-500/5 text-red-400",
  };
  return (
    <div className={`rounded-xl border-2 p-4 my-6 ${styles[type]}`}>
      {children}
    </div>
  );
};

const mdxComponents = {
  h1: (props: any) => (
    <h1
      {...props}
      className="font-display text-4xl font-bold text-text-primary mb-6 mt-10 scroll-mt-20"
    />
  ),
  h2: (props: any) => (
    <h2
      {...props}
      className="font-display text-2xl font-bold text-text-primary mb-4 mt-10 pb-2 border-b border-border scroll-mt-20"
    />
  ),
  h3: (props: any) => (
    <h3
      {...props}
      className="font-display text-xl font-semibold text-text-primary mb-3 mt-8 scroll-mt-20"
    />
  ),
  p: (props: any) => (
    <p {...props} className="text-text-secondary mb-5 leading-relaxed text-[15px]" />
  ),
  a: (props: any) => {
    const isAnchor = props.href?.startsWith("#");
    return (
      <a
        {...props}
        className={`text-accent hover:text-accent/80 underline underline-offset-2 decoration-accent/30 hover:decoration-accent/60 transition-colors ${
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
      className="text-text-secondary mb-5 space-y-1.5 ml-1 list-disc marker:text-text-secondary/40"
    />
  ),
  ol: (props: any) => (
    <ol
      {...props}
      className="text-text-secondary mb-5 space-y-1.5 ml-1 list-decimal marker:text-text-secondary/40"
    />
  ),
  li: (props: any) => (
    <li {...props} className="text-text-secondary pl-1 leading-relaxed text-[15px]" />
  ),
  code: (props: any) => {
    const { className, children } = props;
    const isInline = !className;
    if (isInline)
      return (
        <code className="bg-surface text-teal px-1.5 py-0.5 rounded text-[13px] font-mono border border-border/50">
          {children}
        </code>
      );
    return (
      <code className="block bg-surface text-text-primary p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
        {children}
      </code>
    );
  },
  pre: (props: any) => {
    const child = props.children as any;
    if (child?.props?.className?.includes("language-mermaid")) {
      return <Mermaid chart={child.props.children} />;
    }
    return (
      <pre
        {...props}
        className="bg-surface rounded-lg overflow-x-auto mb-6 border border-border"
      />
    );
  },
  blockquote: (props: any) => (
    <blockquote
      {...props}
      className="border-l-4 border-accent pl-4 italic text-text-secondary my-6 bg-surface/50 py-2 rounded-r-lg"
    />
  ),
  hr: (props: any) => (
    <hr {...props} className="border-border my-10" />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-border">
      <table {...props} className="min-w-full text-sm" />
    </div>
  ),
  thead: (props: any) => <thead {...props} className="bg-surface" />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} className="border-b border-border last:border-0" />,
  th: (props: any) => (
    <th {...props} className="px-4 py-2.5 text-left text-text-primary font-semibold text-sm" />
  ),
  td: (props: any) => <td {...props} className="px-4 py-2.5 text-text-secondary" />,
  strong: (props: any) => (
    <strong {...props} className="font-semibold text-text-primary" />
  ),
  Callout,
};

// ------------------------------------------------------
// 3. Page Component
// ------------------------------------------------------
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>;
}) {
  const { slug, subslug } = await params;

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
      <div className="min-h-screen bg-bg-primary text-text-primary">
        <Suspense fallback={null}>
          <HashScrollHandler />
        </Suspense>

        <div className="max-w-2xl mx-auto px-4 py-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent mb-8 transition"
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>

          <header className="mb-12 pb-8 border-b border-border">
            <h1 className="font-display text-5xl font-bold mb-2 text-text-primary">
              {data.title || subslug}
            </h1>

            {formattedDate && (
              <p className="text-text-secondary mb-2 text-sm">{formattedDate}</p>
            )}

            {data.tags && (
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {data.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-surface text-text-secondary px-2 py-1 text-xs rounded-full border border-border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {data.description && (
              <p className="text-lg text-text-secondary mt-2">{data.description}</p>
            )}
          </header>

          <article className="prose prose-invert max-w-none">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </article>

          <footer className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition"
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
  params: Promise<{ slug: string; subslug: string }>;
}) {
  const { slug, subslug } = await params;
  const mdDir = path.join(process.cwd(), "blogs", slug);
  const possiblePaths = [
    path.join(mdDir, `${subslug}.mdx`),
    path.join(mdDir, `${subslug}.md`),
  ];

  for (const mdPath of possiblePaths) {
    try {
      const raw = await fs.readFile(mdPath, "utf8");
      const parsed = matter(raw);
      return {
        title: parsed.data.title || subslug,
        description: parsed.data.description || "",
      };
    } catch {}
  }
  return { title: "Blog Not Found" };
}
