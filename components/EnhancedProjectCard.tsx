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
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-blue-500",
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
      <div className="relative h-full p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-md dark:hover:shadow-zinc-900/20">
        {/* Gradient accent line */}
        <div className={`absolute top-0 left-4 right-4 h-px bg-gradient-to-r ${accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${accent} bg-opacity-10`}>
              <svg
                className="w-5 h-5 text-zinc-600 dark:text-zinc-400"
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
              <h3 className="font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {repository.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isFeatured && (
              <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded text-[10px] font-medium border border-blue-500/20 uppercase tracking-wide">
                Case Study
              </span>
            )}
            <ExternalLink className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors" />
          </div>
        </div>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3">
          {repository.description || "No description"}
        </p>

        {repository.topics && repository.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {repository.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="text-[11px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-full"
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
