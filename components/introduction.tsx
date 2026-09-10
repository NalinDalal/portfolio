"use client";
import Image from "next/image";
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const techStack = [
  { name: "TypeScript", color: "bg-accent/10 text-accent border-accent/20" },
  { name: "React", color: "bg-surface-light text-text-primary border-border" },
  { name: "Next.js", color: "bg-surface-light text-text-primary border-border" },
  { name: "Node.js", color: "bg-surface-light text-text-primary border-border" },
  { name: "Rust", color: "bg-accent/10 text-accent border-accent/20" },
  { name: "PostgreSQL", color: "bg-surface-light text-text-primary border-border" },
  { name: "Docker", color: "bg-surface-light text-text-primary border-border" },
  { name: "AWS", color: "bg-accent/10 text-accent border-accent/20" },
];

function Introduction() {
  return (
    <section className="pt-8 pb-20 relative">
      {/* Dot grid background - signature element */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none rounded-2xl" />

      {/* Hero */}
      <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-medium text-accent">Freelance &middot; Open</span>
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-medium text-accent">Full-Time &middot; Open</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 leading-[1.05]"
          >
            <span className="text-text-primary">I build </span>
            <span className="text-accent">systems</span>
            <br />
            <span className="text-text-primary">that matter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-text-secondary mb-10 max-w-lg leading-relaxed"
          >
            Full-stack engineer specializing in distributed systems, event-driven architectures, and platforms that serve thousands of users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary rounded-lg font-display font-semibold hover:opacity-90 active:scale-[0.98] transition-all duration-150"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://cal.com/nerdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary rounded-lg font-medium hover:border-accent hover:text-text-primary transition-colors duration-150 active:scale-[0.98]"
            >
              Book a Call
            </a>
            <a
              href="mailto:nalin@nerdev.in?subject=Full-Time%20Opportunity"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary rounded-lg font-medium hover:border-accent hover:text-text-primary transition-colors duration-150 active:scale-[0.98]"
            >
              Full-Time Roles
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative shrink-0"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/116961144?v=4"
            alt="Nalin Dalal"
            height={180}
            width={180}
            className="relative object-cover rounded-2xl border-2 border-border"
          />
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-14"
      >
        <p className="section-label">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Featured Project Callout */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-14"
      >
        <Link href="/projects/modheshwari" className="group block">
          <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-6 hover:border-accent/30 transition-colors duration-150">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded text-xs font-medium border border-accent/20">
                    Featured Project
                  </span>
                  <span className="text-xs text-text-secondary">modheshwari.nerdev.in</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-text-primary mb-2 group-hover:text-accent transition-colors duration-150">
                  Modheshwari
                </h3>
                <p className="text-sm text-text-secondary max-w-md leading-relaxed">
                  Community management platform for 10-15k members. Multi-service architecture with Kafka, WebSockets, and full DevOps pipeline.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {["Bun", "Next.js", "Prisma", "PostgreSQL", "Redis", "Kafka", "Docker"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-surface-light text-text-secondary rounded text-xs border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-border group-hover:text-accent transition-colors duration-150 shrink-0 mt-1" />
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-14 grid grid-cols-3 gap-8 max-w-md"
      >
        {[
          { value: "550+", label: "LeetCode" },
          { value: "830+", label: "CodeForces" },
          { value: "30+", label: "Projects" },
        ].map((stat) => (
          <div key={stat.label}>
            <span className="font-display font-bold text-3xl text-accent">{stat.value}</span>
            <span className="text-text-secondary text-sm block mt-1">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Introduction;
