import BlogSection from "@/components/blog-section";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <main className="container mx-auto px-4 py-10 flex-1">
        {/* Blog Section */}
        <BlogSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400">
            © 2025 Nalin Dalal. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
