"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";

const navItems = [
    { href: "/#work", label: "Work", id: "work" },
    { href: "/#contributions", label: "OSS", id: "contributions" },
    { href: "/blogs", label: "Notes", id: "notes" },
    { href: "/#about", label: "About", id: "about" },
];

const socialLinks = [
    {
        href: "https://github.com/nalindalal",
        label: "GitHub",
        icon: Github,
        hoverColor: "hover:text-white",
    },
    {
        href: "https://linkedin.com/in/nalin-dalal",
        label: "LinkedIn",
        icon: Linkedin,
        hoverColor: "hover:text-[#0A66C2]",
    },
    {
        href: "https://x.com/nalin82929",
        label: "Twitter",
        icon: Twitter,
        hoverColor: "hover:text-white",
    },
    {
        href: "mailto:nalin@nerdev.in",
        label: "Email",
        icon: Mail,
        hoverColor: "hover:text-text-primary",
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed top-0 left-0 z-40 hidden h-screen w-16 flex-col items-center py-8 md:flex">
            {/* Identity mark */}
            <Link
                href="/"
                className="text-text-primary hover:text-accent mb-8 font-display text-lg font-bold transition-colors"
            ></Link>

            {/* Divider */}
            <div className="bg-border mb-6 h-px w-4" />

            {/* Main nav */}
            <nav className="flex flex-1 flex-col items-center gap-5">
                {navItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        pathname.startsWith(item.href.split("#")[0] + "#");
                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={cn(
                                "relative text-xs font-medium transition-all duration-200 hover:scale-125",
                                isActive
                                    ? "text-text-primary"
                                    : "text-text-secondary hover:text-text-primary",
                            )}
                            title={item.label}
                        >
                            {item.label}
                            {isActive && (
                                <span className="bg-teal absolute top-1/2 -left-3 h-1.5 w-1.5 -translate-y-1/2 rounded-full" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Divider */}
            <div className="bg-border my-6 h-px w-4" />

            {/* Social links */}
            <div className="flex flex-col items-center gap-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={
                            link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                            link.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                        className={cn(
                            "text-text-secondary transition-all duration-200 hover:scale-125",
                            link.hoverColor,
                        )}
                        title={link.label}
                    >
                        <link.icon className="h-4 w-4" />
                    </a>
                ))}
            </div>
        </aside>
    );
}
