import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  section: string;
  subsection?: string;
  className?: string;
}

export function Breadcrumb({ section, subsection, className }: BreadcrumbProps) {
  return (
    <div className={cn("font-mono text-xs text-text-secondary uppercase tracking-wider mb-4", className)}>
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
