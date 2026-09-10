import { IconNameType, links } from "@/data";
import React from "react";
import PullRequestIcon from "./ui/icons/pull-request-icon";
import { Github, ExternalLink } from "lucide-react";

function ProofOfWork() {
  const prLinks = links.filter((el) => !el?.hidden && el?.icon === "pull-request");
  const socialLinks = links.filter((el) => !el?.hidden && el?.icon !== "pull-request");

  return (
    <section className="py-8">
      <p className="section-label">Open Source</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-2 text-text-primary">
        Proof of Work
      </h2>
      <p className="text-text-secondary mb-6">
        Contributions and open source work
      </p>

      <div className="grid gap-3">
        {prLinks.slice(0, 5).map((el, index) => (
          <a
            key={index}
            href={el?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border hover:border-accent/30 transition-all duration-150 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-surface-light rounded-lg border border-border">
                <PullRequestIcon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm text-text-primary font-medium truncate max-w-[200px] md:max-w-[400px]">
                {el?.name}
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-border group-hover:text-accent transition-colors" />
          </a>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        {socialLinks.map((el, index) => (
          <a
            key={index}
            href={el?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-bg-primary rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProofOfWork;
