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
import { Mermaid } from "@/components/Mermaid";

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

/* ──────────────────────────────────────────────
   🧱 MDX Component Overrides
────────────────────────────────────────────── */
const mdxComponents = {
  h1: (props: any) => (
    <h1
      {...props}
      className="font-display text-4xl font-bold text-text-primary mb-6 mt-8 scroll-mt-20"
    />
  ),
  h2: (props: any) => (
    <h2
      {...props}
      className="font-display text-3xl font-bold text-text-primary mb-4 mt-8 scroll-mt-20"
    />
  ),
  h3: (props: any) => (
    <h3
      {...props}
      className="font-display text-2xl font-semibold text-text-primary mb-3 mt-6 scroll-mt-20"
    />
  ),
  h4: (props: any) => (
    <h4
      {...props}
      className="font-display text-xl font-semibold text-text-primary mb-2 mt-4 scroll-mt-20"
    />
  ),
  p: (props: any) => (
    <p {...props} className="text-text-secondary mb-4 leading-relaxed text-base" />
  ),
  a: (props: any) => {
    const isAnchor = props.href?.startsWith("#");
    return (
      <a
        {...props}
        className={`text-accent hover:text-accent/80 underline ${
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
      className="list-disc list-inside text-text-secondary mb-4 space-y-2 ml-4"
    />
  ),
  ol: (props: any) => (
    <ol
      {...props}
      className="list-decimal list-inside text-text-secondary mb-4 space-y-2 ml-4"
    />
  ),
  li: (props: any) => <li {...props} className="text-text-secondary ml-2" />,
  code: (props: any) => {
    const { className, children } = props;
    const isInline = !className;
    if (isInline)
      return (
        <code className="bg-surface text-teal px-1.5 py-0.5 rounded text-sm font-mono">
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
    if (
      child?.props?.className?.includes("language-mermaid")
    ) {
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
      className="border-l-4 border-accent pl-4 italic text-text-secondary my-6 bg-surface py-2"
    />
  ),
  hr: (props: any) => <hr {...props} className="border-border my-8" />,
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table
        {...props}
        className="min-w-full border border-border text-text-secondary"
      />
    </div>
  ),
  thead: (props: any) => <thead {...props} className="bg-surface" />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} className="border-b border-border" />,
  th: (props: any) => (
    <th {...props} className="px-4 py-2 text-left text-text-primary font-semibold" />
  ),
  td: (props: any) => <td {...props} className="px-4 py-2 text-text-secondary" />,
  strong: (props: any) => (
    <strong {...props} className="font-bold text-text-primary" />
  ),
  em: (props: any) => <em {...props} className="italic text-text-secondary" />,
  Callout,
};

/* ──────────────────────────────────────────────
    📘 Main Page Component
────────────────────────────────────────────── */
export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Suspense fallback={null}>
        <HashScrollHandler />
      </Suspense>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent mb-8 transition"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-12 pb-8 border-b border-border">
          <h1 className="font-display text-5xl font-bold mb-2 text-text-primary">
            {frontmatter.title || project.projectName}
          </h1>

          {formattedDate && (
            <p className="text-text-secondary mb-2 text-sm">{formattedDate}</p>
          )}

          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-surface text-text-secondary px-2 py-1 text-xs rounded-full border border-border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {project.description && (
            <p className="text-lg text-text-secondary mt-2">{project.description}</p>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent text-bg-primary rounded-lg hover:bg-accent/90 transition font-display font-semibold"
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
                className="flex items-center gap-2 px-5 py-2.5 border border-border text-text-secondary rounded-lg hover:border-accent hover:text-text-primary transition font-medium"
              >
                <Github size={18} />
                View Source Code
              </a>
            )}
          </div>
        </header>

        {/* MDX Content */}
        <article className="prose prose-invert max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition"
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
    🔍 Metadata for SEO
────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
