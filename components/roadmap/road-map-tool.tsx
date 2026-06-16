"use client";
// components/roadmap/road-map-tool.tsx

import { useState, useRef } from "react";
import { Map, Loader2, AlertCircle, X } from "lucide-react";
import { useRoadmap } from "@/hooks/useRoadmap";
import RoadmapResults from "./road-map-results";
import { validateRole } from "@/utils/validateRole";
import type { Roadmap } from "@/types/api.types";

// ── Popular roles (allowlist — never validated, always accepted) ───────────────

export const POPULAR_ROLES = [
  "SOC Analyst",
  "Cloud Security Engineer",
  "Penetration Tester",
  "DevSecOps Engineer",
  "GRC Analyst",
  "Network Engineer",
  "Cloud Architect",
  "Malware Analyst",
  "Threat Intelligence Analyst",
  "Digital Forensics Analyst",
] as const;

export type AllowedRole = (typeof POPULAR_ROLES)[number];

function toSlug(role: string) {
  return role.toLowerCase().trim().replace(/\s+/g, "-");
}

// ── Rate limit — max 1 new request per 3 seconds ──────────────────────────────

function useRateLimit(ms = 3000) {
  const lastRef = useRef<number>(0);
  return () => {
    const now = Date.now();
    if (now - lastRef.current < ms) return false;
    lastRef.current = now;
    return true;
  };
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface RoadmapToolProps {
  initialData: Roadmap | null;
  initialRole: AllowedRole;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function RoadmapTool({
  initialData,
  initialRole,
}: RoadmapToolProps) {
  const [input, setInput] = useState("");
  const [queriedRole, setQueriedRole] = useState(toSlug(initialRole));
  const [validationError, setValidationError] = useState<string | null>(null);

  const canSubmit = useRateLimit(3000);

  const { data, isLoading, isFetching, error } = useRoadmap(
    queriedRole,
    toSlug(initialRole),
    initialData,
  );

  const busy = isLoading || isFetching;

  // ── Handlers ───────────────────────────────────────────────────────────────

  function selectPopularRole(role: AllowedRole) {
    // Popular roles bypass validation — they're trusted by definition
    setInput("");
    setValidationError(null);
    setQueriedRole(toSlug(role));
  }

  function handleFreeTextSubmit() {
    setValidationError(null);

    if (!canSubmit()) {
      setValidationError("Please wait a moment before searching again.");
      return;
    }

    const result = validateRole(input);
    if (!result.valid) {
      setValidationError(result.error ?? "Invalid role.");
      return;
    }

    setQueriedRole(toSlug(result.sanitised!));
  }

  function handleReset() {
    setInput("");
    setValidationError(null);
    setQueriedRole(toSlug(initialRole));
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  const activePopular = POPULAR_ROLES.find((r) => toSlug(r) === queriedRole);

  return (
    <div>
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
        {/* Free-text input for custom IT roles */}
        <label
          htmlFor="role-input"
          className="block text-sm font-medium text-secondary-700 mb-2"
        >
          Target role
        </label>

        <div className="relative flex gap-3">
          <div className="relative flex-1">
            <input
              id="role-input"
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (validationError) setValidationError(null);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleFreeTextSubmit()}
              placeholder="e.g. OT Security Analyst, AI Red Teamer…"
              maxLength={60}
              className={`w-full border rounded-lg px-4 py-3 text-sm text-secondary-800 placeholder:text-secondary-400 outline-none focus:ring-2 transition-all bg-white pr-10 ${
                validationError
                  ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                  : "border-neutral-200 focus:border-primary-500 focus:ring-primary-100"
              }`}
            />
            {input && (
              <button
                onClick={() => {
                  setInput("");
                  setValidationError(null);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600 transition-colors"
                aria-label="Clear"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={handleFreeTextSubmit}
            disabled={!input.trim() || busy}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
          >
            {busy && !activePopular ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Map className="w-4 h-4" />
            )}
            {busy && !activePopular ? "Generating…" : "Get Roadmap"}
          </button>
        </div>

        {/* Validation error */}
        {validationError && (
          <p className="mt-2 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {validationError}
          </p>
        )}

        {/* Popular roles */}
        <div className="mt-4">
          <p className="text-xs text-secondary-400 mb-2">Popular roles:</p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_ROLES.map((role) => (
              <button
                key={role}
                onClick={() => selectPopularRole(role)}
                disabled={busy}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  activePopular === role
                    ? "bg-primary-500 text-white border-primary-500"
                    : "border-neutral-200 text-secondary-600 hover:border-primary-400 hover:text-primary-600 bg-white"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Reset */}
        {data && !busy && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleReset}
              className="text-sm text-secondary-400 hover:text-secondary-600 transition-colors underline underline-offset-4"
            >
              Start over
            </button>
          </div>
        )}
      </div>

      {/* Loading skeleton */}
      {busy && (
        <div className="mt-10 space-y-4 animate-pulse">
          <div className="h-10 bg-neutral-100 rounded-xl w-1/3" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-neutral-100 rounded-xl" />
            ))}
          </div>
          <div className="h-24 bg-neutral-100 rounded-xl" />
        </div>
      )}

      {/* API error */}
      {error && !busy && (
        <div className="mt-8 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-5">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-700">
              Failed to generate roadmap
            </p>
            <p className="text-sm text-red-600 mt-0.5">
              {error instanceof Error ? error.message : "Please try again."}
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {data && !busy && <RoadmapResults data={data} />}
    </div>
  );
}
