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
            "Contributed to 5+ open-source repositories across frontend and backend; improved CI/CD pipelines and issue templates, reducing average issue resolution time from ~5 days to ~3 days",
            "Built reusable UI components adopted by 3 projects; standardized common patterns that cut boilerplate for new features by roughly a third",
        ],
    },
    {
        startDate: "Aug 2024",
        endDate: "Oct 2024",
        company: "Headstarter",
        position: "Software Engineer Fellow",
        highlights: [
            "Developed 2 full-stack applications serving 500+ users; delivered features in 2-week sprint cycles using React, Node.js, and PostgreSQL",
            "Optimized API response times by adding query-level caching and rewriting N+1 queries; reduced average p95 latency from ~800ms to ~320ms",
        ],
    },
    {
        startDate: "July 2024",
        endDate: "Jun 2026",
        company: "DEBUG (OIST)",
        position: "Open Source Maintainer",
        highlights: [
            "Manage 4 GitHub repositories and onboarded 25+ student contributors; grew active contributor count from 3 to 28 in 6 months through structured onboarding and mentorship",
            "Built and deployed 3 campus-wide Next.js applications used by 2,000+ students for event management and resource booking",
        ],
    },
];
