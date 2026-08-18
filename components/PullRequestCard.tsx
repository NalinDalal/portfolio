"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitPullRequest, GitMerge, ExternalLink, Calendar } from "lucide-react";

type PullRequestCardProps = {
  pullRequest: any;
};

export function PullRequestCard({ pullRequest }: PullRequestCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const isMerged = pullRequest.mergedAt !== null;

  const getStatusColor = () => {
    if (isMerged) return "text-accent border-accent/30";
    if (pullRequest.state === "open") return "text-teal border-teal/30";
    return "text-text-secondary border-border";
  };

  const getStatusIcon = () => {
    if (isMerged) return <GitMerge className="h-4 w-4" />;
    return <GitPullRequest className="h-4 w-4" />;
  };

  const getStatusText = () => {
    if (isMerged) return "Merged";
    if (pullRequest.state === "open") return "Open";
    return "Closed";
  };

  return (
    <Card className="group hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={getStatusColor()}>
                <div className="flex items-center gap-1">
                  {getStatusIcon()}
                  <span>{getStatusText()}</span>
                </div>
              </Badge>
              <span className="text-sm text-text-secondary">
                #{pullRequest.number}
              </span>
            </div>

            <CardTitle className="text-lg group-hover:text-accent transition-colors">
              <a
                href={pullRequest.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:underline"
              >
                <span className="flex-1">{pullRequest.title}</span>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0 text-text-primary" />
              </a>
            </CardTitle>

            <CardDescription className="mt-2">
              <span className="font-medium text-text-primary">
                {pullRequest.base?.repo?.fullName || "Unknown repository"}
              </span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Calendar className="h-4 w-4" />
            <span>
              {isMerged
                ? `Merged ${formatDate(pullRequest.mergedAt!)}`
                : `Opened ${formatDate(pullRequest.createdAt)}`}
            </span>
          </div>
        </div>

        {pullRequest.body && (
          <p className="text-sm text-text-secondary line-clamp-2 mb-4">
            {pullRequest.body.slice(0, 150)}
            {pullRequest.body.length > 150 && "..."}
          </p>
        )}

        {pullRequest.labels && pullRequest.labels.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {pullRequest.labels.slice(0, 3).map((label: any) => (
              <Badge
                key={label.name}
                variant="secondary"
                className="text-xs"
                style={{
                  backgroundColor: `#${label.color}20`,
                  borderColor: `#${label.color}`,
                }}
              >
                {label.name}
              </Badge>
            ))}
            {pullRequest.labels.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{pullRequest.labels.length - 3} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
