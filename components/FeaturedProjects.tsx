import Link from "next/link";
import { ArrowRight } from "lucide-react";
import projectsData from "@/data/projects.json";
import { SectionHeader } from "@/components/SectionHeader";

const featuredProjects = projectsData.filter((project) => project.featured);

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-12">
      <SectionHeader
        path="work / projects"
        title="Selected Work"
        href="/projects"
        action="View all"
      />

      <div>
        {featuredProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={project.caseStudy || `/projects/${project.slug}`}
            className="group block"
          >
            <div className="border-border/60 hover:border-border border-b py-5 transition-colors duration-150">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <span className="text-text-secondary font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-text-primary group-hover:text-accent font-display text-[var(--text-lead)] font-semibold tracking-[-0.01em] transition-colors duration-150">
                      {project.projectName}
                    </h3>
                    <span className="text-text-secondary font-mono text-xs">
                      {project.tags[0]}
                    </span>
                  </div>
                  <p className="text-text-secondary ml-8 text-sm">
                    {project.description}
                  </p>
                </div>

                <ArrowRight className="text-border group-hover:text-accent mt-1 h-4 w-4 shrink-0 transition-all duration-150 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
