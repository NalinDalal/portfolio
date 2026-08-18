import { GitHubRepository, GitHubPullRequest, GitHubStats } from '@/types/github';

export function getRelevantRepositories(repos: GitHubRepository[]): GitHubRepository[] {
  return repos.filter(repo => repo.stargazersCount > 0);
}

export function calculateGitHubStats(
  repositories: GitHubRepository[],
  pullRequests: GitHubPullRequest[]
): GitHubStats {
  const totalPRs = pullRequests.length;
  const mergedPRs = pullRequests.filter(pr => pr.mergedAt !== null).length;

  return {
    totalPRs,
    mergedPRs
  };
}

