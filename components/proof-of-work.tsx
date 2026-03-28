import { IconNameType, links } from "@/data";
import React from "react";
import PullRequestIcon from "./ui/icons/pull-request-icon";
import GithubLogoIcon from "./ui/icons/gh-logo";
import { Github, ExternalLink } from "lucide-react";

function ProofOfWork() {
  const prLinks = links.filter((el) => !el?.hidden && el?.icon === "pull-request");
  const socialLinks = links.filter((el) => !el?.hidden && el?.icon !== "pull-request");

  return (
    <section className="py-6">
      <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-zinc-900 dark:text-white">
        Proof of Work
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Contributions and open source work
      </p>

      <div className="grid gap-3">
        {prLinks.slice(0, 5).map((el, index) => (
          <a
            key={index}
            href={el?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md">
                <PullRequestIcon className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
              </div>
              <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium truncate max-w-[200px] md:max-w-[400px]">
                {el?.name}
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
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
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
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
