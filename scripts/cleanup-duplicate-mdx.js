// scripts/cleanup-duplicate-mdx.js
// Deletes all page.mdx files in app/blogs/[slug]/[file]/

const fs = require("fs");
const path = require("path");

const appBlogsDir = path.join(process.cwd(), "app", "blogs");

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name === "page.mdx") {
      fs.unlinkSync(fullPath);
      console.log("Deleted:", fullPath);
    }
  }
}

walk(appBlogsDir);
console.log("All duplicate page.mdx files removed.");
