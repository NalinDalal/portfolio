"use client";

import { useState } from "react";
import { GitHubRepository } from "@/types/github";
import { EnhancedProjectCard } from "./EnhancedProjectCard";

interface ProjectTabsProps {
  repositories: GitHubRepository[];
}

type TabType = "all" | "fullstack" | "challenges" | "tools" | "languages";

export function ProjectTabs({ repositories }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filterRepositories = (tab: TabType): GitHubRepository[] => {
    switch (tab) {
      case "fullstack":
        return repositories.filter((repo) =>
          repo.topics?.some((topic) =>
            [
              "full-stack",
              "fullstack",
              "web-development",
              "frontend",
              "backend",
              "nextjs",
              "react",
            ].includes(topic.toLowerCase()),
          ),
        );
      case "challenges":
        return repositories.filter((repo) =>
          repo.topics?.some((topic) =>
            [
              "challenge",
              "coding-challenge",
              "leetcode",
              "codeforces",
              "competitive-programming",
              "algorithm",
            ].includes(topic.toLowerCase()),
          ),
        );
      case "tools":
        return repositories.filter((repo) =>
          repo.topics?.some((topic) =>
            [
              "cli-tool",
              "tool",
              "utility",
              "automation",
              "script",
              "cli",
            ].includes(topic.toLowerCase()),
          ),
        );
      case "languages":
        return repositories.filter((repo) =>
          repo.topics?.some((topic) =>
            [
              "rust",
              "go",
              "python",
              "cpp",
              "c++",
              "javascript",
              "typescript",
              "java",
            ].includes(topic.toLowerCase()),
          ),
        );
      default:
        return repositories;
    }
  };

  const filteredRepos = filterRepositories(activeTab);

  const tabs = [
    { id: "all" as TabType, label: "All Projects", count: repositories.length },
    {
      id: "fullstack" as TabType,
      label: "Full Stack",
      count: filterRepositories("fullstack").length,
    },
    {
      id: "challenges" as TabType,
      label: "Challenges",
      count: filterRepositories("challenges").length,
    },
    {
      id: "tools" as TabType,
      label: "Tools",
      count: filterRepositories("tools").length,
    },
    {
      id: "languages" as TabType,
      label: "Languages",
      count: filterRepositories("languages").length,
    },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-white text-black shadow-lg"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Project Grid */}
      {filteredRepos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.slice(0, 9).map((repo, index) => (
            <EnhancedProjectCard
              key={repo.id}
              repository={repo}
              colorIndex={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">
            No projects found in this category.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Try selecting a different tab.
          </p>
        </div>
      )}
    </div>
  );
}
