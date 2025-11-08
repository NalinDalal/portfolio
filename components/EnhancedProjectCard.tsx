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
import { LanguageBadge } from "@/components/LanguageBadge";
import { Star, GitFork, ExternalLink, Calendar } from "lucide-react";

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
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const colorSchemes = [
    {
      bg: "bg-gradient-to-br from-slate-900/80 to-slate-900/60",
      border: "border-slate-800",
      accent: "text-white",
      hover: "hover:border-white/40 hover:shadow-slate-200/10",
    },
    {
      bg: "bg-gradient-to-br from-slate-900/80 to-slate-800/60",
      border: "border-slate-700",
      accent: "text-slate-200",
      hover: "hover:border-slate-400/40 hover:shadow-slate-400/10",
    },
    {
      bg: "bg-gradient-to-br from-slate-800/80 to-slate-700/60",
      border: "border-slate-700",
      accent: "text-slate-300",
      hover: "hover:border-slate-300/40 hover:shadow-slate-300/10",
    },
  ];

  const colorScheme = colorSchemes[colorIndex % colorSchemes.length];

  return (
    <Card
      className={`group transition-all duration-300 hover:scale-[1.02] rounded-lg backdrop-blur-lg ${colorScheme.bg} ${colorScheme.border} ${colorScheme.hover} border-2`}
    >
      <CardHeader>
        <CardTitle className="text-lg text-white group-hover:text-slate-200 transition-colors">
          {repository.name}
        </CardTitle>
        <CardDescription className="text-slate-300 line-clamp-2">
          {repository.description || "No description available"}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-slate-400">
          {repository.language && (
            <LanguageBadge language={repository.language} />
          )}

          {repository.stargazers_count > 0 && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{repository.stargazers_count}</span>
            </div>
          )}

          {repository.forks_count > 0 && (
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{repository.forks_count}</span>
            </div>
          )}
        </div>

        {/* Topics */}
        {repository.topics && repository.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {repository.topics.slice(0, 3).map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="text-xs bg-slate-800/50 text-slate-300 border-slate-600"
              >
                {topic}
              </Badge>
            ))}
            {repository.topics.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs text-slate-400 border-slate-600"
              >
                +{repository.topics.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Updated date */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Calendar className="h-3 w-3" />
          <span>Updated {formatDate(repository.updated_at)}</span>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-slate-700">
          <a
            href={repository.html_url || repository.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-300 hover:text-white hover:underline transition"
          >
            Code
          </a>

          {repository.liveLink && (
            <a
              href={repository.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-300 hover:text-white hover:underline transition"
            >
              Live Demo
            </a>
          )}

          {repository.caseStudy && (
            <Link
              href={repository.caseStudy}
              className="text-sm text-white hover:underline transition font-medium"
            >
              Case Study →
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
