import Link from "next/link";
import BlogSection from "@/components/blog-section";
import GetInTouch from "@/components/get-in-touch";
import Introduction from "@/components/introduction";
import ProofOfWork from "@/components/proof-of-work";
import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-12 justify-center items-start mx-auto">
      <Introduction />
      <Reveal>
        <ProofOfWork />
      </Reveal>
      <Reveal delay={60}>
        <WorkExperience />
      </Reveal>
      <Reveal delay={120}>
        <BlogSection />
      </Reveal>
      <Reveal delay={180}>
        <Skills />
      </Reveal>

      {/* Projects CTA */}
      <Reveal delay={240}>
        <Link href="/projects" className="group w-full">
          <div className="flex items-center justify-between p-6 rounded-xl border border-border bg-surface hover:border-accent/50 transition-all duration-300">
            <div>
              <h2 className="font-display font-bold text-xl text-text-primary group-hover:text-accent transition-colors">
                Projects & Case Studies
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Full-stack apps, distributed systems, and open source work
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-border group-hover:text-accent transition-colors" />
          </div>
        </Link>
      </Reveal>

      <hr className="border-border border w-full" />
      <Reveal delay={300}>
        <GetInTouch />
      </Reveal>
    </main>
  );
}
