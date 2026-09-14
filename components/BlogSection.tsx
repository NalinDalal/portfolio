import { getAllBlogPosts } from "@/utils/get-blog-posts";
import type { BlogPost } from "@/utils/get-blog-posts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const blogPosts = getAllBlogPosts();

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}/${post.file}`}
      className="group block"
    >
      <div className="py-4 border-b border-border/50 hover:border-border transition-colors duration-150">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <span className="font-mono text-xs text-text-secondary shrink-0">
            {post.readingTime} min
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  return (
    <section id="notes" className="py-12">
      <Breadcrumb section="NOTES" subsection="ARTICLES" />
      
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-text-primary">
          Writing
        </h2>
        <Link
          href="/blogs"
          className="text-sm text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {blogPosts.length > 0 ? (
        <div className="space-y-0">
          {blogPosts.slice(0, 4).map((post) => (
            <BlogCard key={`${post.slug}-${post.file}`} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-text-secondary text-sm">
          No posts yet.
        </div>
      )}
    </section>
  );
}
