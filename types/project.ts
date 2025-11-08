// types/project.ts

/**
 * Project interface matching projects.json structure
 */
export interface Project {
  /** Unique identifier and URL slug */
  slug: string;

  /** Display name of the project */
  projectName: string;

  /** Full description of the project */
  description: string;

  /** Short summary for cards */
  summary: string;

  /** URL to live deployment (optional) */
  liveLink?: string;

  /** GitHub repository URL */
  githubLink: string;

  /** Path to case study page (optional) */
  caseStudy?: string;

  /** Technology tags/topics */
  tags: string[];

  /** Whether to feature this project */
  featured?: boolean;

  /** Project preview image path (optional) */
  image?: string;

  /** ISO date string of creation */
  createdAt?: string;

  /** ISO date string of last update */
  updatedAt?: string;
}

/**
 * Example projects.json structure:
 *
 * [
 *   {
 *     "slug": "blind-app",
 *     "projectName": "Blind App",
 *     "description": "Anonymous community platform for college students",
 *     "summary": "Share thoughts anonymously in your college community",
 *     "liveLink": "https://blind-app.vercel.app",
 *     "githubLink": "https://github.com/NalinDalal/blind-app",
 *     "caseStudy": "/projects/blind-app",
 *     "tags": ["nextjs", "prisma", "postgresql", "typescript", "fullstack"],
 *     "featured": true,
 *     "createdAt": "2024-01-15",
 *     "updatedAt": "2024-11-01"
 *   }
 * ]
 */
