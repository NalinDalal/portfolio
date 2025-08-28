"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubContributionGraphProps {
  username: string;
  className?: string;
}

export function GitHubContributionGraph({
  username,
  className = "",
}: GitHubContributionGraphProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    // Generate mock contribution data for demonstration
    // In a real implementation, you would fetch this from GitHub's API
    const generateMockData = () => {
      const data: ContributionDay[] = [];
      const today = new Date();
      const oneYearAgo = new Date(
        today.getFullYear() - 1,
        today.getMonth(),
        today.getDate(),
      );

      let total = 0;
      for (
        let d = new Date(oneYearAgo);
        d <= today;
        d.setDate(d.getDate() + 1)
      ) {
        const count = Math.floor(Math.random() * 8); // 0-7 contributions per day
        const level = count === 0 ? 0 : Math.min(Math.floor(count / 2) + 1, 4);

        data.push({
          date: new Date(d).toISOString().split("T")[0],
          count,
          level,
        });

        total += count;
      }

      setContributions(data);
      setTotalContributions(total);
      setLoading(false);
    };

    generateMockData();
  }, [username]);

  const getColorClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-slate-900 border border-slate-800";
      case 1:
        return "bg-slate-800 border border-slate-700";
      case 2:
        return "bg-slate-700 border border-slate-600";
      case 3:
        return "bg-slate-500 border border-slate-400";
      case 4:
        return "bg-white border border-slate-300";
      default:
        return "bg-slate-900 border border-slate-800";
    }
  };

  const getMonthLabels = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const today = new Date();
    const labels = [];

    for (let i = 0; i < 12; i++) {
      const monthIndex = (today.getMonth() - 11 + i + 12) % 12;
      labels.push(months[monthIndex]);
    }

    return labels;
  };

  const getDayLabels = () => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (loading) {
    return (
      <div
        className={`p-6 rounded-2xl border-2 border-purple-500/60 bg-slate-900/80 backdrop-blur-xl shadow-lg ${className}`}
      >
        <div className="animate-pulse">
          <div className="h-4 bg-purple-900/40 rounded w-48 mb-4"></div>
          <div className="grid grid-cols-53 gap-1">
            {Array.from({ length: 371 }).map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-slate-800 rounded-sm border border-slate-700"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Group contributions by weeks
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];

  contributions.forEach((day, index) => {
    const dayOfWeek = new Date(day.date).getDay();

    if (index === 0) {
      // Fill empty days at the beginning of the first week
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push({ date: "", count: 0, level: 0 });
      }
    }

    currentWeek.push(day);

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  // Add remaining days to the last week
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push({ date: "", count: 0, level: 0 });
    }
    weeks.push(currentWeek);
  }

  return (
    <div
      className={`p-6 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl shadow-lg ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white mb-2">Proof of Work</h3>
        <p className="text-slate-400 text-sm">
          All the work I have done so far in public &amp;&amp; people&apos;s
          appreciation
        </p>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-300 font-mono">
            {totalContributions} contributions in the last year
          </span>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getColorClass(level)}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {/* Day labels */}
          <div className="flex flex-col gap-1 mr-2">
            <div className="h-3"></div> {/* Spacer for month labels */}
            {getDayLabels().map((day, index) => (
              <div
                key={day}
                className={`h-3 text-xs text-slate-500 flex items-center ${index % 2 === 0 ? "" : "opacity-0"}`}
              >
                {day}
              </div>
            ))}
          </div>
          {/* Contribution grid */}
          <div className="flex flex-col">
            {/* Month labels */}
            <div className="flex gap-1 mb-1">
              {getMonthLabels().map((month, index) => (
                <div
                  key={`${month}-${index}`}
                  className="text-xs text-slate-500 w-12 text-center"
                  style={{ marginLeft: index === 0 ? "0" : "40px" }}
                >
                  {month}
                </div>
              ))}
            </div>
            {/* Grid */}
            <div className="flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 rounded-sm ${
                        day.date ? getColorClass(day.level) : "bg-transparent"
                      } hover:ring-1 hover:ring-white transition-all cursor-pointer`}
                      title={
                        day.date
                          ? `${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`
                          : ""
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
