"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogLink {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

const blogLinks: BlogLink[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="h-4 w-4" aria-hidden="true" />,
  },
];

export function BlogNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="mb-8 flex items-center gap-6 border-b border-border"
      aria-label="Blog Navigation"
    >
      {blogLinks.map(({ href, title, icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2 pb-2 -mb-px transition-colors",
              isActive
                ? "border-b-2 border-accent text-text-primary"
                : "text-text-secondary hover:text-text-primary",
            )}
          >
            {icon}
            <span>{title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
