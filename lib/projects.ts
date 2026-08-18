// lib/projects.ts
import fs from "fs/promises";
import path from "path";
import { Project } from "@/types/project";
import { GitHubRepository } from "@/types/github";

/**
 * Get all projects from projects.json
 */
export async function getProjects(): Promise<Project[]> {
  const projectsFile = path.join(process.cwd(), "data", "projects.json");

  try {
    const raw = await fs.readFile(projectsFile, "utf8");
    const projects = JSON.parse(raw) as Project[];

    // Validate that it's an array
    if (!Array.isArray(projects)) {
      console.error("projects.json is not an array");
      return [];
    }

    return projects;
  } catch (error) {
    console.error("Error reading projects.json:", error);
    return [];
  }
}

/**
 * Get a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}

/**
 * Get featured projects only
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((p) => p.featured === true);
}

/**
 * Get projects by tag
 */
export async function getProjectsByTag(tag: string): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((p) =>
    p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

/**
 * Convert Project to GitHubRepository format for display components
 */
export function projectToRepository(project: Project) {
  return {
    id: project.slug,
    name: project.projectName,
    description: project.description,
    htmlUrl: project.githubLink,
    homepage: project.liveLink || null,
    stargazersCount: 0,
    forksCount: 0,
    language: project.tags[0] || undefined,
    topics: project.tags || [],
    updatedAt: project.updatedAt || new Date().toISOString(),
    createdAt: project.createdAt || new Date().toISOString(),
    liveLink: project.liveLink,
    caseStudy: project.caseStudy,
    githubLink: project.githubLink,
  };
}

/**
 * Check if a case study MDX file exists for a project
 */
export async function hasCaseStudy(slug: string): Promise<boolean> {
  const mdxPath = path.join(process.cwd(), "case-study", `${slug}.mdx`);

  try {
    await fs.access(mdxPath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get all unique tags from projects
 */
export async function getAllTags(): Promise<string[]> {
  const projects = await getProjects();
  const tagsSet = new Set<string>();

  projects.forEach((project) => {
    project.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

/**
 * Get project count by category/tag
 */
export async function getProjectStats(): Promise<{
  total: number;
  featured: number;
  byTag: Record<string, number>;
}> {
  const projects = await getProjects();
  const byTag: Record<string, number> = {};

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      byTag[tag] = (byTag[tag] || 0) + 1;
    });
  });

  return {
    total: projects.length,
    featured: projects.filter((p) => p.featured).length,
    byTag,
  };
}
