"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  description?: string;
  icon?: LucideIcon;
  className?: string;
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  className = "",
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-text-primary text-xl">
          {Icon && <Icon className="h-6 w-6 text-accent" />}
          <span>{title}</span>
        </CardTitle>
        {description && (
          <CardDescription className="text-text-secondary">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-display font-bold gradient-text-accent">{value}</p>
      </CardContent>
    </Card>
  );
}
