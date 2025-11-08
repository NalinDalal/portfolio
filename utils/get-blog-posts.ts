import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

export interface BlogPost {
  slug: string;
  file: string; // main file name without extension
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
      .filter((folder) =>
        fs.statSync(path.join(blogsDir, folder)).isDirectory(),
      );

    const posts: BlogPost[] = [];

    for (const folder of folders) {
      const folderPath = path.join(blogsDir, folder);
      const files = fs
        .readdirSync(folderPath)
        .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

      if (files.length === 0) continue;
      const mainFile = files[0];
      const filePath = path.join(folderPath, mainFile);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContent);
      const parsed = blogSchema.safeParse(data);
      if (!parsed.success) continue;

      const fileName = path.parse(mainFile).name;

      posts.push({
        ...parsed.data,
        slug: folder,
        file: fileName,
        description: parsed.data.description || "Read more about this topic...",
      });
    }

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error("Error getting blog posts:", error);
    return [];
  }
}
