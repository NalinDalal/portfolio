import mergedPRs from "@/data/mergedPRs.json";

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
    startDate: "July 2025",
    endDate: "September 2025",
    company: "Headstarter",
    position: "Software Engineering Fellow",
  },
  {
    startDate: "January 2024",
    endDate: "Present",
    company: "DEBUG (OIST)",
    position: "Open Source Maintainer & Competitive Programmer",
  },
  {
    startDate: "July 2025",
    endDate: "Present",
    company: "p5.js Open Source",
    position: "Contributor & Automation Engineer",
  },
];
