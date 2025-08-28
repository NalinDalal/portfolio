"use client";

import { GitHubRepository } from "@/types/github";
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
  repository: GitHubRepository;
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
      day: "numeric",
    });
  };

  // Color schemes: strictly slate-black-white
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
    {
      bg: "bg-gradient-to-br from-slate-700/80 to-slate-600/60",
      border: "border-slate-600",
      accent: "text-slate-400",
      hover: "hover:border-slate-400/40 hover:shadow-slate-400/10",
    },
    {
      bg: "bg-gradient-to-br from-slate-600/80 to-slate-500/60",
      border: "border-slate-500",
      accent: "text-slate-500",
      hover: "hover:border-slate-500/40 hover:shadow-slate-500/10",
    },
    {
      bg: "bg-gradient-to-br from-slate-500/80 to-slate-400/60",
      border: "border-slate-400",
      accent: "text-slate-400",
      hover: "hover:border-slate-400/40 hover:shadow-slate-400/10",
    },
    {
      bg: "bg-gradient-to-br from-slate-400/80 to-slate-300/60",
      border: "border-slate-300",
      accent: "text-slate-300",
      hover: "hover:border-slate-300/40 hover:shadow-slate-300/10",
    },
    {
      bg: "bg-gradient-to-br from-slate-300/80 to-white/60",
      border: "border-slate-200",
      accent: "text-white",
      hover: "hover:border-white/40 hover:shadow-white/10",
    },
  ];

  const colorScheme = colorSchemes[colorIndex % colorSchemes.length];

  return (
    <Card
      className={`group transition-all duration-300 hover:scale-[1.05] rounded-[var(--sargam-radius)] shadow-[var(--sargam-shadow)] backdrop-blur-lg ${colorScheme.bg} ${colorScheme.border} ${colorScheme.hover}`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle
              className={`text-lg text-white group-hover:${colorScheme.accent} transition-colors`}
            >
              <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:underline"
              >
                <span className="flex-1">{repository.name}</span>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0" />
              </a>
            </CardTitle>

            <CardDescription className="mt-2 text-slate-300">
              {repository.description || "No description available"}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-slate-400">
            {repository.language && (
              <LanguageBadge language={repository.language} />
            )}

            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{repository.stargazers_count}</span>
            </div>

            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{repository.forks_count}</span>
            </div>
          </div>
        </div>

        {repository.topics && repository.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repository.topics.slice(0, 4).map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="text-xs bg-slate-800/50 text-slate-300 border-slate-600"
              >
                {topic}
              </Badge>
            ))}
            {repository.topics.length > 4 && (
              <Badge
                variant="outline"
                className="text-xs text-slate-400 border-slate-600"
              >
                +{repository.topics.length - 4} more
              </Badge>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Calendar className="h-3 w-3" />
          <span>Updated {formatDate(repository.updated_at)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
