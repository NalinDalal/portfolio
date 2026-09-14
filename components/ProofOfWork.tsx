import { links } from "@/data";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ExternalLink } from "lucide-react";

function ProofOfWork() {
    const prLinks = links.filter(
        (el) => !el?.hidden && el?.icon === "pull-request",
    );

    return (
        <section id="contributions" className="py-12">
            <Breadcrumb section="OSS" subsection="CONTRIBUTIONS" />

            <h2 className="text-text-primary mb-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
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
                            className="group block hover:scale-105"
                        >
                            <div className="border-border/50 hover:border-border border-b py-4 transition-colors duration-150">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0 flex-1">
                                        <p className="text-text-primary mb-0.5 text-sm font-medium">
                                            {repo}
                                        </p>
                                        <p className="text-text-secondary text-sm">
                                            {title}
                                        </p>
                                    </div>
                                    <ExternalLink className="text-border group-hover:text-accent mt-0.5 h-4 w-4 shrink-0 transition-colors" />
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
