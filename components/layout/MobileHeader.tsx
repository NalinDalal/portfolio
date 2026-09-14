"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#contributions", label: "OSS" },
  { href: "/blogs", label: "Notes" },
  { href: "/#about", label: "About" },
];

const socialLinks = [
  { href: "https://github.com/nalindalal", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/nalin-dalal", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:nalin@nerdev.in", label: "Email", icon: Mail },
  { href: "/resume", label: "Resume", icon: FileText },
];

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 flex items-center justify-between px-4 bg-bg-primary/90 backdrop-blur-md border-b border-border z-50">
        <Link
          href="/"
          className="font-display font-bold text-lg text-text-primary hover:text-accent transition-colors duration-200"
        >
          N
        </Link>

        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href.split("#")[0] + "#");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs font-medium transition-colors duration-150",
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-bg-primary/95 backdrop-blur-md z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-heading)] font-display font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            <div className="w-8 h-px bg-border my-4" />

            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-text-secondary hover:text-teal transition-colors duration-200"
                  title={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
