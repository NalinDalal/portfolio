/*import fs from "fs/promises";
import path from "path";
import { ProjectTabs } from "@/components/ProjectTabs";
import { GitHubRepository } from "@/types/github";

export default async function Page() {
  const projectsFile = path.join(process.cwd(), "data", "projects.json");

  const projectsJson = await fs.readFile(projectsFile, "utf8");

  const projects = JSON.parse(projectsJson) as Array<{
    slug?: string;
    projectName?: string;
    caseStudy?: string;
    liveLink?: string;
    githubLink?: string;
    summary?: string;
    tags?: string[];
  }>;

  // Map manual projects into the minimal shape ProjectTabs / EnhancedProjectCard expect.
  const mapped = projects.map((p, idx) => {
    const slug =
      p.slug ??
      p.projectName?.toLowerCase().replace(/\s+/g, "-") ??
      `manual-${idx}`;
    return {
      id: p.slug ?? `manual-${idx}`,
      name: p.projectName ?? slug,
      description: p.summary ?? "",
      html_url: p.githubLink ?? null,
      liveLink: p.liveLink ?? null,
      caseStudy: p.caseStudy ?? `/projects/${slug}`,
      topics: p.tags ?? [],
      stargazers_count: 0,
      forks_count: 0,
      updated_at: new Date().toISOString(),
      language: (p.tags && p.tags[0]) || undefined,
    } as unknown as GitHubRepository;
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <ProjectTabs repositories={mapped} />
    </main>
  );
}*/

import { ProjectTabs } from "@/components/ProjectTabs";
import { getProjects, projectToRepository } from "@/lib/projects";
import { GitHubRepository } from "@/types/github";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const repositories = projects.map(projectToRepository) as unknown as GitHubRepository[];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          A collection of my work spanning full-stack apps, tools, and challenges
        </p>
      </div>

      <ProjectTabs repositories={repositories} />
    </main>
  );
}
