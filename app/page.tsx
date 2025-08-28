"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GitHubRepository, GitHubUser, GitHubStats } from "@/types/github";
import { calculateGitHubStats, getRelevantRepositories } from "@/lib/github";
import { PullRequestCard } from "@/components/PullRequestCard";
import { StatsCard } from "@/components/StatsCard";
import { ProjectTabs } from "@/components/ProjectTabs";
import GithubCal from "@/components/gh-cal";
import { AboutSection } from "@/components/AboutSection";
import { SpaceBackground } from "@/components/SpaceBackground";
import {
  Github,
  Linkedin,
  Twitter,
  MapPin,
  GitPullRequest,
  GitMerge,
  Mail,
} from "lucide-react";

export default function Home() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [pullRequests, setPullRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch local data");
        const { user, repositories, pullRequests } = await res.json();
        setUser(user);
        const relevantRepos = getRelevantRepositories(repositories);
        setRepositories(relevantRepos);
        setStats(calculateGitHubStats(repositories, []));
        setPullRequests(pullRequests.items || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-400 mx-auto mb-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <SpaceBackground />
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8 rounded-2xl border-2 border-slate-700 bg-slate-800/80 backdrop-blur-xl shadow-lg p-8 max-w-2xl mx-auto">
            <Image
              src={user?.avatar_url || "/default-avatar.png"}
              alt={user?.name || "Profile"}
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-400 shadow-lg"
            />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-green-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
              <span className="text-slate-200">
                {user?.name || "Nalin Dalal"}
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-2 drop-shadow">Engineer</p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-2 drop-shadow">
              {user?.bio || "I like to build stuff"}
            </p>
            {user?.location && (
              <div className="flex items-center justify-center gap-2 mt-4 text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <AboutSection />
        </section>

        {/* GitHub Contribution Graph */}
        <section className="mb-16">
          <GithubCal />
        </section>

        {/* Stats Section */}
        {stats && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-200 mb-8 text-center">
              GitHub Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatsCard
                title="Pull Requests"
                value={stats.totalPRs}
                icon={GitPullRequest}
                description="Total contributions"
              />
              <StatsCard
                title="Merged PRs"
                value={stats.mergedPRs}
                icon={GitMerge}
                description="Successful merges"
              />
            </div>
          </section>
        )}

        {/* Featured Projects */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-200 drop-shadow-lg">
              Featured Projects
            </h2>
          </div>
          {repositories && repositories.length > 0 ? (
            <ProjectTabs repositories={repositories} />
          ) : (
            <p className="text-slate-400 text-center py-8">
              No featured projects found.
            </p>
          )}
        </section>

        {/* Pull Requests Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-200 drop-shadow-lg mb-8">
            Recent Pull Requests
          </h2>
          {pullRequests && pullRequests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pullRequests.slice(0, 6).map((pr) => (
                <PullRequestCard key={pr.id || pr.number} pullRequest={pr} />
              ))}
            </div>
          ) : (
            <p className="text-slate-400 text-center py-8">
              No pull requests found.
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/40 bg-sargam-card-bg/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-slate-400 mb-4">
            © 2025 Nalin Dalal. Built with Next.js and Tailwind CSS.
          </p>
          <p className="text-slate-500 text-sm">
            Data automatically updated daily via GitHub Actions.
          </p>
        </div>
      </footer>
    </div>
  );
}
