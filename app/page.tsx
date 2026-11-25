import Link from "next/link";
import BlogSection from "@/components/BlogSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Introduction from "@/components/Introduction";
import ProofOfWork from "@/components/ProofOfWork";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12">
      <Introduction />
      <About />
      <FeaturedProjects />
      <ProofOfWork />
      <BlogSection />
      <Footer />
    </div>
  );
}
