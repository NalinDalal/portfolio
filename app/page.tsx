import Link from "next/link";
import BlogSection from "@/components/blog-section";
import GetInTouch from "@/components/get-in-touch";
import Introduction from "@/components/introduction";
import ProofOfWork from "@/components/proof-of-work";
import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10 justify-center items-start mx-auto">
      <Introduction />
      <ProofOfWork />
      <WorkExperience />
      <BlogSection />
      <Skills />

      {/* Projects CTA */}
      <Link href="/projects" className="group w-full">
        <div className="flex items-center justify-between p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all bg-zinc-50 dark:bg-zinc-900/50">
          <div>
            <h2 className="font-bold text-xl text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Projects & Case Studies
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Full-stack apps, distributed systems, and open source work
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors" />
        </div>
      </Link>

      <hr className="border-zinc-200 dark:border-zinc-800 border w-full" />
      <GetInTouch />
    </main>
  );
}
