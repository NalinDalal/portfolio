import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import projectsData from "@/data/projects.json";

const featuredProjects = projectsData.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="section-label">Work</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-text-primary">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href={project.caseStudy || `/projects/${project.slug}`}
            className="group block"
          >
            <div className="h-full p-5 rounded-xl border border-border bg-surface hover:border-accent/30 transition-all duration-150 flex flex-col">
              <div className="flex-1">
                <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent transition-colors mb-2">
                  {project.projectName}
                </h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-border">
                {project.liveLink && (
                  <span className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    Live
                  </span>
                )}
                {project.githubLink && (
                  <span className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors">
                    <Github className="w-3 h-3" />
                    Source
                  </span>
                )}
                <ArrowRight className="w-4 h-4 text-border group-hover:text-accent transition-colors ml-auto" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
