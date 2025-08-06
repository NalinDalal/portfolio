'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  description?: string;
  icon?: LucideIcon;
  className?: string;
}

export function StatsCard({ title, value, description, icon: Icon, className = '' }: StatsCardProps) {
  return (
    <Card className={`bg-gray-800/50 border-gray-700 ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-white text-xl">
          {Icon && <Icon className="h-6 w-6 text-purple-400" />}
          <span>{title}</span>
        </CardTitle>
        {description && (
          <CardDescription className="text-gray-400">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-white">{value}</p>
      </CardContent>
    </Card>
  );
}

