import { links } from "@/data";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ExternalLink } from "lucide-react";

function ProofOfWork() {
  const prLinks = links.filter((el) => !el?.hidden && el?.icon === "pull-request");

  // Group PRs by year (approximate from URL or use current year)
  const currentYear = new Date().getFullYear();

  return (
    <section id="contributions" className="py-12">
      <Breadcrumb section="OSS" subsection="CONTRIBUTIONS" />
      
      <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-2 text-text-primary">
        Contributions
      </h2>
      <p className="text-text-secondary mb-8">
        {prLinks.length} merged PRs across repositories
      </p>

      <div className="space-y-1">
        {prLinks.slice(0, 8).map((el, index) => (
          <a
            key={index}
            href={el?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-border transition-colors duration-150"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-xs text-text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-text-primary font-medium truncate">
                  {el?.name.split(": ")[0]}
                </span>
              </div>
              <p className="text-sm text-text-secondary ml-8 truncate">
                {el?.name.split(": ")[1]}
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-border group-hover:text-accent transition-colors shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProofOfWork;
