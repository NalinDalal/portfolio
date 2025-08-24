"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // optional if you’re using a classnames utility

interface LanguageBadgeProps {
  language: string;
  className?: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "text-white",
  JavaScript: "text-gray-200",
  Python: "text-gray-300",
  Rust: "text-gray-400",
  "C++": "text-gray-500",
  Go: "text-gray-600",
  Java: "text-gray-700",
  Shell: "text-gray-300",
  HTML: "text-white",
  CSS: "text-gray-400",
};

export function LanguageBadge({
  language,
  className = "",
}: LanguageBadgeProps) {
  const colorClass = languageColors[language] || "text-gray-300";

  return (
    <Badge
      variant="outline"
      className={cn(
        "text-xs border-gray-600 bg-gray-800/50",
        colorClass,
        className,
      )}
    >
      {language}
    </Badge>
  );
}
