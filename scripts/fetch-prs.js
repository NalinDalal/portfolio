// scripts/fetch-prs.js
// Fetch PRs from GitHub API and save to data/pull_requests.json

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = "NalinDalal";
const REPO = "portfolio";
const PRS_FILE = path.join(__dirname, "../data/pull_requests.json");

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
  fs.mkdirSync(path.dirname(PRS_FILE), { recursive: true });
  fs.writeFileSync(PRS_FILE, JSON.stringify(data, null, 2));
  console.log("Saved PRs to", PRS_FILE);
}

fetchPRs().catch((err) => {
  console.error(err);
  process.exit(1);
});
