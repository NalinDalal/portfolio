import { BlogNavigation } from "@/components/blog-navigation";
import BlogSection from "@/components/blog-section";
import { Metadata } from "next";

const title = "Blog Posts";
const description =
  "Explore my thoughts, opinions, and insights on software development, lifestyle and early life crisis.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://nerdev.in/blogs",
    images: [{ url: "https://nerdev.in/og-image.png" }],
  },
  twitter: {
    title,
    description,
    images: [{ url: "https://nerdev.in/og-image.png" }],
  },
};

export default function Blogs() {
  return (
    <>
      <BlogNavigation />
      <BlogSection />
    </>
  );
}
