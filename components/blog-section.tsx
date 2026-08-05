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
      className="group flex items-center justify-between p-4 bg-surface rounded-xl border border-border hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-surface-light rounded-lg border border-border">
          <BookIcon className="w-4 h-4 text-accent" />
        </div>
        <div>
          <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-text-secondary">
            {post.readingTime} min read
          </p>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-border group-hover:text-accent transition-colors" />
    </Link>
  );
}

export default function BlogSection() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-2 text-text-primary">
            Blog
          </h2>
          <p className="text-text-secondary">
            Thoughts on development and tech
          </p>
        </div>
        <Link
          href="/blogs"
          className="text-sm font-medium text-text-secondary hover:text-accent transition-colors accent-underline"
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
        <div className="text-text-secondary border-2 border-dashed border-border rounded-xl p-8 text-center">
          No blog posts yet. Check back soon!
        </div>
      )}
    </section>
  );
}
