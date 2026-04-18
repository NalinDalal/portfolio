"use client";

import { GitHubRepository } from "@/types/github";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EnhancedProjectCardProps {
  repository: GitHubRepository & {
    liveLink?: string;
    caseStudy?: string;
    githubLink?: string;
  };
  colorIndex: number;
}

export function EnhancedProjectCard({
  repository,
  colorIndex,
}: EnhancedProjectCardProps) {
  return (
    <Link
      href={repository.caseStudy || "#"}
      className="group block p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md">
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
        <svg
          className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <h3 className="font-medium text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
        {repository.name}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
        {repository.description || "No description"}
      </p>
      {repository.topics && repository.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {repository.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
