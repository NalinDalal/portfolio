import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  section: string;
  subsection?: string;
  className?: string;
}

export function Breadcrumb({ section, subsection, className }: BreadcrumbProps) {
  return (
    <div className={cn("font-mono text-[var(--text-caption)] text-text-secondary uppercase tracking-[0.05em] mb-4", className)}>
      <span>{section}</span>
      {subsection && (
        <>
          <span className="mx-2 text-border">/</span>
          <span>{subsection}</span>
        </>
      )}
    </div>
  );
}
