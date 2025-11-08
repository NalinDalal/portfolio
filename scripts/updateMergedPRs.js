// scripts/updateMergedPRs.js
import fs from "fs";
import path from "path";

const OUTPUT_PATH = path.join(process.cwd(), "data", "mergedPRs.json");

/**
 * Sanitize text to ensure it's safe for JSON and display
 * @param {string} text - The text to sanitize
 * @returns {string} - Sanitized text
 */
function sanitizeText(text) {
  if (!text) return "";

  return (
    text
      // Remove or replace backticks
      .replace(/`/g, "'")
      // Remove other problematic characters
      .replace(/[\x00-\x1F\x7F-\x9F]/g, "") // Control characters
      // Trim whitespace
      .trim()
  );
}

async function getMergedPRs() {
  const res = await fetch(
    "https://api.github.com/search/issues?q=is:pr+is:merged+author:NalinDalal&sort=updated&order=desc&per_page=5",
    {
      headers: {
        "User-Agent": "NalinDalal",
        Accept: "application/vnd.github.v3+json",
      },
    },
  );

  if (!res.ok) {
    console.error("❌ GitHub API request failed:", res.status, res.statusText);
    process.exit(1);
  }

  const data = await res.json();

  const prs = data.items.map((pr) => ({
    title: sanitizeText(pr.title),
    url: pr.html_url,
    repo: pr.repository_url.split("/").pop(),
  }));

  return prs;
}

async function main() {
  try {
    console.log("Fetching latest merged PRs...");
    const mergedPRs = await getMergedPRs();

    // Ensure the data directory exists
    const dataDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(mergedPRs, null, 2));
    console.log(`✅ Updated ${OUTPUT_PATH} with ${mergedPRs.length} PRs`);
  } catch (error) {
    console.error("❌ Error updating merged PRs:", error);
    process.exit(1);
  }
}

main();
