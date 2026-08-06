// lib/compareSlugs.ts

/**
 * Popular cert comparison pairs — these get statically generated at build
 * time via generateStaticParams, so they're instantly indexable and fast.
 * Add more pairs here as you discover what people search for
 * (check Search Console "queries" once the site has traffic).
 */
export const POPULAR_COMPARISONS: Array<[string, string]> = [
  ["cissp", "ccsp"],
  ["comptia-security-plus", "ccna"],
  ["comptia-security-plus", "cissp"],
  ["comptia-security-plus", "comptia-cysa-plus"],
  ["cissp", "cism"],
  ["aws-solutions-architect-associate", "az-104"],
  ["aws-security-specialty", "az-500"],
  ["comptia-pentest-plus", "oscp"],
  ["ceh", "oscp"],
  ["comptia-network-plus", "ccna"],
  ["cisa", "cism"],
  ["cka", "cks"],
  ["google-ace", "aws-cloud-practitioner"],
  ["comptia-a-plus", "comptia-network-plus"],
  ["gcih", "comptia-cysa-plus"],
  ["itil", "cobit", "iso-20000"],
  ["itil", "pmp", "cgeit"],
  ["itil-v4", "itil-v3"],
];

/** "cissp" + "ccsp" → "cissp-vs-ccsp" (alphabetically sorted for a stable canonical URL) */
export function buildCompareSlug(certs: string[]): string {
  return [...certs].sort().join("-vs-");
}

/** "cissp-vs-ccsp" → ["cissp", "ccsp"] */
export function parseCompareSlug(slug: string): string[] {
  return slug.split("-vs-").filter(Boolean);
}

/** Turns a slug like "comptia-security-plus" into "CompTIA Security Plus" for display fallback */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
