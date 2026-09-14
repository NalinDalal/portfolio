"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Twitter } from "lucide-react";

interface TwitterHoverCardProps {
  username: string;
  name?: string;
  avatarUrl?: string;
  className?: string;
}

const formatCount = (count: number) => {
  if (count >= 1000000) return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (count >= 1000) return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return count.toString();
};

export const TwitterHoverCard = ({
  username,
  name = "Twitter User",
  avatarUrl,
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
    joinedDate: "",
    location: "",
    website: null as { url: string; display_url: string } | null,
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
            joinedDate: user.joined
              ? `Joined ${new Date(user.joined).toLocaleDateString("en-US", { month: "long", year: "numeric" })}`
              : "",
            location: user.location || "",
            website: user.website || null,
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
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-accent transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
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
        <div className="mb-2 flex items-start justify-between">
          {profile.avatarUrl && profile.avatarUrl.length > 0 ? (
            <img
              src={profile.avatarUrl}
              alt={`${profile.name}'s Avatar`}
              className="relative z-10 h-14 w-14 rounded-full border-2 border-surface object-cover"
            />
          ) : (
            <div className="relative z-10 h-14 w-14 rounded-full border-2 border-surface bg-surface-light flex items-center justify-center text-text-secondary">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          )}
          <div className="mt-1 text-text-secondary">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col text-left">
          <span className="text-base font-semibold text-text-primary">{profile.name}</span>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            @{username}
          </a>
        </div>

        <p className="mt-2 text-left text-sm leading-relaxed text-text-primary">{profile.bio}</p>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-secondary">
          {profile.location && (
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{profile.location}</span>
            </div>
          )}
          {profile.website && (
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <a href={profile.website.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                {profile.website.display_url}
              </a>
            </div>
          )}
          {profile.joinedDate && (
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span>{profile.joinedDate}</span>
            </div>
          )}
        </div>

        <div className="mt-2 flex gap-4 text-xs text-text-secondary">
          <div className="flex gap-1">
            <span className="font-bold text-text-primary">{formatCount(profile.following)}</span>
            <span>Following</span>
          </div>
          <div className="flex gap-1">
            <span className="font-bold text-text-primary">{formatCount(profile.followers)}</span>
            <span>Followers</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TwitterHoverCard;
