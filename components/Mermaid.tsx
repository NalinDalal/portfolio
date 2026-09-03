"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#e8a838",
    primaryTextColor: "#ededef",
    primaryBorderColor: "#3a3a40",
    lineColor: "#4a4a54",
    secondaryColor: "#1c1c20",
    tertiaryColor: "#141416",
    fontSize: "14px",
    fontFamily: "system-ui, sans-serif",
  },
});

export function Mermaid({
  chart,
  title,
}: {
  chart: string;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useRef(`mermaid-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "";
      mermaid
        .render(id.current, chart)
        .then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg;
          }
        })
        .catch((err) => {
          console.error("Mermaid render error:", err);
          if (ref.current) {
            ref.current.innerHTML = `<pre class="text-text-secondary text-sm">${chart}</pre>`;
          }
        });
    }
  }, [chart]);

  return (
    <div className="mermaid-wrapper group my-8 overflow-x-auto">
      <style>{`
        .mermaid-wrapper {
          opacity: 0;
          animation: mermaid-fade-in 0.6s ease-out forwards;
        }
        .mermaid-wrapper::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(135deg, var(--color-accent-muted), var(--color-teal-muted));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .mermaid-wrapper:hover::before {
          opacity: 1;
        }
        @keyframes mermaid-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="relative bg-surface border border-border rounded-xl p-5">
        {title && (
          <p className="text-xs font-medium text-text-secondary mb-4 tracking-wide uppercase">
            {title}
          </p>
        )}
        <div ref={ref} className="flex justify-center" />
      </div>
    </div>
  );
}
