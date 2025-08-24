import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: string[];
}

export const blogSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  description: z.string().optional(),
});

/**
 * Get all blog posts from blogs/*-pr/ directories
 */
export function getAllBlogPosts(): BlogPost[] {
  try {
    const blogsDir = path.join(process.cwd(), "blogs");
    const folders = fs
      .readdirSync(blogsDir)
      .filter((folder) => folder.endsWith("-pr")); // only take *-pr folders

    const posts: BlogPost[] = [];

    for (const folder of folders) {
      const folderPath = path.join(blogsDir, folder);
      const files = fs
        .readdirSync(folderPath)
        .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

      // pick first .md/.mdx file as the entry point
      if (files.length === 0) continue;
      const filePath = path.join(folderPath, files[0]);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContent);
      const parsed = blogSchema.safeParse(data);

      if (!parsed.success) {
        console.error(`Invalid frontmatter in ${filePath}`);
        continue;
      }

      posts.push({
        ...parsed.data,
        slug: folder.replace(/-pr$/, ""), // remove `-pr` from slug
        description: parsed.data.description || "Read more about this topic...",
      });
    }

    // Sort by date, newest first
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return [];
  }
}
