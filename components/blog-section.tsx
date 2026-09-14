import { getAllBlogPosts } from "@/utils/get-blog-posts";
import type { BlogPost } from "@/utils/get-blog-posts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const blogPosts = getAllBlogPosts();

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link
      href={`/blogs/${post.slug}/${post.file}`}
      className="group block"
    >
      <div className="flex items-start justify-between gap-4 py-5 border-b border-border/50 hover:border-border transition-colors duration-150">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="font-mono text-xs text-text-secondary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-medium text-text-primary group-hover:text-accent transition-colors">
              {post.title}
            </h3>
          </div>
          <p className="text-sm text-text-secondary ml-8">
            {post.readingTime} min read
          </p>
        </div>
        <ArrowRight className="w-4 h-4 text-border group-hover:text-accent transition-all duration-150 group-hover:translate-x-0.5 shrink-0 mt-1" />
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
          Notes
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
          {blogPosts.slice(0, 3).map((post, index) => (
            <BlogCard key={`${post.slug}-${post.file}`} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-text-secondary border border-dashed border-border rounded-lg p-8 text-center">
          No posts yet. Check back soon.
        </div>
      )}
    </section>
  );
}
