import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import { links } from "@/data";
import { getAllBlogPosts } from "@/utils/get-blog-posts";
import Terminal from "@/components/Terminal";

const featuredCount = projectsData.filter((project) => project.featured).length;
const ossCount = links.filter(
  (link) => !link.hidden && link.icon === "pull-request",
).length;
const writingCount = getAllBlogPosts().length;

export default function Introduction() {
  return (
    <section className="pt-12 pb-8">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h1 className="text-text-primary font-display text-[var(--text-hero)] leading-[1.05] font-bold tracking-[-0.03em]">
            Nalin Dalal
          </h1>
          <p className="text-text-secondary mt-3 text-[var(--text-lead)] font-medium">
            Software Engineer
          </p>
          <p className="text-text-secondary mt-6 max-w-xl text-[var(--text-body)] leading-[1.6]">
            Building software.
            <br />
            Contributing to software.
            <br />
            Writing about what I learn.
          </p>
        </div>

        <a
          href="https://github.com/nalindalal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="mt-1 shrink-0"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/116961144?v=4"
            alt="Nalin Dalal"
            height={96}
            width={96}
            className="border-border rounded-none border object-cover"
          />
        </a>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          href="/#work"
          className="bg-accent text-bg-primary inline-flex items-center gap-2 px-5 py-2.5 font-display text-sm font-semibold transition-colors duration-150 hover:opacity-90 active:opacity-80"
        >
          View Work
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/resume"
          className="text-text-secondary hover:text-accent text-sm transition-colors duration-150"
        >
          Resume
        </Link>
        <a
          href="https://github.com/nalindalal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent text-sm transition-colors duration-150"
        >
          GitHub
        </a>
      </div>

      <Terminal
        counts={{ work: featuredCount, writing: writingCount, oss: ossCount }}
      />
    </section>
  );
}
