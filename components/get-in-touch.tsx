import React from "react";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

function GetInTouch() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/nalindalal", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:nalin@nerdev.in", label: "Email" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/nalin-dalal-815617271", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/nalin82929", label: "Twitter" },
  ];

  return (
    <footer className="py-10 border-t border-border">
      <div className="flex flex-wrap justify-center gap-5 sm:gap-6 px-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-text-secondary hover:text-accent transition-colors p-2"
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-text-secondary px-4">
        © {new Date().getFullYear()} Nalin Dalal. All rights reserved.
      </div>
    </footer>
  );
}

export default GetInTouch;
