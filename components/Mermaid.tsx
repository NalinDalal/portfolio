"use client";

import { useLayoutEffect, useRef, useId } from "react";
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

function MermaidSkeleton() {
  return (
    <div className="w-full space-y-3 py-2">
      <div className="skeleton h-4 w-3/4 mx-auto rounded" />
      <div className="flex justify-center gap-4">
        <div className="skeleton h-8 w-24 rounded-lg" />
        <div className="skeleton h-8 w-4 rounded" />
        <div className="skeleton h-8 w-28 rounded-lg" />
      </div>
      <div className="skeleton h-4 w-1/2 mx-auto rounded" />
    </div>
  );
}

export function Mermaid({
  chart,
  title,
}: {
  chart: string;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const uid = useId();
  const chartRef = useRef(chart);
  chartRef.current = chart;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const diagramId = `mermaid-${uid.replace(/:/g, "")}`;

    let cancelled = false;

    mermaid
      .render(diagramId, chartRef.current)
      .then(({ svg }) => {
        if (cancelled) return;
        if (el === ref.current) {
          el.innerHTML = svg;
        }
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("Mermaid render error:", err);
        if (el === ref.current) {
          el.innerHTML = `<pre class="text-text-secondary text-sm">${chartRef.current}</pre>`;
        }
      });

    return () => {
      cancelled = true;
    };
  }, [uid, chart]);

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
        <div ref={ref} className="flex justify-center min-h-[60px]">
          <MermaidSkeleton />
        </div>
      </div>
    </div>
  );
}
