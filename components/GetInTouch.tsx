import React from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import GithubHoverCard from "@/components/GithubHoverCard";
import TwitterHoverCard from "@/components/TwitterHoverCard";
import LinkedinHoverCard from "@/components/LinkedinHoverCard";

function GetInTouch() {
    return (
        <footer className="py-16">
            <div className="mb-10 text-center">
                <p className="section-label">Get in Touch</p>
                <h2 className="text-text-primary mb-4 font-display text-[var(--text-display)] font-bold tracking-[-0.025em]">
                    Let&apos;s build something.
                </h2>
                <p className="text-text-secondary mx-auto max-w-md">
                    Have a project in mind or just want to chat? I&apos;m always
                    open to new opportunities and interesting conversations.
                </p>
            </div>

            <div className="mb-10 flex justify-center">
                <a
                    href="mailto:nalin@nerdev.in"
                    className="bg-accent text-bg-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 font-display font-semibold transition-all duration-200 hover:scale-105 hover:opacity-90 active:scale-[0.98]"
                >
                    <Mail className="h-4 w-4" />
                    Say Hello
                </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <GithubHoverCard username="nalindalal" variant="card" />
                <Link
                    href="mailto:nalin@nerdev.in"
                    className="text-text-secondary hover:text-accent border-border hover:border-accent/30 flex items-center gap-2 rounded-lg border px-4 py-2.5 transition-all duration-200"
                    aria-label="Email"
                >
                    <Mail className="h-5 w-5" />
                </Link>
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
            </div>

            <div className="text-text-secondary mt-12 px-4 text-center text-sm">
                <div className="via-border mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent to-transparent" />
                &copy; {new Date().getFullYear()} Nalin Dalal. All rights
                reserved.
            </div>
        </footer>
    );
}

export default GetInTouch;
