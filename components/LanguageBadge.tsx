'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils'; // optional if you’re using a classnames utility

interface LanguageBadgeProps {
  language: string;
  className?: string;
}

const languageColors: Record<string, string> = {
  TypeScript: 'text-blue-400',
  JavaScript: 'text-yellow-300',
  Python: 'text-green-300',
  Rust: 'text-orange-400',
  'C++': 'text-cyan-300',
  Go: 'text-sky-400',
  Java: 'text-red-400',
  Shell: 'text-gray-300',
  HTML: 'text-pink-400',
  CSS: 'text-indigo-300',
};

export function LanguageBadge({ language, className = '' }: LanguageBadgeProps) {
  const colorClass = languageColors[language] || 'text-gray-300';

  return (
    <Badge
      variant="outline"
      className={cn(
        'text-xs border-gray-600 bg-gray-800/50',
        colorClass,
        className
      )}
    >
      {language}
    </Badge>
  );
}

