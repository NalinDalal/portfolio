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
  { title: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
  { title: "Blogs", href: "/blogs", icon: <Book className="w-4 h-4" /> },
];

export function BlogNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8 mb-10 border-b border-gray-200 dark:border-gray-800">
      {blogLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative pb-3 flex items-center gap-2 text-sm font-medium transition-colors duration-200
              ${
                isActive
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
          >
            {link.icon}
            <span>{link.title}</span>

            {/* Active underline */}
            {isActive && (
              <span className="absolute left-0 -bottom-[1px] w-full h-0.5 bg-gray-900 dark:bg-gray-100 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
