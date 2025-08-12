import { MDXRemote } from "next-mdx-remote/rsc";

export default function MDXContent({ mdxSource }: { mdxSource: any }) {
  return <MDXRemote {...mdxSource} />;
}

