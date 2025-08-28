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
      .filter((folder) => folder.endsWith("-pr")); // only take *-pr folders

    const posts: BlogPost[] = [];

    for (const folder of folders) {
      const folderPath = path.join(blogsDir, folder);
      const files = fs
        .readdirSync(folderPath)
        .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

      if (files.length === 0) {
        console.warn(`No .md/.mdx files found in ${folderPath}`);
        continue;
      }
      const mainFile = files[0];
      if (!mainFile) {
        console.warn(`No main file found for ${folderPath}`);
        continue;
      }
      const filePath = path.join(folderPath, mainFile);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContent);
      const parsed = blogSchema.safeParse(data);

      if (!parsed.success) {
        console.error(`Invalid frontmatter in ${filePath}`);
        continue;
      }

      const fileName = path.parse(mainFile).name;
      if (!fileName) {
        console.warn(
          `File name could not be parsed for ${mainFile} in ${folderPath}`,
        );
        continue;
      }
      console.log(
        `Blog: ${folder}, Main file: ${mainFile}, Slug: ${folder.replace(/-pr$/, "")}`,
      );
      posts.push({
        ...parsed.data,
        slug: folder.replace(/-pr$/, ""), // remove `-pr` from slug
        file: fileName, // main file name without extension
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
