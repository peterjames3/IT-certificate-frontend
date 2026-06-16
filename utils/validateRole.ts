// utils/validateRole.ts
// Guards free-text role input before it reaches the backend.

// ── Blocked patterns ──────────────────────────────────────────────────────────
// Reject anything that obviously isn't an IT/tech role.

const BLOCKED_PATTERNS = [
  /\d{4}/,                    // years  e.g. "Worldcup 2026"
  /world\s*cup/i,
  /baby\s*sit/i,
  /cook|chef|baker/i,
  /driver|delivery/i,
  /football|soccer|cricket|rugby/i,
  /actor|actress|model/i,
  /[<>{};=]/,                 // injection chars
];

// ── IT signal words ───────────────────────────────────────────────────────────
// Input must contain at least one of these (or pass the allowlist check).
// Keeps "Banking Sector" and "Worldcup" out while letting
// "Cloud Engineer", "AI Red Teamer", "OT Security Analyst" through.

const IT_SIGNALS = [
  "analyst", "engineer", "architect", "developer", "administrator",
  "specialist", "consultant", "manager", "officer", "tester",
  "security", "network", "cloud", "devops", "devsecops", "sre",
  "forensic", "malware", "threat", "incident", "compliance", "grc",
  "penetration", "pentest", "red team", "blue team", "soc", "noc",
  "infrastructure", "linux", "windows", "cyber", "infosec", "iot",
  "ot", "scada", "ai", "ml", "data", "database", "dba", "web",
  "mobile", "embedded", "firmware", "reverse engineer", "exploit",
  "vulnerabilit", "risk", "audit", "identity", "iam", "siem",
  "endpoint", "firewall", "zero trust", "kubernetes", "docker",
  "terraform", "ansible", "python", "java", "support", "helpdesk",
  "help desk", "it ", "information technology",
];

export interface ValidationResult {
  valid: boolean;
  error?: string;
  sanitised?: string;
}

export function validateRole(raw: string): ValidationResult {
  // 1. Basic sanity
  const trimmed = raw.trim();
  if (!trimmed) {
    return { valid: false, error: "Please enter a role." };
  }
  if (trimmed.length < 3) {
    return { valid: false, error: "Role name is too short." };
  }
  if (trimmed.length > 60) {
    return { valid: false, error: "Role name is too long." };
  }

  // 2. Block obvious non-IT / injection
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(trimmed)) {
      return { valid: false, error: "Please enter a valid IT role." };
    }
  }

  // 3. Must contain at least one IT signal word
  const lower = trimmed.toLowerCase();
  const hasSignal = IT_SIGNALS.some((s) => lower.includes(s));
  if (!hasSignal) {
    return {
      valid: false,
      error: "Doesn't look like an IT role. Try something like 'Cloud Engineer' or 'SOC Analyst'.",
    };
  }

  // 4. Sanitise — strip anything that isn't letters, spaces, hyphens, slashes, &
  const sanitised = trimmed.replace(/[^a-zA-Z0-9\s\-\/&+#.()]/g, "").trim();

  return { valid: true, sanitised };
}