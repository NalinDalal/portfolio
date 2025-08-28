// app/blogs/[slug]/[file]/page.tsx
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import MdxLayout from "@/components/MdxLayout";
import { blogs } from "@/blogs-manifest";

export async function generateStaticParams() {
  return Object.keys(blogs).map((key) => {
    const [slug, file] = key.split("/");
    return { slug, file };
  });
}

export default async function BlogPostPage({ params }: any) {
  const key = `${params.slug}/${params.file}`;
  const importer = blogs[key];

  if (!importer) return notFound();

  const MDXContent = dynamic(importer);

  return (
    <MdxLayout>
      <MDXContent />
    </MdxLayout>
  );
}
