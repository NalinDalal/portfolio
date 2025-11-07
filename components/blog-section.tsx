import { getAllBlogPosts } from "@/utils/get-blog-posts";
import BookIcon from "./ui/book-icon";
import type { BlogPost } from "@/utils/get-blog-posts";
import Link from "next/link";

const blogPosts = getAllBlogPosts();

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}/${post.file}`}
      className="group border-2 border-slate-800 hover:border-white rounded-md py-3 w-full hover:bg-slate-900 transition-all duration-200 flex flex-col px-3"
    >
      <div className="flex flex-row items-center gap-2">
        <BookIcon className="text-slate-400 group-hover:text-white transition-colors" />
        <span className="font-bold text-white group-hover:text-slate-300">
          {post.title}
        </span>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  return (
    <section className="flex flex-col gap-y-2 text-white w-full">
      <div className="mb-2">
        <h2 className="font-bold text-2xl md:text-4xl tracking-tight text-white">
          Blogs
        </h2>
        <p className="text-slate-400 mt-1">
          My thoughts, ideas, and insights about development, design, and more
        </p>
      </div>

      {blogPosts.length > 0 ? (
        <div className="flex flex-col w-full mt-2 gap-y-2">
          {blogPosts.map((post) => (
            <BlogCard key={`${post.slug}-${post.file}`} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-slate-400 border-2 border-dashed border-slate-800 rounded-md p-6 text-center">
          I haven&apos;t written any blogs yet but I do plan to write some
          soon...
        </div>
      )}
    </section>
  );
}
