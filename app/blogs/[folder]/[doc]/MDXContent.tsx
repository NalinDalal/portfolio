"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface MDXContentProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MDXContent({ mdxSource }: MDXContentProps) {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto prose-headings:scroll-mt-20">
      <MDXRemote
        {...mdxSource}
        components={{
          h1: (props) => (
            <h1
              className="text-4xl font-bold mt-10 mb-6 border-b border-gray-200 pb-2"
              {...props}
            />
          ),
          h2: (props) => (
            <h2
              className="text-2xl font-semibold mt-8 mb-4 border-b border-gray-100 pb-1"
              {...props}
            />
          ),
          h3: (props) => (
            <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
          ),
          p: (props) => <p className="leading-7 mb-5 text-gray-700" {...props} />,
          ul: (props) => <ul className="list-disc pl-6 mb-5" {...props} />,
          ol: (props) => <ol className="list-decimal pl-6 mb-5" {...props} />,
          code: (props) => (
            <code
              className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono text-gray-800"
              {...props}
            />
          ),
          pre: (props) => (
            <pre
              className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"
              {...props}
            />
          ),
          a: (props) => (
            <a
              className="text-blue-600 font-medium underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
        }}
      />
    </article>
  );
}

