"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Twitter } from "lucide-react";

interface TwitterHoverCardProps {
  username: string;
  name?: string;
  avatarUrl?: string;
  variant?: "icon" | "card";
  className?: string;
}

const formatCount = (count: number) => {
  if (count >= 1000000) return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (count >= 1000) return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return count.toString();
};

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={cn("fill-current", className)}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const TwitterHoverCard = ({
  username,
  name = "Twitter User",
  avatarUrl,
  variant = "icon",
  className,
}: TwitterHoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const profileUrl = `https://x.com/${username}`;

  const cardRef = useRef<HTMLDivElement>(null);

  const [profile, setProfile] = useState({
    name: name,
    avatarUrl: avatarUrl || "",
    bio: "This user hasn't added a bio yet.",
    following: 0,
    followers: 0,
    location: "",
  });

  React.useEffect(() => {
    fetch(`https://api.fxtwitter.com/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200 && data.user) {
          const user = data.user;
          setProfile({
            name: user.name || name,
            avatarUrl: user.avatar_url?.replace("_normal", "_400x400") || avatarUrl || "",
            bio: user.description || "This user hasn't added a bio yet.",
            following: user.following ?? 0,
            followers: user.followers ?? 0,
            location: user.location || "",
          });
        }
      })
      .catch(() => {});
  }, [username, name, avatarUrl]);

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
      className={cn(
        "relative",
        variant === "card" && "flex items-center gap-2 px-4 py-2.5 text-text-secondary hover:text-accent rounded-lg transition-all duration-200",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
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
            y: 12,
            scale: 0.95,
            filter: "blur(4px)",
            pointerEvents: "none",
            transformOrigin: "bottom center",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            pointerEvents: "auto",
            transformOrigin: "bottom center",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
        }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 z-50 mb-3 w-72 rounded-2xl border border-border bg-surface p-4 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3 mb-3">
          {profile.avatarUrl && profile.avatarUrl.length > 0 ? (
            <img
              src={profile.avatarUrl}
              alt={`${profile.name}'s Avatar`}
              className="h-10 w-10 rounded-full border border-border object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-full border border-border bg-surface-light flex items-center justify-center text-text-secondary">
              <TwitterIcon className="h-5 w-5" />
            </div>
          )}
          <div className="flex flex-col text-left min-w-0">
            <span className="text-sm font-semibold text-text-primary truncate">
              {profile.name}
            </span>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              @{username}
            </a>
          </div>
          <TwitterIcon className="w-4 h-4 text-text-secondary ml-auto shrink-0" />
        </div>

        <p className="text-xs text-text-secondary line-clamp-2 mb-3">
          {profile.bio}
        </p>

        <div className="flex gap-3 text-xs text-text-secondary">
          <div className="flex gap-1">
            <span className="font-semibold text-text-primary">{formatCount(profile.following)}</span>
            <span>Following</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold text-text-primary">{formatCount(profile.followers)}</span>
            <span>Followers</span>
          </div>
          {profile.location && (
            <span className="ml-auto">{profile.location}</span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TwitterHoverCard;
