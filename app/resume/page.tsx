import { experiences } from "@/data";
import { Download, Mail, Github, Linkedin, Code, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Resume - Nalin Dalal",
  description: "Software engineer, open-source contributor, and builder of things that matter.",
};

const projects = [
  {
    name: "Full-Stack Blogging Platform",
    tech: ["React", "Next.js", "Prisma", "PostgreSQL"],
    points: [
      "Built a platform with user authentication, CRUD operations, and Vercel deployment.",
      "Implemented responsive UI and optimized Postgres data models for high performance.",
    ],
  },
  {
    name: "Blind",
    link: "https://blind-app-cyan.vercel.app/",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    points: [
      "Anonymous platform with moderation filters and cursor-based pagination for data retrieval.",
      "Engineered lightweight post-syncing to maintain real-time performance across the app.",
    ],
  },
  {
    name: "Interactive Drawing App",
    tech: ["MonoRepo", "React", "Node.js", "WebSockets"],
    points: [
      "Created a collaborative real-time canvas supporting drawing, erasing, and shape persistence.",
      "Applied monorepo architecture and state management for synchronized multi-user sessions.",
    ],
  },
  {
    name: "Modheshwari",
    link: "https://modheshwari.nerdev.in/",
    tech: ["Bun", "TypeScript", "Next.js", "Prisma", "PostgreSQL", "Redis", "Kafka", "Docker"],
    points: [
      "Architected a full-stack community management platform designed to support 10,000-15,000 members, covering family records, events, resource requests, forums, and notifications.",
      "Designed role-based access control with privacy controls across community, gotra, family, and member roles.",
      "Built multi-approver resource request and event approval workflows using Prisma/PostgreSQL as the domain model.",
      "Implemented asynchronous notification delivery via Kafka workers and a dedicated WebSocket service for real-time messaging and updates.",
      "Set up CI/CD with GitHub Actions to build, test, and deploy Docker images to AWS ECR/ECS, with Prometheus and New Relic monitoring.",
      "Load/stress-tested the platform against projected usage for a 10-15k member community.",
    ],
  },
];

const achievements = [
  "Solved 550+ problems on LeetCode (Rating: 1600+) and 830+ on Codeforces (Rating: 1200).",
  "Deep architectural understanding of C++ and Rust achieved through low-level documentation study.",
  "Built 30+ CLI and networking tools including custom Redis clones and load balancers.",
];

const miniProjects = [
  {
    name: "Redis Clones",
    tech: "Rust",
    description: "Built Redis clones with persistence logic.",
  },
  {
    name: "TCP Runtimes",
    tech: "Rust",
    description: "Implemented TCP runtimes from scratch.",
  },
  {
    name: "Unix Shell",
    tech: "Rust, C++",
    description: "Created Unix shell with piping and persistence logic.",
  },
  {
    name: "JSON Parsers",
    tech: "TypeScript",
    description: "Implemented JSON parsers from scratch using recursion.",
  },
  {
    name: "BPE Tokenizers",
    tech: "Rust",
    description: "Built BPE tokenizers from scratch using recursion.",
  },
];

const certifications = [
  "Python Essentials 1 & 2 (Cisco Networking Academy)",
  "CCNA (M1, M2, M3), CyberOps Associate, Networking Essentials",
];

export default function ResumePage() {
  return (
    <main className="max-w-3xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-text-primary">Resume</h1>
        <a
          href="/Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg-primary rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      <div className="space-y-8">
        {/* Header */}
        <section className="border-b border-border pb-6">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-2">Nalin Dalal</h2>
          <p className="text-text-secondary mb-3">
            Software engineer &amp; open-source contributor building systems that matter.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
            <a href="tel:+917440620675" className="flex items-center gap-1 hover:text-accent transition-colors">
              +91 7440620675
            </a>
            <span>•</span>
            <a href="mailto:nalin@nerdev.in" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              nalin@nerdev.in
            </a>
            <span>•</span>
            <a href="https://github.com/nalindalal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/nalin-dalal-815617271" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://leetcode.com/Nalindalal2004/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Code className="w-4 h-4" />
              LeetCode
            </a>
            <span>•</span>
            <a href="https://codeforces.com/profile/nalindalal2004" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Code className="w-4 h-4" />
              CodeForces
            </a>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="font-display text-lg font-bold text-text-primary mb-3">Education</h3>
          <div className="space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="font-semibold text-text-primary">Oriental Institute of Science & Technology</h4>
                <p className="text-text-secondary">B.Tech in Computer Science & Engineering</p>
              </div>
              <span className="text-sm text-text-secondary">Bhopal, MP • 2022 — 2026</span>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 className="font-semibold text-text-primary">Macro Vision Academy</h4>
                <p className="text-text-secondary">Senior Secondary (CBSE)</p>
              </div>
              <span className="text-sm text-text-secondary">Burhanpur, MP • 2022</span>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h3 className="font-display text-lg font-bold text-text-primary mb-3">Technical Skills</h3>
          <div className="space-y-2 text-text-secondary">
            <p><span className="font-semibold text-text-primary">Languages:</span> C++, TypeScript, JavaScript, Rust, Solidity, SQL</p>
            <p><span className="font-semibold text-text-primary">Frameworks:</span> React, Next.js (App Router), Node.js, Tailwind CSS, Prisma, Elysia</p>
            <p><span className="font-semibold text-text-primary">DevOps & Cloud:</span> Docker, Kubernetes, AWS, Vercel, GitHub Actions, Terraform</p>
            <p><span className="font-semibold text-text-primary">Data & Messaging:</span> PostgreSQL, Redis, Kafka, Elasticsearch, WebSockets</p>
            <p><span className="font-semibold text-text-primary">Tools:</span> Git, Jest, Bash/Zsh, LazyGit, Neovim</p>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="font-display text-lg font-bold text-text-primary mb-3">Experience</h3>
          <div className="space-y-4">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h4 className="font-semibold text-text-primary">GSSoC Contributor</h4>
                  <p className="text-accent text-sm">Open Source Contributor</p>
                </div>
                <span className="text-sm text-text-secondary">May 2024 — Oct 2024</span>
              </div>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 ml-2">
                <li>Contributed code and enhancements to multiple open source repositories with global developers.</li>
                <li>Designed and optimized modular backend systems and scalable front-end components.</li>
              </ul>
            </div>
            <div>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h4 className="font-semibold text-text-primary">Headstarter</h4>
                  <p className="text-accent text-sm">Software Engineer Fellow</p>
                </div>
                <span className="text-sm text-text-secondary">Aug 2024 — Oct 2024</span>
              </div>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 ml-2">
                <li>Developed full-stack web applications using React, Node.js, and PostgreSQL.</li>
                <li>Implemented responsive UIs and optimized RESTful APIs for database-backed business logic.</li>
              </ul>
            </div>
            <div>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h4 className="font-semibold text-text-primary">DEBUG (University Tech Society)</h4>
                  <p className="text-accent text-sm">Open Source Maintainer</p>
                </div>
                <span className="text-sm text-text-secondary">July 2024 — Present</span>
              </div>
              <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 ml-2">
                <li>Managed GitHub repositories and led technical onboarding for new student contributors.</li>
                <li>Built scalable web applications using Next.js and React for campus-wide initiatives.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h3 className="font-display text-lg font-bold text-text-primary mb-3">Projects</h3>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-text-primary">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
                        {project.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      project.name
                    )}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-surface-light text-text-secondary rounded text-xs border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 ml-2">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Achievements */}
        <section>
          <h3 className="font-display text-lg font-bold text-text-primary mb-3">Technical Achievements</h3>
          <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        {/* Mini Projects */}
        <section>
          <h3 className="font-display text-lg font-bold text-text-primary mb-3">Mini Projects (CLI & Systems Tools)</h3>
          <div className="space-y-2">
            <p className="text-text-secondary">
              <span className="font-semibold text-text-primary">Systems Programming Tools:</span> Rust, C++, TypeScript
            </p>
            <ul className="list-disc list-inside text-text-secondary text-sm space-y-1 ml-2">
              {miniProjects.map((project, index) => (
                <li key={index}>
                  <span className="font-medium text-text-primary">{project.name}</span> ({project.tech}): {project.description}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h3 className="font-display text-lg font-bold text-text-primary mb-3">Certifications</h3>
          <ul className="list-disc list-inside text-text-secondary text-sm space-y-1">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
