import { GitHubPullRequest } from '@/types/github';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitPullRequest, GitMerge, ExternalLink, Calendar } from 'lucide-react';

interface PullRequestCardProps {
  pullRequest: GitHubPullRequest;
}

export function PullRequestCard({ pullRequest }: PullRequestCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isMerged = pullRequest.merged_at !== null;
  
  const getStatusColor = () => {
    if (isMerged) return 'text-purple-400 border-purple-400';
    if (pullRequest.state === 'open') return 'text-green-400 border-green-400';
    return 'text-gray-400 border-gray-400'; // For closed but not merged
  };

  const getStatusIcon = () => {
    if (isMerged) return <GitMerge className="h-4 w-4" />;
    return <GitPullRequest className="h-4 w-4" />;
  };

  const getStatusText = () => {
    if (isMerged) return 'Merged';
    if (pullRequest.state === 'open') return 'Open';
    return 'Closed';
  };

  return (
    <Card className="group hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 transition-transform transform hover:scale-[1.05]
">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={`${getStatusColor()} border`}>
                <div className="flex items-center gap-1">
                  {getStatusIcon()}
                  <span>{getStatusText()}</span>
                </div>
              </Badge>
              <span className="text-sm text-gray-500">#{pullRequest.number}</span>
            </div>
            
            <CardTitle className="text-lg group-hover:text-purple-400 transition-colors">
              <a 
                href={pullRequest.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:underline"
              >
                <span className="flex-1">{pullRequest.title}</span>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0" />
              </a>
            </CardTitle>
            
            <CardDescription className="mt-2">
              <span className="font-medium text-gray-300">
                {pullRequest.base?.repo?.full_name || 'Unknown repository'}
              </span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>
              {isMerged 
                ? `Merged ${formatDate(pullRequest.merged_at!)}` 
                : `Opened ${formatDate(pullRequest.created_at)}`
              }
            </span>
          </div>
        </div>
        
        {pullRequest.body && (
          <p className="text-sm text-gray-400 line-clamp-2 mb-4">
            {pullRequest.body.slice(0, 150)}
            {pullRequest.body.length > 150 && '...'}
          </p>
        )}
        
        {pullRequest.labels && pullRequest.labels.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {pullRequest.labels.slice(0, 3).map((label) => (
              <Badge 
                key={label.name} 
                variant="secondary" 
                className="text-xs"
                style={{ backgroundColor: `#${label.color}20`, borderColor: `#${label.color}` }}
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

