"use client";

import { Github, Linkedin, Twitter, Mail, GitPullRequest } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-10 p-6 border-b border-gray-800 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
        >
          Nalin Dalal
        </Link>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/nalindalal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/nalin-dalal-815617271"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/nalin82929"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="mailto:nalindalal2004@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            aria-label="Pull Request Docs"
            title="Pull Request Docs"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <GitPullRequest className="h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}
