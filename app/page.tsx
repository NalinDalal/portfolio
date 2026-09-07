import Link from "next/link";
import BlogSection from "@/components/blog-section";
import FeaturedProjects from "@/components/FeaturedProjects";
import GetInTouch from "@/components/get-in-touch";
import Introduction from "@/components/introduction";
import ProofOfWork from "@/components/proof-of-work";
import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import { ArrowRight } from "lucide-react";
import { SmoothReveal } from "@/components/SmoothReveal";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-12 justify-center items-start mx-auto">
      <Introduction />
      <SmoothReveal delay={100}>
        <ProofOfWork />
      </SmoothReveal>
      <SmoothReveal delay={200}>
        <WorkExperience />
      </SmoothReveal>
      <SmoothReveal delay={300}>
        <FeaturedProjects />
      </SmoothReveal>
      <SmoothReveal delay={400}>
        <BlogSection />
      </SmoothReveal>
      <SmoothReveal delay={500}>
        <Skills />
      </SmoothReveal>

      {/* Projects CTA */}
      <SmoothReveal delay={600}>
        <Link href="/projects" className="group w-full">
          <div className="flex items-center justify-between p-6 rounded-xl border border-border bg-surface hover:border-accent/50 transition-all duration-300">
            <div>
              <h2 className="font-display font-bold text-xl text-text-primary group-hover:text-accent transition-colors">
                All Projects & Case Studies
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Full-stack apps, distributed systems, and open source work
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-border group-hover:text-accent transition-colors" />
          </div>
        </Link>
      </SmoothReveal>

      <hr className="border-border border w-full" />
      <SmoothReveal delay={700}>
        <GetInTouch />
      </SmoothReveal>
    </main>
  );
}
