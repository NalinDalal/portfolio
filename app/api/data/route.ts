import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export const dynamic = "force-static";

export async function GET() {
  const userPath = path.join(process.cwd(), "data", "user.json");
  const reposPath = path.join(process.cwd(), "data", "repositories.json");
  const prsPath = path.join(process.cwd(), "data", "pull_requests.json");

  const user = JSON.parse(fs.readFileSync(userPath, "utf8"));
  const repositories = JSON.parse(fs.readFileSync(reposPath, "utf8"));
  const pullRequests = JSON.parse(fs.readFileSync(prsPath, "utf8"));

  return NextResponse.json({ user, repositories, pullRequests });
}
