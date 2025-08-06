export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export interface GitHubPullRequest {
  id: string;
  number: number;
  title: string;
  html_url: string;
  state: 'open' | 'closed';
  created_at: string;
  merged_at: string | null;
  body: string;
  labels: { name: string; color: string }[];
  base: {
    repo: {
      full_name: string;
    };
  };
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
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
