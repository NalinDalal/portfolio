import Link from "next/link";
import BlogSection from "@/components/blog-section";
import FeaturedProjects from "@/components/FeaturedProjects";
import Introduction from "@/components/introduction";
import ProofOfWork from "@/components/proof-of-work";
import About from "@/components/about";
import Footer from "@/components/footer";
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
