import { links } from "@/data";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const prLinks = links.filter(
  (link) => !link.hidden && link.icon === "pull-request",
);

export default function ProofOfWork() {
  return (
    <section id="contributions" className="py-12">
      <SectionHeader
        path="oss / contributions"
        title="Open Source"
        href="https://github.com/nalindalal"
        action="GitHub"
      />

      <p className="text-text-secondary mb-6 font-mono text-xs">
        {prLinks.length} merged pull requests
      </p>

      <div>
        {prLinks.slice(0, 6).map((link, index) => {
          const [repo, title] = link.name.split(": ");

          return (
            <a
              key={`${link.href}-${index}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="border-border/60 hover:border-border border-b py-4 transition-colors duration-150">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-text-primary mb-0.5 text-sm font-medium">
                      {repo}
                    </p>
                    <p className="text-text-secondary text-sm">{title}</p>
                  </div>
                  <ExternalLink className="text-border group-hover:text-accent mt-0.5 h-4 w-4 shrink-0 transition-colors duration-150" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
