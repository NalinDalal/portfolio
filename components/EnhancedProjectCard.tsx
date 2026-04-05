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
    <Link href={repository.caseStudy || "#"} className="block">
      <Card
        className="group h-full transition-all duration-200 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800"
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {repository.name}
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
            {repository.description || "No description available"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Topics */}
          {repository.topics && repository.topics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {repository.topics.slice(0, 3).map((topic) => (
                <Badge
                  key={topic}
                  variant="secondary"
                  className="text-xs"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-3 pt-2">
            {repository.html_url || repository.githubLink ? (
              <span className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                Code
              </span>
            ) : null}
            {repository.liveLink && (
              <span className="text-sm text-blue-600 dark:text-blue-400">
                Live
              </span>
            )}
            {repository.caseStudy && (
              <span className="text-sm text-zinc-900 dark:text-white ml-auto group-hover:underline">
                Details →
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
