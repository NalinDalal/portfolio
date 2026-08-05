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
}

export const experiences: WorkExperience[] = [
  {
    startDate: "May 2024",
    endDate: "Oct 2024",
    company: "GSSoC",
    position: "Open Source Contributor",
  },
  {
    startDate: "Aug 2024",
    endDate: "Oct 2024",
    company: "Headstarter",
    position: "Software Engineer Fellow",
  },
  {
    startDate: "July 2024",
    endDate: "Present",
    company: "DEBUG (OIST)",
    position: "Open Source Maintainer",
  },
];
