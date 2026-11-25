import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  path: string;
  title: string;
  href?: string;
  action?: string;
}

export function SectionHeader({
  path,
  title,
  href,
  action,
}: SectionHeaderProps) {
  return (
    <div className="border-border mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b pb-3">
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="text-text-secondary font-mono text-[var(--text-caption)] uppercase tracking-[0.08em]">
          {path}
        </span>
        <h2 className="text-text-primary font-display text-[var(--text-heading)] font-semibold tracking-[-0.02em]">
          {title}
        </h2>
      </div>

      {href && action && (
        <Link
          href={href}
          className="text-text-secondary hover:text-accent inline-flex items-center gap-1 text-sm transition-colors duration-150"
        >
          {action}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
