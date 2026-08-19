"use client";
import Image from "next/image";
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const techStack = [
  { name: "TypeScript", color: "bg-accent/10 text-accent border-accent/20" },
  { name: "React", color: "bg-teal/10 text-teal border-teal/20" },
  { name: "Next.js", color: "bg-surface-light text-text-primary border-border" },
  { name: "Node.js", color: "bg-teal/10 text-teal border-teal/20" },
  { name: "Rust", color: "bg-accent/10 text-accent border-accent/20" },
  { name: "PostgreSQL", color: "bg-teal/10 text-teal border-teal/20" },
  { name: "Docker", color: "bg-surface-light text-text-primary border-border" },
  { name: "AWS", color: "bg-accent/10 text-accent border-accent/20" },
];

function Introduction() {
  return (
    <section className="py-16 relative">
      {/* Dot grid background - signature element */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none rounded-2xl" />

      {/* Hero */}
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-teal/20 bg-teal/10">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-xs font-medium text-teal">Freelance · Open</span>
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-accent">Full-Time · Open</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 leading-[1.05]"
          >
            <span className="text-text-primary">I build </span>
            <span className="gradient-text-accent">systems</span>
            <span className="text-text-primary"> that</span>
            <br />
            <span className="text-text-primary">matter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed"
          >
            Full-stack engineer specializing in distributed systems, event-driven architectures, and platforms that serve thousands of users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://cal.com/nerdev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary rounded-lg font-medium hover:border-accent hover:text-text-primary transition-colors"
            >
              Book a Call — Freelance
            </a>
            <a
              href="mailto:nalin@nerdev.in?subject=Full-Time%20Opportunity"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary rounded-lg font-medium hover:border-accent hover:text-text-primary transition-colors"
            >
              Open to Full-Time Roles
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-transparent to-teal/20 rounded-3xl blur-2xl" />
          <Image
            src="https://avatars.githubusercontent.com/u/116961144?v=4"
            alt="Nalin Dalal"
            height={180}
            width={180}
            className="relative object-cover rounded-2xl border-2 border-border shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative mt-12"
      >
        <p className="text-xs font-medium text-text-secondary uppercase tracking-widest mb-4 font-display">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Featured Project Callout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative mt-12"
      >
        <Link href="/projects/modheshwari" className="group block">
          <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-6 hover:border-accent/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/5 via-transparent to-transparent rounded-bl-full" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 bg-accent/10 text-accent rounded text-xs font-medium border border-accent/20">
                    Featured Project
                  </span>
                  <span className="text-xs text-text-secondary">Live at modheshwari.nerdev.in</span>
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary mb-2 group-hover:text-accent transition-colors">
                  Modheshwari
                </h3>
                <p className="text-sm text-text-secondary max-w-md leading-relaxed">
                  Community management platform I built for my local community — designed for 10-15k members, multi-service architecture with Kafka, WebSockets, and full DevOps pipeline.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {["Bun", "Next.js", "Prisma", "PostgreSQL", "Redis", "Kafka", "Docker"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-surface-light text-text-secondary rounded text-xs border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-border group-hover:text-accent transition-colors shrink-0 mt-1" />
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="relative mt-10 flex flex-wrap gap-10"
      >
        {[
          { value: "550+", label: "LeetCode" },
          { value: "830+", label: "CodeForces" },
          { value: "30+", label: "Projects" },
        ].map((stat) => (
          <div key={stat.label}>
            <span className="font-display font-bold text-3xl gradient-text-accent">{stat.value}</span>
            <span className="text-text-secondary ml-2 text-sm">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Introduction;
