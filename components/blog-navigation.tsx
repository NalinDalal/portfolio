"use client";

import { usePathname } from "next/navigation";
import { Home, Book } from "lucide-react";
import { Link } from "next-view-transitions";
import React from "react";

interface BlogLink {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

const blogLinks: BlogLink[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="w-4 h-4 text-slate-300" />,
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: <Book className="w-4 h-4 text-slate-300" />,
  },
];

export function BlogNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8 mb-10 border-b border-slate-800">
      {blogLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative pb-3 flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${isActive ? "text-white" : "text-slate-400 hover:text-white"}`}
          >
            {link.icon}
            <span>{link.title}</span>

            {/* Active underline */}
            {isActive && (
              <span className="absolute left-0 -bottom-[1px] w-full h-0.5 bg-slate-300 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
