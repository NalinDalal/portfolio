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
                props: { className: "font-display text-[var(--text-display)] font-bold text-text-primary mb-6 mt-8 tracking-[-0.025em]" },
              },
              h2: {
                component: "h2",
                props: { className: "font-display text-[var(--text-heading)] font-bold text-text-primary mb-4 mt-8 tracking-[-0.02em]" },
              },
              h3: {
                component: "h3",
                props: { className: "font-display text-[var(--text-lead)] font-semibold text-text-primary mb-3 mt-6 tracking-[-0.01em]" },
              },
              h4: {
                component: "h4",
                props: { className: "font-display text-[var(--text-lead)] font-semibold text-text-primary mb-2 mt-4" },
              },
              h5: {
                component: "h5",
                props: { className: "font-display text-[var(--text-body)] font-semibold text-text-primary mb-2 mt-4" },
              },
              h6: {
                component: "h6",
                props: { className: "font-display text-[var(--text-body)] font-semibold text-text-secondary mb-2 mt-4" },
              },
              p: {
                component: "p",
                props: { className: "text-text-secondary mb-4 text-[var(--text-body)] leading-[1.6]" },
              },
              a: {
                component: "a",
                props: { className: "text-accent hover:text-accent/80 underline underline-offset-2 decoration-accent/30 hover:decoration-accent/60 transition-colors duration-200" },
              },
              ul: {
                component: "ul",
                props: { className: "text-text-secondary mb-4 space-y-1.5 ml-1 list-disc marker:text-text-secondary/40" },
              },
              ol: {
                component: "ol",
                props: { className: "text-text-secondary mb-4 space-y-1.5 ml-1 list-decimal marker:text-text-secondary/40" },
              },
              li: {
                component: "li",
                props: { className: "text-text-secondary pl-1 text-[var(--text-body)] leading-[1.6]" },
              },
              code: {
                component: "code",
                props: {
                  className:
                    "bg-surface text-teal px-1.5 py-0.5 rounded text-[var(--text-small)] font-mono border border-border/50",
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
                    "border-l-4 border-accent pl-4 italic text-text-secondary my-6 bg-surface/50 py-2 rounded-r-lg",
                },
              },
              hr: {
                component: "hr",
                props: { className: "border-border my-10" },
              },
              img: {
                component: "img",
                props: { className: "rounded-lg max-w-full" },
              },
              table: {
                component: "div",
                props: { className: "overflow-x-auto my-6 rounded-lg border border-border" },
              },
              thead: {
                component: "thead",
                props: { className: "bg-surface" },
              },
              tbody: {
                component: "tbody",
                props: {},
              },
              tr: {
                component: "tr",
                props: { className: "border-b border-border last:border-0" },
              },
              th: {
                component: "th",
                props: { className: "px-4 py-2.5 text-left text-text-primary font-semibold text-sm" },
              },
              td: {
                component: "td",
                props: { className: "px-4 py-2.5 text-text-secondary" },
              },
              strong: {
                component: "strong",
                props: { className: "font-semibold text-text-primary" },
              },
              em: {
                component: "em",
                props: { className: "italic text-text-secondary" },
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
