"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";

interface LinkedinHoverCardProps {
  username: string;
  name?: string;
  avatarUrl?: string;
  bannerUrl?: string;
  headline?: string;
  connections?: number | string;
  location?: string;
  className?: string;
}

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn("fill-current", className)}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const LinkedinHoverCard = ({
  username,
  name = "LinkedIn User",
  avatarUrl,
  bannerUrl,
  headline = "Software Engineer",
  connections = "500+",
  location = "San Francisco, CA",
  className,
}: LinkedinHoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const profileUrl = `https://linkedin.com/in/${username}`;

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
    const nx = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 20;
    const ny = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 20;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

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
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-accent transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>

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
        className="absolute bottom-full right-0 z-50 mb-4 w-80 overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-xl backdrop-blur-md"
      >
        <div className="relative -mx-4 -mt-4 h-20 overflow-hidden rounded-t-2xl bg-surface-light">
          {bannerUrl && (
            <img src={bannerUrl} alt="Banner" className="h-full w-full object-cover" />
          )}
        </div>

        <div className="relative flex justify-between">
          <div className="-mt-10 h-20 w-20 rounded-full border-4 border-surface bg-surface">
            {avatarUrl && avatarUrl.length > 0 ? (
              <img src={avatarUrl} alt={name} className="h-full w-full rounded-full object-cover" />
            ) : (
              <div className="h-full w-full rounded-full bg-surface-light flex items-center justify-center text-text-secondary">
                <Linkedin className="h-8 w-8" />
              </div>
            )}
          </div>
          <div className="mt-2 text-[#0A66C2]">
            <LinkedinIcon className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-2 text-left">
          <h3 className="text-lg font-semibold text-text-primary leading-tight">{name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-text-secondary">{headline}</p>
          <p className="mt-1 text-xs text-text-secondary">{location}</p>
          <p className="mt-2 text-xs font-semibold text-text-primary">{connections} connections</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LinkedinHoverCard;
