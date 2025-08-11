import { GitHubUser, GitHubRepository, GitHubPullRequest } from '@/types/github';

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || ''; // Public-safe token if you want
const headers: HeadersInit = GITHUB_TOKEN
  ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
  : {};

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';
const GITHUB_REST_BASE = 'https://api.github.com';

export async function getGitHubData(): Promise<{
  user: GitHubUser;
  repositories: GitHubRepository[];
  pullRequests: GitHubPullRequest[];
}> {
  const username = 'NalinDalal';

  // 1. Fetch user profile
  const userRes = await fetch(`${GITHUB_REST_BASE}/users/${username}`, { headers });
  if (!userRes.ok) throw new Error('Failed to fetch user data');
  const user = await userRes.json();

  // 2. Fetch repositories
  const reposRes = await fetch(`${GITHUB_REST_BASE}/users/${username}/repos?per_page=100`, {
    headers: {
      ...headers,
      Accept: 'application/vnd.github.mercy-preview+json',
    },
  });
  if (!reposRes.ok) throw new Error('Failed to fetch repositories');
  const repos = await reposRes.json();

  const filteredRepos: GitHubRepository[] = repos
    .filter((r: any) => !r.fork && !r.private)
    .map((r: any) => ({
      id: r.id,
      name: r.name,
      html_url: r.html_url,
      description: r.description,
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      language: r.language,
      topics: r.topics || [],
      updated_at: r.updated_at,
    }));

  // 3. Fetch pull requests via GitHub GraphQL
  const prQuery = `
    query {
      search(query: "author:${username} type:pr", type: ISSUE, first: 20) {
        nodes {
          ... on PullRequest {
            id
            number
            title
            url
            state
            createdAt
            mergedAt
            body
            labels(first: 5) {
              nodes {
                name
                color
              }
            }
            baseRepository {
              nameWithOwner
            }
          }
        }
      }
    }
  `;

  const prRes = await fetch(GITHUB_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: prQuery }),
  });
  if (!prRes.ok) throw new Error('Failed to fetch pull requests');
  const { data } = await prRes.json();

  const pullRequests: GitHubPullRequest[] = data?.search.nodes.map((pr: any) => ({
    id: pr.id,
    number: pr.number,
    title: pr.title,
    html_url: pr.url,
    state: pr.state.toLowerCase(),
    created_at: pr.createdAt,
    merged_at: pr.mergedAt,
    body: pr.body || '',
    labels: pr.labels.nodes,
    base: {
      repo: {
        full_name: pr.baseRepository.nameWithOwner,
      },
    },
  }));

  return {
    user: {
      login: user.login,
      name: user.name,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
      public_repos: user.public_repos,
      followers: user.followers,
      following: user.following,
      bio: user.bio,
      location: user.location,
    },
    repositories: filteredRepos,
    pullRequests,
  };
}

