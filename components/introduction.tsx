"use client";
import Image from "next/image";
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const techStack = [
  { name: "TypeScript", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
  { name: "React", color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20" },
  { name: "Next.js", color: "bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border-zinc-500/20" },
  { name: "Node.js", color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20" },
  { name: "Rust", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20" },
  { name: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20" },
  { name: "Docker", color: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20" },
  { name: "AWS", color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
];

function Introduction() {
  return (
    <section className="py-10">
      {/* Hero */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Available for freelance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3"
          >
            <span className="text-zinc-900 dark:text-white">I build </span>
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              systems
            </span>
            <span className="text-zinc-900 dark:text-white"> that</span>
            <br />
            <span className="text-zinc-900 dark:text-white">matter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-500 dark:text-zinc-400 mb-6 max-w-lg leading-relaxed"
          >
            Full-stack engineer specializing in distributed systems, event-driven architectures, and platforms that serve thousands of users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://cal.com/nalin-dalal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Book a Call
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
          <Image
            src="https://avatars.githubusercontent.com/u/116961144?v=4"
            alt="Nalin Dalal"
            height={160}
            width={160}
            className="relative object-cover rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 shadow-lg"
          />
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10"
      >
        <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">Tech Stack</p>
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10"
      >
        <Link href="/projects/modheshwari" className="group block">
          <div className="relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-900/50 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent rounded-bl-full" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded text-xs font-medium border border-blue-500/20">
                    Personal Project
                  </span>
                  <span className="text-xs text-zinc-400">Live at modheshwari.nerdev.in</span>
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Modheshwari
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
                  Community management platform I built for my local community — designed for 10-15k members, multi-service architecture with Kafka, WebSockets, and full DevOps pipeline.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Bun", "Next.js", "Prisma", "PostgreSQL", "Redis", "Kafka", "Docker"].map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors shrink-0 mt-1" />
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8 flex flex-wrap gap-8"
      >
        {[
          { value: "550+", label: "LeetCode" },
          { value: "830+", label: "CodeForces" },
          { value: "30+", label: "Projects" },
        ].map((stat) => (
          <div key={stat.label}>
            <span className="font-bold text-2xl text-zinc-900 dark:text-white">{stat.value}</span>
            <span className="text-zinc-400 dark:text-zinc-500 ml-1.5 text-sm">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Introduction;
