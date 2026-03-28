import { experiences } from "@/data";
import { Download, Mail, Github, Linkedin, Twitter, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resume - Nalin Dalal",
  description: "Software engineer, open-source contributor, and builder of things that matter.",
};

const skills = {
  "Languages": ["TypeScript", "JavaScript", "Python", "Go"],
  "Frontend": ["React", "Next.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Express", "PostgreSQL"],
  "Tools": ["Git", "Docker", "AWS", "Vercel"],
};

export default function ResumePage() {
  return (
    <main className="max-w-3xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Resume</h1>
        <a
          href="/Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      <div className="space-y-8">
        {/* Header */}
        <section className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Nalin Dalal</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Software engineer &amp; open-source contributor building systems that matter.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-500">
            <a href="mailto:nalindalal2004@gmail.com" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              nalindalal2004@gmail.com
            </a>
            <a href="https://github.com/nalindalal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/nalin-dalal-815617271" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">{exp.position}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-zinc-500">
                    <Calendar className="w-3 h-3" />
                    {exp.startDate} — {exp.endDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Skills</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h4 className="font-medium text-zinc-700 dark:text-zinc-300 mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Projects</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-white">Blind App</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">
                Anonymous community platform for college students. Built with Next.js, featuring real-time updates and authentication.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs">Next.js</span>
                <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs">Full-stack</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-white">Modheshwari</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">
                Monorepo architecture for community management and event-driven workflows using Bun.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-xs">Monorepo</span>
                <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded text-xs">Bun</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Education</h3>
          <div>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white">B.Tech in Computer Science</h4>
                <p className="text-zinc-600 dark:text-zinc-400">OIST (Odisha Institute of Science and Technology)</p>
              </div>
              <span className="text-sm text-zinc-500">2024 — Present</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
