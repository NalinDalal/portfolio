"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // optional if you’re using a classnames utility

interface LanguageBadgeProps {
  language: string;
  className?: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "text-white",
  JavaScript: "text-slate-200",
  Python: "text-slate-300",
  Rust: "text-slate-400",
  "C++": "text-slate-500",
  Go: "text-slate-600",
  Java: "text-slate-700",
  Shell: "text-slate-300",
  HTML: "text-white",
  CSS: "text-slate-400",
};

export function LanguageBadge({
  language,
  className = "",
}: LanguageBadgeProps) {
  const colorClass = languageColors[language] || "text-slate-300";

  return (
    <Badge
      variant="outline"
      className={cn(
        "text-xs border-slate-600 bg-slate-800/50",
        colorClass,
        className,
      )}
    >
      {language}
    </Badge>
  );
}
