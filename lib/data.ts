/*export async function getLocalPullRequests() {
  const prsPath = path.join(process.cwd(), "data", "pull_requests.json");
  const prs = JSON.parse(fs.readFileSync(prsPath, "utf8"));
  return prs.items || [];
}
import { GitHubUser, GitHubRepository } from "@/types/github";
import fs from "fs";
import path from "path";

export async function getGitHubData(): Promise<{
  user: GitHubUser;
  repositories: GitHubRepository[];
}> {
  const userPath = path.join(process.cwd(), "data", "user.json");
  const reposPath = path.join(process.cwd(), "data", "repositories.json");
  const user = JSON.parse(fs.readFileSync(userPath, "utf8"));
  const repositories = JSON.parse(fs.readFileSync(reposPath, "utf8"));
  return { user, repositories };
}

export async function getLocalPullRequests() {
  const res = await fetch('/api/data');
  if (!res.ok) throw new Error('Failed to fetch local data');
  const { pullRequests } = await res.json();
  return pullRequests.items || [];
}
import { GitHubUser, GitHubRepository } from '@/types/github';

  user: GitHubUser;
  repositories: GitHubRepository[];
}> {
  const res = await fetch('/api/data');
  if (!res.ok) throw new Error('Failed to fetch local data');
  const { user, repositories } = await res.json();
  return { user, repositories };
}
}
*/
