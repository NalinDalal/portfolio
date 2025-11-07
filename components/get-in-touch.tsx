import React from "react";
import { GithubIcon, Mail, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

function GetInTouch() {
  return (
    <div className="flex flex-col gap-y-4 text-black dark:text-white w-full">
      {/* <h2 className="font-bold text-2xl md:text-4xl tracking-tight">
        Get In Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Interested in collaborating or discussing an idea? Feel free to reach out.
      </p> */}
      <Footer />
    </div>
  );
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <GithubIcon className="w-5 h-5" />,
    href: "https://github.com/nalindalal",
    label: "GitHub",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:hey@nalin.to",
    label: "Email",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/nalin-dalal",
    label: "LinkedIn",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com/nalin82929",
    label: "Twitter",
  },
];

function Footer() {
  return (
    <footer>
      <div className="flex justify-center space-x-6">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nalin Dalal. All rights reserved.
      </div>

      <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Built with precision & caffeine ☕ by Nalin Dalal
      </div>
    </footer>
  );
}

export default GetInTouch;
