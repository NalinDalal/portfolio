"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const navItems = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#contributions", label: "OSS", id: "contributions" },
  { href: "/blogs", label: "Notes", id: "notes" },
  { href: "/#about", label: "About", id: "about" },
];

const socialLinks = [
  { href: "https://github.com/nalindalal", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/nalin-dalal", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:nalin@nerdev.in", label: "Email", icon: Mail },
  { href: "/resume", label: "Resume", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-16 flex-col items-center py-8 z-40">
      {/* Identity mark */}
      <Link
        href="/"
        className="font-display font-bold text-lg text-text-primary hover:text-accent transition-colors mb-8"
      >
        N
      </Link>

      {/* Divider */}
      <div className="w-4 h-px bg-border mb-6" />

      {/* Main nav */}
      <nav className="flex flex-col items-center gap-5 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href.split("#")[0] + "#");
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative text-xs font-medium transition-colors duration-150",
                isActive
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary",
              )}
              title={item.label}
            >
              {item.label}
              {isActive && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-teal" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="w-4 h-px bg-border my-6" />

      {/* Social links */}
      <div className="flex flex-col items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-text-secondary hover:text-teal transition-colors duration-150"
            title={link.label}
          >
            <link.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </aside>
  );
}
