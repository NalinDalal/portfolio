"use client";
import dynamic from "next/dynamic";

const MDXContentClient = dynamic(
  () => import("@/components/MDXContentClient"),
  { ssr: false },
);

export default function MDXPageClient({
  source,
  title,
}: {
  source: string;
  title: string;
}) {
  return (
    <main className="prose prose-invert mx-auto py-8">
      <h1>{title}</h1>
      <MDXContentClient source={source} />
    </main>
  );
}
