"use client";
import React from "react";
import { ArrowRight, Github, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import GithubHoverCard from "@/components/GithubHoverCard";
import TwitterHoverCard from "@/components/TwitterHoverCard";
import LinkedinHoverCard from "@/components/LinkedinHoverCard";

function Introduction() {
    return (
        <section className="relative pt-12 pb-8">
            {/* Hero */}
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-4"
                >
                    <h1 className="text-text-primary font-display text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Nalin Dalal
                    </h1>
                    <p className="text-text-secondary mt-3 text-lg font-medium">
                        Software Engineer
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.05,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mb-8 max-w-xl"
                >
                    <p className="text-text-secondary leading-relaxed">
                        I build software, contribute to open source, and write
                        about things I learn.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-wrap gap-4"
                >
                    <Link
                        href="/#work"
                        className="bg-accent text-bg-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-display text-sm font-semibold transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                    >
                        View Work
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                        href="/resume"
                        className="border-border text-text-secondary hover:border-accent hover:text-text-primary inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors duration-150 active:scale-[0.98]"
                    >
                        <FileText className="h-4 w-4" />
                        Resume
                    </a>
                </motion.div>

                {/* Social Hover Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mt-8 flex flex-wrap gap-3"
                >
                    <GithubHoverCard username="nalindalal" variant="card" />
                    <LinkedinHoverCard
                        username="nalin-dalal"
                        name="Nalin Dalal"
                        headline="Full Stack Engineer"
                        connections="500+"
                        location="India"
                        variant="card"
                    />
                    <TwitterHoverCard
                        username="nalin82929"
                        name="Nalin Dalal"
                        variant="card"
                    />
                </motion.div>
            </div>

            {/* Subtle teal glow */}
            <div className="bg-hero-glow/5 pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl" />
        </section>
    );
}

export default Introduction;
