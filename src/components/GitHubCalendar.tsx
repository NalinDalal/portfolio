import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

const GitHubCalendar: React.FC = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const username = "nalindalal";
    // Include the library
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Optionally, include the theme
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css";
    document.head.appendChild(link);

    // Execute GitHubCalendar function
    const GitHubCalendarFunction = () => {
      if (
        typeof window !== "undefined" && //@ts-ignore
        typeof window.GitHubCalendar === "function" //@ts-ignore
      ) {
        //@ts-ignore
        window.GitHubCalendar(calendarRef.current, username, {
          reponsive: true,
        });
        // or enable responsive functionality
      }
    };

    // Call the function after the script is loaded
    script.onload = GitHubCalendarFunction;

    // Clean up
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          GitHub Stats
        </h2>
        <div className="flex justify-center space-x-4">
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=nalindalal&show_icons=true&theme=dark"
              alt="GitHub Stats"
              className="w-64"
            />
          </div>
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=nalindalal&layout=compact&theme=dark"
              alt="Top Languages"
              className="w-64"
            />
          </div>
        </div>
      </div>

      <div className="github-calendar-container mb-8">
        <div ref={calendarRef} className="calendar">
          Loading GitHub contributions...
        </div>
      </div>

      <div className="text-center">
        <ReactMarkdown>
          ![GitHub
          Trophy](https://github-profile-trophy.vercel.app/?username=nalindalal)
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default GitHubCalendar;
