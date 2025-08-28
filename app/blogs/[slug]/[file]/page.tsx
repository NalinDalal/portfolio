import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import MdxLayout from "@/components/MdxLayout";

export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "blogs");
  const folders: string[] = fs
    .readdirSync(blogsDir)
    .filter((folder: string) => folder.endsWith("-pr"));
  const params: { slug: string; file: string }[] = [];
  for (const folder of folders) {
    const slug = folder.replace(/-pr$/, "");
    const folderPath = path.join(blogsDir, folder);
    const files: string[] = fs
      .readdirSync(folderPath)
      .filter((f: string) => f.endsWith(".md") || f.endsWith(".mdx"));
    for (const file of files) {
      params.push({ slug, file: path.parse(file).name });
    }
  }
  return params;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; file: string }>;
}) {
  const { slug, file } = await params;

  // Build the import path for the MDX file in blogs/*-pr/*.mdx
  const mdxPath = `@/blogs/${slug}-pr/${file}.mdx`;

  let MDXContent;
  try {
    MDXContent = dynamic(() => import(mdxPath));
  } catch (e) {
    return notFound();
  }

  return (
    <MdxLayout>
      <MDXContent />
    </MdxLayout>
  );
}
