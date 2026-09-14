import { getAllBlogPosts } from "@/utils/get-blog-posts";
import type { BlogPost } from "@/utils/get-blog-posts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

const blogPosts = getAllBlogPosts();

function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blogs/${post.slug}/${post.file}`} className="group block">
            <div className="border-border/50 hover:border-border border-b py-4 transition-all duration-200">
                <div className="flex items-center justify-between gap-4">
                    <h3 className="text-text-primary group-hover:text-accent text-sm font-medium transition-colors hover:scale-102 hover:underline">
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
            <Breadcrumb section="NOTES" subsection="ARTICLES" />

            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-text-primary font-display text-[var(--text-display)] font-bold tracking-[-0.025em]">
                    Writing
                </h2>
                <Link
                    href="/blogs"
                    className="text-text-secondary hover:text-accent flex items-center gap-1 text-sm transition-colors"
                >
                    View all <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {blogPosts.length > 0 ? (
                <div className="space-y-0">
                    {blogPosts.slice(0, 4).map((post) => (
                        <BlogCard
                            key={`${post.slug}-${post.file}`}
                            post={post}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-text-secondary text-sm">No posts yet.</div>
            )}
        </section>
    );
}
