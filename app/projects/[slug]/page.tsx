// app/projects/[slug]/page.tsx
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjects, getProjectBySlug } from "@/lib/projects";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import HashScrollHandler from "@/components/HashScrollHandler";

/* ──────────────────────────────────────────────
   🧩 Static Params
────────────────────────────────────────────── */
export async function generateStaticParams() {
  try {
    const projects = await getProjects();
    return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
  } catch (err) {
    console.error("Error generating static params:", err);
    return [];
  }
}

/* ──────────────────────────────────────────────
   💬 Custom Callout Component
────────────────────────────────────────────── */
const Callout = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success" | "error";
}) => {
  const styles = {
    info: "border-blue-500/50 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-200",
    warning: "border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-200",
    success: "border-green-500/50 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-200",
    error: "border-red-500/50 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-200",
  };
  return (
    <div className={`rounded-lg border-2 p-4 my-6 ${styles[type]}`}>
      {children}
    </div>
  );
};

/* ──────────────────────────────────────────────
   🧱 MDX Component Overrides (Matching Blog Style)
────────────────────────────────────────────── */
const mdxComponents = {
  h1: (props: any) => (
    <h1
      {...props}
      className="text-4xl font-bold text-zinc-900 dark:text-white mb-6 mt-8 scroll-mt-20"
    />
  ),
  h2: (props: any) => (
    <h2
      {...props}
      className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 mt-8 scroll-mt-20"
    />
  ),
  h3: (props: any) => (
    <h3
      {...props}
      className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3 mt-6 scroll-mt-20"
    />
  ),
  h4: (props: any) => (
    <h4
      {...props}
      className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 mt-4 scroll-mt-20"
    />
  ),
  p: (props: any) => (
    <p {...props} className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed text-base" />
  ),
  a: (props: any) => {
    const isAnchor = props.href?.startsWith("#");
    return (
      <a
        {...props}
        className={`text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline ${
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
      className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mb-4 space-y-2 ml-4"
    />
  ),
  ol: (props: any) => (
    <ol
      {...props}
      className="list-decimal list-inside text-zinc-700 dark:text-zinc-300 mb-4 space-y-2 ml-4"
    />
  ),
  li: (props: any) => <li {...props} className="text-zinc-700 dark:text-zinc-300 ml-2" />,
  code: (props: any) => {
    const { className, children } = props;
    const isInline = !className;
    if (isInline)
      return (
        <code className="bg-zinc-100 dark:bg-zinc-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    return (
      <code className="block bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
        {children}
      </code>
    );
  },
  pre: (props: any) => (
    <pre
      {...props}
      className="bg-zinc-50 dark:bg-zinc-900 rounded-lg overflow-x-auto mb-6 border border-zinc-200 dark:border-zinc-800"
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      {...props}
      className="border-l-4 border-zinc-400 dark:border-zinc-500 pl-4 italic text-zinc-600 dark:text-zinc-400 my-6 bg-zinc-50 dark:bg-zinc-900/50 py-2"
    />
  ),
  hr: (props: any) => <hr {...props} className="border-zinc-200 dark:border-zinc-800 my-8" />,
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table
        {...props}
        className="min-w-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
      />
    </div>
  ),
  thead: (props: any) => <thead {...props} className="bg-zinc-50 dark:bg-zinc-800" />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} className="border-b border-zinc-200 dark:border-zinc-800" />,
  th: (props: any) => (
    <th {...props} className="px-4 py-2 text-left text-zinc-900 dark:text-white font-semibold" />
  ),
  td: (props: any) => <td {...props} className="px-4 py-2 text-zinc-700 dark:text-zinc-300" />,
  strong: (props: any) => (
    <strong {...props} className="font-bold text-zinc-900 dark:text-white" />
  ),
  em: (props: any) => <em {...props} className="italic text-zinc-700 dark:text-zinc-300" />,
  Callout,
};

/* ──────────────────────────────────────────────
    📘 Main Page Component (FIXED for Next.js 15)
────────────────────────────────────────────── */
export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await params - Next.js 15 requirement
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  const mdxPath = path.join(process.cwd(), "case-study", `${slug}.mdx`);
  let content = "";
  let frontmatter: any = {};

  try {
    const raw = await fs.readFile(mdxPath, "utf8");
    const parsed = matter(raw);
    content = parsed.content;
    frontmatter = parsed.data;
  } catch {
    content = `
# Case Study Coming Soon

This project doesn't have a detailed case study yet. Check back soon!

In the meantime, you can:
- [View the live demo](${project.liveLink || "#"})
- [Explore the code on GitHub](${project.githubLink})

## About ${project.projectName}

${project.description}

## Tech Stack

${project.tags.map((t) => `- ${t}`).join("\n")}
    `.trim();
  }

  const formattedDate =
    frontmatter.date || project.createdAt
      ? new Date(frontmatter.date || project.createdAt).toLocaleDateString(
          "en-US",
          { year: "numeric", month: "long", day: "numeric" },
        )
      : null;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Suspense fallback={null}>
        <HashScrollHandler />
      </Suspense>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* 🔙 Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* 🧩 Header */}
        <header className="mb-12 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <h1 className="text-5xl font-bold mb-2 text-zinc-900 dark:text-white">
            {frontmatter.title || project.projectName}
          </h1>

          {formattedDate && (
            <p className="text-zinc-500 mb-2 text-sm">{formattedDate}</p>
          )}

          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {project.description && (
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-2">{project.description}</p>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition font-medium"
              >
                <ExternalLink size={18} />
                View Live Demo
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition font-medium"
              >
                <Github size={18} />
                View Source Code
              </a>
            )}
          </div>
        </header>

        {/* 📝 MDX Content */}
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        {/* 🔚 Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </footer>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
    🔍 Metadata for SEO (FIXED for Next.js 15)
────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await params
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Project Not Found",
      description: "Project not found",
    };
  }
  return {
    title: `${project.projectName} - Case Study`,
    description: project.description,
  };
}
