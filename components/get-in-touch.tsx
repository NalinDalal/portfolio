import React from "react";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

function GetInTouch() {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/nalindalal", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:hey@nalin.to", label: "Email" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/nalin-dalal", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/nalin82929", label: "Twitter" },
  ];

  return (
    <footer className="py-8 border-t border-zinc-100 dark:border-zinc-800">
      <div className="flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Nalin Dalal. All rights reserved.
      </div>
    </footer>
  );
}

export default GetInTouch;
