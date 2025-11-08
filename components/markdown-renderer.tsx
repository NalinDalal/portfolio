"use client";

import Markdown from "markdown-to-jsx";

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Markdown
          options={{
            overrides: {
              h1: {
                component: "h1",
                props: { className: "text-4xl font-bold text-white mb-6 mt-8" },
              },
              h2: {
                component: "h2",
                props: { className: "text-3xl font-bold text-white mb-4 mt-8" },
              },
              p: {
                component: "p",
                props: { className: "text-white/90 mb-4 leading-relaxed" },
              },
              code: {
                component: "code",
                props: {
                  className:
                    "bg-slate-800 text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono",
                },
              },
              pre: {
                component: "pre",
                props: {
                  className:
                    "bg-slate-900 p-4 rounded-lg overflow-x-auto mb-6 border border-slate-700",
                },
              },
              blockquote: {
                component: "blockquote",
                props: {
                  className:
                    "border-l-4 border-slate-500 pl-4 italic text-white/90 my-6 bg-slate-800/30 py-2",
                },
              },
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </article>
  );
}
