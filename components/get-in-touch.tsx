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
    <footer className="py-16">
      <div className="text-center mb-10">
        <p className="section-label">Get in Touch</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-text-primary mb-4">
          Let&apos;s build something.
        </h2>
        <p className="text-text-secondary max-w-md mx-auto">
          Have a project in mind or just want to chat? I&apos;m always open to new opportunities and interesting conversations.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <a
          href="mailto:nalin@nerdev.in"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary rounded-lg font-display font-semibold hover:bg-accent/90 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex items-center gap-2 px-4 py-2.5 text-text-secondary hover:text-accent border border-border hover:border-accent/30 rounded-lg transition-all duration-200"
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
            <span className="text-sm font-medium">{link.label}</span>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-text-secondary px-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-6" />
        &copy; {new Date().getFullYear()} Nalin Dalal. All rights reserved.
      </div>
    </footer>
  );
}

export default GetInTouch;
