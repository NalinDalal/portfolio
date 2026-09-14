import Link from "next/link";
import { ArrowRight } from "lucide-react";
import projectsData from "@/data/projects.json";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const featuredProjects = projectsData.filter((p) => p.featured);

export default function FeaturedProjects() {
    return (
        <section id="work" className="py-12">
            <Breadcrumb section="WORK" subsection="PROJECTS" />

            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-text-primary font-display text-[var(--text-display)] font-bold tracking-[-0.025em]">
                    Selected Work
                </h2>
                <Link
                    href="/projects"
                    className="text-text-secondary hover:text-accent flex items-center gap-1 text-sm transition-colors"
                >
                    View all <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="space-y-0">
                {featuredProjects.map((project, index) => (
                    <Link
                        key={project.slug}
                        href={project.caseStudy || `/projects/${project.slug}`}
                        className="group block"
                    >
                        <div className="border-border/50 hover:border-border border-b py-5 transition-all duration-200 hover:scale-[1.1]">
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0 flex-1">
                                    <div className="mb-1 flex items-center gap-3">
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
