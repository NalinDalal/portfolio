"use client";

import { evaluateSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import matter from "gray-matter";

export default function MDXContentClient({ source }: { source: string }) {
  // Extract frontmatter + content
  const { content, data: frontmatter } = matter(source);

  // Compile MDX source into a component
  const { default: Content } = evaluateSync(content, {
    ...runtime,
  });

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <Content />
    </article>
  );
}
