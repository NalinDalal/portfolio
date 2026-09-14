"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

interface GithubHoverCardProps {
  username: string;
  name?: string;
  avatarUrl?: string;
  year?: number | string;
  themeScheme?: "monochrome" | "green" | "blue" | "purple";
  className?: string;
}

const colorSchemes = {
  monochrome: {
    light: ["#f5f5f5", "#d4d4d4", "#a3a3a3", "#737373", "#404040"],
    dark: ["#262626", "#404040", "#737373", "#a3a3a3", "#d4d4d4"],
  },
  green: {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  },
  blue: {
    light: ["#f0f9ff", "#bae6fd", "#38bdf8", "#0284c7", "#0369a1"],
    dark: ["#172554", "#1e3a8a", "#1d4ed8", "#3b82f6", "#60a5fa"],
  },
  purple: {
    light: ["#faf5ff", "#e9d5ff", "#c084fc", "#9333ea", "#6b21a8"],
    dark: ["#2e1065", "#3b0764", "#581c87", "#7e22ce", "#a855f7"],
  },
};

const generateEmptyContributions = () => {
  const data = [];
  const today = new Date();
  for (let i = 118; i >= 0; i--) {
    const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    data.push({
      date: date.toISOString().split("T")[0],
      count: 0,
      level: 0,
    });
  }
  return data;
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const GithubHoverCard = ({
  username,
  name = "GitHub User",
  avatarUrl,
  year = 2026,
  themeScheme = "green",
  className,
}: GithubHoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [profile, setProfile] = useState<{ name: string; avatarUrl: string }>({
    name,
    avatarUrl: avatarUrl || `https://github.com/${username}.png`,
  });
  const [contributionsList, setContributionsList] = useState<
    { date: string; count: number; level: number }[]
  >(() => generateEmptyContributions());

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error();
      })
      .then((data) => {
        setProfile({
          name: data.name || data.login || name,
          avatarUrl:
            data.avatar_url ||
            avatarUrl ||
            `https://github.com/${username}.png`,
        });
      })
      .catch(() => {});

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error();
      })
      .then((data: { contributions: { date: string; count: number; level: number }[] }) => {
        if (data.contributions && data.contributions.length > 0) {
          const today = new Date();
          const pastContributions = data.contributions.filter(
            (d) => new Date(d.date) <= today,
          );
          const sorted = pastContributions.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
          );
          setContributionsList(sorted.slice(-119));
        }
      })
      .catch(() => {});
  }, [username, name, avatarUrl]);

  const activeTheme = colorSchemes[themeScheme];

  const contributions = useMemo(() => {
    if (!mounted) {
      return Array.from({ length: 119 }, () => ({
        date: "",
        count: 0,
        level: 0,
      }));
    }
    return contributionsList;
  }, [mounted, contributionsList]);

  const linkRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, (val) => {
    const pct = (val + 20) / 40;
    return 5 - pct * 10;
  });
  const rotateY = useTransform(mouseXSpring, (val) => {
    const pct = (val + 20) / 40;
    return -5 + pct * 10;
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx =
      ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 20;
    const ny =
      ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 20;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const calculatedTotalCommits = useMemo(() => {
    return contributions.reduce((acc, curr) => acc + curr.count, 0);
  }, [contributions]);

  const profileUrl = `https://github.com/${username}`;

  const popoverStyle = {
    x: mouseXSpring,
    rotateX,
    rotateY,
    transformStyle: "preserve-3d" as const,
  };

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={linkRef} className="cursor-pointer">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial="hidden"
        style={popoverStyle}
        animate={isHovered ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            y: 6,
            scale: 0.98,
            filter: "blur(2px)",
            pointerEvents: "none",
            transformOrigin: "bottom center",
            transition: { duration: 0.15, ease: "easeIn" },
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            pointerEvents: "auto",
            transformOrigin: "bottom center",
            transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
          },
        }}
        className="absolute top-full right-0 z-50 mt-3 w-80 rounded-2xl border border-border bg-surface p-6 shadow-xl backdrop-blur-md"
      >
        <div className="mb-4 flex items-center gap-4">
          <img
            src={profile.avatarUrl}
            alt={`${profile.name}'s Avatar`}
            className="h-12 w-12 rounded-full border border-border object-cover"
          />
          <div className="flex flex-col text-left">
            <span className="text-base font-semibold text-text-primary">
              {profile.name}
            </span>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              @{username}
            </a>
          </div>
        </div>

        <div className="mx-auto grid w-max grid-flow-col grid-rows-7 gap-1 select-none">
          {contributions.map((day, index) => {
            const color = isDark
              ? activeTheme.dark[day.level]
              : activeTheme.light[day.level];
            return (
              <div key={day.date || index} className="group/cell relative">
                <div
                  style={{ backgroundColor: color }}
                  className="h-3 w-3 cursor-pointer rounded-[2.5px] transition-all duration-300 hover:z-10 hover:scale-125"
                />
                {mounted && day.date && (
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-[60] mb-2 hidden -translate-x-1/2 rounded bg-bg-primary/95 px-2 py-1 text-[10px] font-semibold whitespace-nowrap text-text-primary shadow-md group-hover/cell:block border border-border">
                    <span>{day.count} commits</span> on {formatDate(day.date)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <span className="mt-3 block text-left font-mono text-xs text-text-secondary">
          {mounted
            ? `${calculatedTotalCommits.toLocaleString()} contributions in ${year}`
            : "... contributions"}
        </span>
      </motion.div>
    </div>
  );
};

export default GithubHoverCard;
