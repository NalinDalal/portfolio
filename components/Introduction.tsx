"use client";
import React from "react";
import { ArrowRight, Github, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

function Introduction() {
    return (
        <section className="relative pt-12 pb-8">
            <div className="relative">
                {/* Name + Role + Avatar */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-4 flex items-center gap-6"
                >
                    <div>
                        <h1 className="text-text-primary font-display text-[var(--text-hero)] leading-[1.05] font-bold tracking-[-0.03em]">
                            Nalin Dalal
                        </h1>
                        <p className="text-text-secondary mt-3 text-[var(--text-lead)] font-medium">
                            Software Engineer
                        </p>
                    </div>

                    {/* Avatar with glow */}
                    <a
                        href="https://github.com/nalindalal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative mt-4 mr-12 shrink-0 transition-all duration-200 hover:scale-150"
                    >
                        <div className="bg-teal/20 absolute inset-0 rounded-full blur-xl" />
                        <Image
                            src="https://avatars.githubusercontent.com/u/116961144?v=4"
                            alt="Nalin Dalal"
                            height={110}
                            width={110}
                            className="border-border relative rounded-full border-2 object-cover"
                        />
                    </a>
                </motion.div>

                {/* Engineering Identity */}
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
                    <p className="text-text-secondary text-[var(--text-body)] leading-[1.6]">
                        Building software.
                        <br />
                        Contributing to software.
                        <br />
                        Writing about what I learn.
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mb-10 flex flex-wrap gap-4"
                >
                    <Link
                        href="/#work"
                        className="bg-accent text-bg-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-display text-sm font-semibold transition-all duration-200 hover:scale-105 hover:opacity-90 active:scale-[0.98]"
                    >
                        View Work
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="/services"
                        className="border-border text-text-secondary hover:border-accent hover:text-text-primary inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-[0.98]"
                    >
                        Services
                    </Link>
                    <a
                        href="https://github.com/nalindalal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-border text-text-secondary hover:border-accent hover:text-text-primary inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-[0.98]"
                    >
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                    <a
                        href="/resume"
                        className="border-border text-text-secondary hover:border-accent hover:text-text-primary inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-[0.98]"
                    >
                        <FileText className="h-4 w-4" />
                        Resume
                    </a>
                </motion.div>

                {/* Evidence Counters */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.15,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex gap-10"
                >
                    <div className="flex items-baseline gap-2">
                        <span className="text-text-secondary font-mono text-[var(--text-caption)] tracking-[0.05em]">
                            WORK
                        </span>
                        <span className="text-text-primary font-display text-[var(--text-heading)] font-bold tracking-[-0.02em]">
                            05
                        </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-text-secondary font-mono text-[var(--text-caption)] tracking-[0.05em]">
                            OSS
                        </span>
                        <span className="text-text-primary font-display text-[var(--text-heading)] font-bold tracking-[-0.02em]">
                            12
                        </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-text-secondary font-mono text-[var(--text-caption)] tracking-[0.05em]">
                            WRITING
                        </span>
                        <span className="text-text-primary font-display text-[var(--text-heading)] font-bold tracking-[-0.02em]">
                            08
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Subtle teal glow */}
            <div className="bg-hero-glow/5 pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl" />
        </section>
    );
}

export default Introduction;
