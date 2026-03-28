import { getAllBlogPosts } from "@/utils/get-blog-posts";
import BookIcon from "./ui/book-icon";
import type { BlogPost } from "@/utils/get-blog-posts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = getAllBlogPosts();

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}/${post.file}`}
      className="group flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md">
          <BookIcon className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
        </div>
        <div>
          <h3 className="font-medium text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            {post.readingTime} min read
          </p>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
    </Link>
  );
}

export default function BlogSection() {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-zinc-900 dark:text-white">
            Blog
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Thoughts on development and tech
          </p>
        </div>
        <Link
          href="/blogs"
          className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          View all
        </Link>
      </div>

      {blogPosts.length > 0 ? (
        <div className="grid gap-3">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={`${post.slug}-${post.file}`} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-zinc-500 dark:text-zinc-500 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg p-6 text-center">
          No blog posts yet. Check back soon!
        </div>
      )}
    </section>
  );
}
