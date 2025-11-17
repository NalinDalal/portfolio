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
      // Remove ALL control characters (0x00-0x1F and 0x7F-0x9F)
      // This includes newlines, tabs, carriage returns within strings
      .replace(/[\x00-\x1F\x7F-\x9F]/g, " ")
      // Replace multiple spaces with single space
      .replace(/\s+/g, " ")
      // Remove zero-width characters
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      // Trim whitespace
      .trim()
      // Ensure no quotes break the JSON (escape them)
      .replace(/"/g, '\\"')
  );
}

/**
 * Validate that the data can be properly serialized to JSON
 * @param {any} data - Data to validate
 * @returns {boolean} - Whether data is valid
 */
function validateJSON(data) {
  try {
    const jsonString = JSON.stringify(data);
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    console.error(" JSON validation failed:", error.message);
    return false;
  }
}

/**
 * Fetch merged PRs from GitHub API
 * @returns {Promise<Array>} - Array of PR objects
 */
async function getMergedPRs() {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Optional: Add token for higher rate limits

  const headers = {
    "User-Agent": "NalinDalal",
    Accept: "application/vnd.github.v3+json",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      "https://api.github.com/search/issues?q=is:pr+is:merged+author:NalinDalal&sort=updated&order=desc&per_page=5",
      { headers },
    );

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("GitHub API request failed:", res.status, res.statusText);
      console.error("Response:", errorBody);
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const data = await res.json();

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error("Unexpected API response format");
    }

    const prs = data.items.map((pr) => ({
      title: sanitizeText(pr.title),
      url: pr.html_url,
      repo: pr.repository_url.split("/").pop(),
      mergedAt: pr.closed_at, // Optional: add merge date
    }));

    return prs;
  } catch (error) {
    console.error(" Error fetching PRs:", error.message);
    throw error;
  }
}

/**
 * Write data to file with validation
 * @param {string} filePath - Path to write to
 * @param {any} data - Data to write
 */
function safeWriteJSON(filePath, data) {
  // Validate before writing
  if (!validateJSON(data)) {
    throw new Error("Data failed JSON validation");
  }

  // Create backup if file exists
  if (fs.existsSync(filePath)) {
    const backupPath = `${filePath}.backup`;
    fs.copyFileSync(filePath, backupPath);
    console.log(` Backup created: ${backupPath}`);
  }

  // Ensure directory exists
  const dataDir = path.dirname(filePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write with proper formatting
  const jsonString = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, jsonString, { encoding: "utf8" });

  // Verify the written file can be parsed
  const writtenData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  console.log(`File written and verified: ${filePath}`);

  return writtenData;
}

/**
 * Main execution function
 */
async function main() {
  try {
    console.log("Fetching latest merged PRs from GitHub...");

    const mergedPRs = await getMergedPRs();

    if (mergedPRs.length === 0) {
      console.warn(" No PRs found");
      return;
    }

    console.log(`Found ${mergedPRs.length} merged PRs`);

    // Display PRs for verification
    mergedPRs.forEach((pr, index) => {
      console.log(`  ${index + 1}. ${pr.title} (${pr.repo})`);
    });

    safeWriteJSON(OUTPUT_PATH, mergedPRs);

    console.log(`\n Successfully updated ${OUTPUT_PATH}`);
    console.log(` Total PRs: ${mergedPRs.length}`);
  } catch (error) {
    console.error("\n Error updating merged PRs:", error.message);
    console.error("Stack trace:", error.stack);
    process.exit(1);
  }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { getMergedPRs, sanitizeText, validateJSON };
