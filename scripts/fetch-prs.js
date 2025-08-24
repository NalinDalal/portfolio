// scripts/fetch-github-data.js
// Fetch both PRs and repositories from GitHub API and save to data/

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = "NalinDalal";
const PRS_FILE = path.join(__dirname, "../data/pull_requests.json");
const REPOS_FILE = path.join(__dirname, "../data/repositories.json");

async function fetchPRs() {
  const url = `https://api.github.com/search/issues?q=author:${USERNAME}+type:pr&per_page=100`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "User-Agent": USERNAME,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch PRs: " + res.statusText);
  const data = await res.json();
  const prArray = Array.isArray(data.items) ? data.items : [];
  fs.mkdirSync(path.dirname(PRS_FILE), { recursive: true });
  fs.writeFileSync(PRS_FILE, JSON.stringify(prArray, null, 2));
  console.log("Saved PRs to", PRS_FILE);
}

async function fetchRepos() {
  let repos = [];
  let page = 1;
  let hasNext = true;
  while (hasNext) {
    const url = `https://api.github.com/users/${USERNAME}/repos?per_page=100&page=${page}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": USERNAME,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch repos: " + res.statusText);
    const data = await res.json();
    repos = repos.concat(data);
    hasNext = data.length === 100;
    page++;
  }
  fs.mkdirSync(path.dirname(REPOS_FILE), { recursive: true });
  fs.writeFileSync(REPOS_FILE, JSON.stringify(repos, null, 2));
  console.log("Saved repos to", REPOS_FILE);
}

async function main() {
  try {
    await fetchPRs();
    await fetchRepos();
    console.log("Fetched all PRs and repositories.");
  } catch (err) {
    console.error("Error fetching data:", err);
    process.exit(1);
  }
}

main();
