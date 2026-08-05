"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LanguageBadgeProps {
  language: string;
  className?: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "text-accent",
  JavaScript: "text-accent",
  Python: "text-teal",
  Rust: "text-accent",
  "C++": "text-text-primary",
  Go: "text-teal",
  Java: "text-text-secondary",
  Shell: "text-teal",
  HTML: "text-text-primary",
  CSS: "text-teal",
};

export function LanguageBadge({
  language,
  className = "",
}: LanguageBadgeProps) {
  const colorClass = languageColors[language] || "text-text-secondary";

  return (
    <Badge
      variant="outline"
      className={cn(
        "text-xs border-border bg-surface",
        colorClass,
        className,
      )}
    >
      {language}
    </Badge>
  );
}
