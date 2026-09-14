import { links } from "@/data";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ExternalLink } from "lucide-react";

function ProofOfWork() {
  const prLinks = links.filter((el) => !el?.hidden && el?.icon === "pull-request");

  return (
    <section id="contributions" className="py-12">
      <Breadcrumb section="OSS" subsection="CONTRIBUTIONS" />
      
      <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-2 text-text-primary">
        Open Source
      </h2>
      <p className="text-text-secondary mb-8">
        {prLinks.length} contributions across repositories
      </p>

      <div className="space-y-0">
        {prLinks.slice(0, 6).map((el, index) => {
          const repo = el?.name.split(": ")[0];
          const title = el?.name.split(": ")[1];
          return (
            <a
              key={index}
              href={el?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="py-4 border-b border-border/50 hover:border-border transition-colors duration-150">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary mb-0.5">
                      {repo}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {title}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-border group-hover:text-accent transition-colors shrink-0 mt-0.5" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ProofOfWork;
