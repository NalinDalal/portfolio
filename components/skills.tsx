"use client";

import { useState } from "react";

const skillCategories = {
  "Languages": ["C++", "TypeScript", "JavaScript", "Rust", "Solidity", "SQL"],
  "Frameworks": ["React", "Next.js", "Node.js", "Tailwind CSS", "Prisma"],
  "DevOps": ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions"],
  "Tools": ["Git", "Jest", "Bash/Zsh", "LazyGit", "Neovim"],
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Languages");

  return (
    <section className="py-6">
      <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-zinc-900 dark:text-white">
        Skills
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Technologies I work with
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {skillCategories[activeCategory as keyof typeof skillCategories].map((skill) => (
          <span
            key={skill}
            className="px-3 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
