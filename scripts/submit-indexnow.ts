#!/usr/bin/env -S npx tsx
/**
 * submit-indexnow.ts
 *
 * Manually submit one or more URLs to IndexNow so search engines
 * (Bing, Yandex, Seznam, Naver, etc.) know your content changed
 * without waiting for a crawl.
 *
 * SETUP (one-time):
 * 1. Put your key below (KEY) — a random hex string.
 * 2. Create the key file in your Next.js `public/` folder so it's
 *    served at https://yourdomain.com/<KEY>.txt
 *      public/540880630efc5bfba81ec084cff2625c.txt
 *      -> file contents = just the key itself, nothing else
 * 3. Set HOST below to your domain (no protocol, no trailing slash).
 *
 * REQUIREMENTS:
 *   pnpm add -D tsx @types/node
 *
 * USAGE:
 *   pnpm indexnow https://example.com/page1 https://example.com/page2
 *   pnpm indexnow --file urls.txt      (one URL per line)
 */
import fs from "fs";

const KEY = "2865424428394ef6ad620b01017c7789";
const HOST = "proctoreditexamhelp.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

interface IndexNowBody {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

function getUrlsFromArgs(args: string[]): string[] {
  if (args[0] === "--file") {
    const filePath = args[1];
    if (!filePath) {
      console.error("Usage: pnpm indexnow --file urls.txt");
      process.exit(1);
    }
    return fs
      .readFileSync(filePath, "utf-8")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  }
  return args;
}

async function submit(urls: string[]): Promise<void> {
  if (urls.length === 0) {
    console.error(
      "No URLs provided.\n\n" +
        "Usage:\n" +
        "  pnpm indexnow https://example.com/page1 https://example.com/page2\n" +
        "  pnpm indexnow --file urls.txt\n"
    );
    process.exit(1);
  }

  // Sanity check: all URLs must belong to HOST, or IndexNow rejects the batch (422)
  const bad = urls.filter((u) => {
    try {
      return new URL(u).hostname.replace(/^www\./, "") !== HOST.replace(/^www\./, "");
    } catch {
      return true;
    }
  });
  if (bad.length) {
    console.error("These URLs don't match HOST and will cause a 422 error:");
    bad.forEach((u) => console.error("  " + u));
    process.exit(1);
  }

  const body: IndexNowBody = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`Status: ${res.status} ${res.statusText}`);
  const messages: Record<number, string> = {
    200: "Submitted successfully.",
    202: "Accepted — key validation pending.",
    400: "Bad request — check your JSON format.",
    403: "Key invalid — check the key file is hosted correctly at " + KEY_LOCATION,
    422: "URLs don't match host, or key doesn't match host schema.",
    429: "Too many requests — you're being rate limited.",
  };
  console.log(messages[res.status] || "Unexpected response.");
  urls.forEach((u) => console.log("  -", u));
}

const args = process.argv.slice(2);
submit(getUrlsFromArgs(args)).catch((err: Error) => {
  console.error("Submission failed:", err.message);
  process.exit(1);
});