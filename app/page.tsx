import Link from "next/link";
import BlogSection from "@/components/BlogSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Introduction from "@/components/Introduction";
import ProofOfWork from "@/components/ProofOfWork";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { SmoothReveal } from "@/components/SmoothReveal";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12">
      <SmoothReveal>
        <Introduction />
      </SmoothReveal>

      <SmoothReveal>
        <About />
      </SmoothReveal>
      
      <SmoothReveal>
        <FeaturedProjects />
      </SmoothReveal>
      
      <SmoothReveal>
        <ProofOfWork />
      </SmoothReveal>
      
      <SmoothReveal>
        <BlogSection />
      </SmoothReveal>

      <Footer />
    </div>
  );
}
