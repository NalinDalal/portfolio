"use client";

import Markdown from "markdown-to-jsx";

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <article className="min-h-screen bg-bg-primary text-text-primary">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Markdown
          options={{
            overrides: {
              h1: {
                component: "h1",
                props: { className: "font-display text-4xl font-bold text-text-primary mb-6 mt-8" },
              },
              h2: {
                component: "h2",
                props: { className: "font-display text-3xl font-bold text-text-primary mb-4 mt-8" },
              },
              p: {
                component: "p",
                props: { className: "text-text-secondary mb-4 leading-relaxed" },
              },
              code: {
                component: "code",
                props: {
                  className:
                    "bg-surface text-teal px-1.5 py-0.5 rounded text-sm font-mono",
                },
              },
              pre: {
                component: "pre",
                props: {
                  className:
                    "bg-surface p-4 rounded-lg overflow-x-auto mb-6 border border-border",
                },
              },
              blockquote: {
                component: "blockquote",
                props: {
                  className:
                    "border-l-4 border-accent pl-4 italic text-text-secondary my-6 bg-surface py-2",
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
