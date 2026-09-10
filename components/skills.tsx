"use client";

import { useState } from "react";

const skillCategories = {
  "Languages": ["C++", "TypeScript", "JavaScript", "Rust", "Solidity", "SQL"],
  "Frameworks": ["React", "Next.js", "Node.js", "Tailwind CSS", "Prisma"],
  "DevOps": ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions"],
  "Tools": ["Git", "Jest", "Bash/Zsh", "LazyGit", "Neovim"],
};

const categoryIcons: Record<string, string> = {
  Languages: "</>",
  Frameworks: "[]",
  DevOps: "::",
  Tools: "$",
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Languages");

  return (
    <section className="py-8">
      <p className="section-label">Toolkit</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-2 text-text-primary">
        Skills
      </h2>
      <p className="text-text-secondary mb-8">
        Technologies I work with
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-accent text-bg-primary"
                : "bg-surface text-text-secondary border border-border hover:border-accent/30 hover:text-text-primary"
            }`}
          >
            <span className="mr-1.5 opacity-60">{categoryIcons[category]}</span>
            {category}
          </button>
        ))}
      </div>

      <div
        key={activeCategory}
        className="grid grid-cols-2 md:grid-cols-3 gap-3"
        style={{ animation: "reveal-child 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards" }}
      >
        {skillCategories[activeCategory as keyof typeof skillCategories].map((skill) => (
          <div
            key={skill}
            className="px-4 py-3 bg-surface text-text-primary rounded-lg text-sm font-medium border border-border hover:border-accent/30 transition-colors duration-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
