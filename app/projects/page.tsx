import { Metadata } from "next";
import { ProjectTabs } from "@/components/ProjectTabs";
import { getProjects, projectToRepository } from "@/lib/projects";
import { GitHubRepository } from "@/types/github";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my work spanning full-stack apps, tools, and challenges. View my GitHub repositories and case studies.",
  openGraph: {
    title: "Projects - Nalin Dalal",
    description: "A collection of my work spanning full-stack apps, tools, and challenges.",
    url: "https://nalin.nerdev.in/projects",
    images: [{ url: "https://nalin.nerdev.in/og-image.png" }],
  },
  twitter: {
    title: "Projects - Nalin Dalal",
    description: "A collection of my work spanning full-stack apps, tools, and challenges.",
    images: [{ url: "https://nalin.nerdev.in/og-image.png" }],
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  const repositories = projects.map(projectToRepository) as unknown as GitHubRepository[];

  return (
    <>
      <div className="mb-8">
        <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3 text-text-primary">Projects</h1>
        <p className="text-text-secondary text-lg">
          A collection of my work spanning full-stack apps, tools, and challenges
        </p>
      </div>

      <ProjectTabs repositories={repositories} />
    </>
  );
}
