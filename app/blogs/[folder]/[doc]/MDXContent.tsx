
'use client'
import { MDXRemote } from "next-mdx-remote";

export default function MDXContent({ mdxSource }: { mdxSource: any }) {
  return <MDXRemote {...mdxSource} components={{}} />;
}


