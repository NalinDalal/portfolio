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
    lineColor: "#6b6b76",
    secondaryColor: "#141416",
    tertiaryColor: "#1c1c20",
    fontFamily: "system-ui, sans-serif",
  },
});

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useRef(`mermaid-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "";
      mermaid.render(id.current, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      }).catch((err) => {
        console.error("Mermaid render error:", err);
        if (ref.current) {
          ref.current.innerHTML = `<pre class="text-text-secondary text-sm">${chart}</pre>`;
        }
      });
    }
  }, [chart]);

  return (
    <div className="my-6 p-4 bg-surface rounded-xl border border-border overflow-x-auto">
      <div ref={ref} className="flex justify-center" />
    </div>
  );
}
