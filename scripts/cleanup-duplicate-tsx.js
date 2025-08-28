// scripts/cleanup-duplicate-tsx.js
// Deletes all page.tsx files in app/blogs/[slug]/[file]/

const fs = require("fs");
const path = require("path");

const appBlogsDir = path.join(process.cwd(), "app", "blogs");

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name === "page.tsx") {
      fs.unlinkSync(fullPath);
      console.log("Deleted:", fullPath);
    }
  }
}

walk(appBlogsDir);
console.log("All duplicate page.tsx files removed.");
