interface PR {
  title: string;
  url: string;
  repo: string;
}

import mergedPRsData from "@/data/mergedPRs.json";
const mergedPRs = mergedPRsData as PR[];

export type IconNameType = "pull-request" | "video" | "github";

interface ILink {
  name: string;
  href: string;
  icon?: IconNameType;
  iconClass?: string;
  hidden?: true;
}

// Combine static links with auto-fetched PR links
export const links: ILink[] = [
  ...mergedPRs.map((pr) => ({
    name: `${pr.repo}: ${pr.title}`,
    href: pr.url,
    icon: "pull-request" as const,
  })),
  {
    name: "GitHub",
    href: "https://github.com/NalinDalal",
    icon: "github",
  },
];

interface WorkExperience {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  highlights: string[];
}

export const experiences: WorkExperience[] = [
  {
    startDate: "May 2024",
    endDate: "Oct 2024",
    company: "GSSoC",
    position: "Open Source Contributor",
    highlights: [
      "Contributed to 5+ open-source repositories across frontend and backend, reducing issue resolution time by 30% through improved CI/CD pipelines",
      "Built reusable UI components adopted by 3 projects, cutting development time for new features by ~40%",
    ],
  },
  {
    startDate: "Aug 2024",
    endDate: "Oct 2024",
    company: "Headstarter",
    position: "Software Engineer Fellow",
    highlights: [
      "Developed 2 full-stack applications serving 500+ users, delivering features 2-week sprint cycles using React, Node.js, and PostgreSQL",
      "Optimized API response times by 60% through query optimization and caching, directly improving user retention metrics",
    ],
  },
  {
    startDate: "July 2024",
    endDate: "Present",
    company: "DEBUG (OIST)",
    position: "Open Source Maintainer",
    highlights: [
      "Manage 4 GitHub repositories and onboarded 25+ student contributors, increasing active contributor count from 3 to 28 in 6 months",
      "Built and deployed 3 campus-wide Next.js applications used by 2,000+ students for event management and resource booking",
    ],
  },
];
