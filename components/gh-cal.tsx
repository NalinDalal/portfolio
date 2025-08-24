"use client";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { Activity } from "react-github-calendar";
import "@/app/github-calendar-large.css";
import "@/app/github-calendar-slate.css";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
  loading: () => <div className="h-[159px] w-full" />,
});

export default function GithubCal() {
  const [totalCount, setTotalCount] = useState(0);

  const processContributions = useCallback((contributions: Activity[]) => {
    // Hack to calculate total count after rendering
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  return (
    <div className="p-8 rounded-2xl border border-slate-800 bg-black/70 backdrop-blur-xl shadow-lg flex flex-col items-center justify-center min-w-[400px] max-w-full mx-auto">
      <GitHubCalendar
        username="nalindalal"
        transformData={processContributions}
        totalCount={totalCount}
        colorScheme="dark"
        // className removed, not supported by GitHubCalendar
      />
    </div>
  );
}
