"use client";

import { GitHubRepository } from "@/types/github";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface EnhancedProjectCardProps {
  repository: GitHubRepository & {
    liveLink?: string;
    caseStudy?: string;
    githubLink?: string;
  };
  colorIndex: number;
}

const accentColors = [
  "from-accent to-amber-600",
  "from-teal to-emerald-600",
  "from-accent/80 to-teal",
  "from-teal/80 to-accent",
];

export function EnhancedProjectCard({
  repository,
  colorIndex,
}: EnhancedProjectCardProps) {
  const isFeatured = repository.caseStudy && repository.caseStudy !== "#";
  const accent = accentColors[colorIndex % accentColors.length];

  return (
    <Link
      href={repository.caseStudy || repository.githubLink || "#"}
      className="group block"
    >
      <div className="project-card relative h-full p-5 rounded-xl border border-border bg-surface transition-all duration-200 gradient-border-top">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${accent} bg-opacity-10`}>
              <svg
                className="w-5 h-5 text-text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-semibold text-text-primary group-hover:text-accent transition-colors">
                {repository.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isFeatured && (
              <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-[10px] font-medium border border-accent/20 uppercase tracking-wide">
                Case Study
              </span>
            )}
            <ExternalLink className="w-4 h-4 text-border group-hover:text-accent transition-colors" />
          </div>
        </div>

        <p className="text-sm text-text-secondary line-clamp-2 mb-3 leading-relaxed">
          {repository.description || "No description"}
        </p>

        {repository.topics && repository.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {repository.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="text-[11px] px-2 py-0.5 bg-surface-light text-text-secondary rounded-full border border-border"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
