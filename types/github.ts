export interface GitHubRepository {
  id: number;
  name: string;
  htmlUrl: string;
  description: string;
  stargazersCount: number;
  forksCount: number;
  language: string;
  topics: string[];
  createdAt: string;
  updatedAt: string;
}

export interface GitHubPullRequest {
  id: string;
  number: number;
  title: string;
  htmlUrl: string;
  state: 'open' | 'closed';
  createdAt: string;
  mergedAt: string | null;
  body: string;
  labels: { name: string; color: string }[];
  base: {
    repo: {
      fullName: string;
    };
  };
}

export interface GitHubUser {
  login: string;
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
  bio: string;
  name: string;
  location?: string;
}

export interface GitHubStats {
  totalPRs: number;
  mergedPRs: number;
}
