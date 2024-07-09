import React, { useEffect, useRef } from "react";

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
        window.GitHubCalendar(calendarRef.current, username);
        // or enable responsive functionality
        // @ts-ignore
        window.GitHubCalendar(calendarRef.current, username, {
          responsive: true,
        });
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
    <div className="github-calendar-container">
      <div ref={calendarRef} className="calendar">
        Loading the data just for you...
      </div>
    </div>
  ); // This component doesn't render anything visible
};

export default GitHubCalendar;
//find a way to utilise this into main app.tsx
