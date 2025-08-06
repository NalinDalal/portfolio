import { GitHubRepository, GitHubPullRequest, GitHubStats } from '@/types/github';

export function getRelevantRepositories(repos: GitHubRepository[]): GitHubRepository[] {
  return repos.filter(repo => repo.stargazers_count > 0);
}

export function calculateGitHubStats(
  repositories: GitHubRepository[],
  pullRequests: GitHubPullRequest[]
): GitHubStats {
  const totalPRs = pullRequests.length;
  const mergedPRs = pullRequests.filter(pr => pr.merged_at !== null).length;

  return {
    totalPRs,
    mergedPRs
  };
}

