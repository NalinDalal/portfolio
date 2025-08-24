import { BlogNavigation } from "@/components/blog-navigation";
import BlogSection from "@/components/blog-section";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-10">
        {/* Navigation */}
        <BlogNavigation />

        {/* Blog Section */}
        <BlogSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Nalin Dalal. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
