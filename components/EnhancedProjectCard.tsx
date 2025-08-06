'use client';

import { GitHubRepository } from '@/types/github';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LanguageBadge } from '@/components/LanguageBadge';
import { Star, GitFork, ExternalLink, Calendar } from 'lucide-react';

interface EnhancedProjectCardProps {
  repository: GitHubRepository;
  colorIndex: number;
}

export function EnhancedProjectCard({ repository, colorIndex }: EnhancedProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Color schemes inspired by sarg.am
  const colorSchemes = [
    {
      bg: 'bg-gradient-to-br from-green-500/10 to-green-600/5',
      border: 'border-green-500/30',
      accent: 'text-green-400',
      hover: 'hover:border-green-400/50 hover:shadow-green-500/10'
    },
    {
      bg: 'bg-gradient-to-br from-blue-500/10 to-blue-600/5',
      border: 'border-blue-500/30',
      accent: 'text-blue-400',
      hover: 'hover:border-blue-400/50 hover:shadow-blue-500/10'
    },
    {
      bg: 'bg-gradient-to-br from-purple-500/10 to-purple-600/5',
      border: 'border-purple-500/30',
      accent: 'text-purple-400',
      hover: 'hover:border-purple-400/50 hover:shadow-purple-500/10'
    },
    {
      bg: 'bg-gradient-to-br from-orange-500/10 to-orange-600/5',
      border: 'border-orange-500/30',
      accent: 'text-orange-400',
      hover: 'hover:border-orange-400/50 hover:shadow-orange-500/10'
    },
    {
      bg: 'bg-gradient-to-br from-pink-500/10 to-pink-600/5',
      border: 'border-pink-500/30',
      accent: 'text-pink-400',
      hover: 'hover:border-pink-400/50 hover:shadow-pink-500/10'
    },
    {
      bg: 'bg-gradient-to-br from-cyan-500/10 to-cyan-600/5',
      border: 'border-cyan-500/30',
      accent: 'text-cyan-400',
      hover: 'hover:border-cyan-400/50 hover:shadow-cyan-500/10'
    },
    {
      bg: 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/5',
      border: 'border-yellow-500/30',
      accent: 'text-yellow-400',
      hover: 'hover:border-yellow-400/50 hover:shadow-yellow-500/10'
    },
    {
      bg: 'bg-gradient-to-br from-red-500/10 to-red-600/5',
      border: 'border-red-500/30',
      accent: 'text-red-400',
      hover: 'hover:border-red-400/50 hover:shadow-red-500/10'
    }
  ];

  const colorScheme = colorSchemes[colorIndex % colorSchemes.length];

  return (
    <Card className={`group transition-all duration-300 hover:shadow-lg hover:scale-[1.05]
 ${colorScheme.bg} ${colorScheme.border} ${colorScheme.hover} border-2`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className={`text-lg text-white group-hover:${colorScheme.accent} transition-colors`}>
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
            
            <CardDescription className="mt-2 text-gray-300">
              {repository.description || 'No description available'}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
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
                className="text-xs bg-gray-700/50 text-gray-300 border-gray-600"
              >
                {topic}
              </Badge>
            ))}
            {repository.topics.length > 4 && (
              <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                +{repository.topics.length - 4} more
              </Badge>
            )}
          </div>
        )}

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Calendar className="h-3 w-3" />
          <span>Updated {formatDate(repository.updated_at)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
