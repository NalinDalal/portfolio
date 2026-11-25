import { getAllBlogPosts } from "@/utils/get-blog-posts";
import type { BlogPost } from "@/utils/get-blog-posts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const blogPosts = getAllBlogPosts();

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}/${post.file}`} className="group block">
      <div className="border-border/60 hover:border-border border-b py-4 transition-colors duration-150">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-text-primary group-hover:text-accent text-sm font-medium transition-colors duration-150">
            {post.title}
          </h3>
          <span className="text-text-secondary shrink-0 font-mono text-xs">
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
      <SectionHeader
        path="notes / articles"
        title="Writing"
        href="/blogs"
        action="View all"
      />

      {blogPosts.length > 0 ? (
        <div>
          {blogPosts.slice(0, 4).map((post) => (
            <BlogCard key={`${post.slug}-${post.file}`} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-text-secondary text-sm">No posts yet.</div>
      )}
    </section>
  );
}
