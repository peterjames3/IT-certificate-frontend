"use client";
// components/certifications/RoadmapTool.tsx
import { useState } from "react";
import { Map, Loader2, AlertCircle, X } from "lucide-react";
import { useRoadmap } from "@/hooks/useRoadmap";
import RoadmapResults from "./road-map-results";

const POPULAR_ROLES = [
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
];

export default function RoadmapTool() {
  const [input, setInput]           = useState("");
  const [submittedRole, setSubmittedRole] = useState("");

  const { data, isLoading, isFetching, error } = useRoadmap(submittedRole);

  function handleSubmit(role: string) {
    const trimmed = role.trim();
    if (!trimmed) return;
    setSubmittedRole(trimmed);
  }

  function handleReset() {
    setInput("");
    setSubmittedRole("");
  }

  return (
    <div>
      {/* Input card */}
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
        <label
          htmlFor="role-input"
          className="block text-sm font-medium text-secondary-700 mb-2"
        >
          Target role
        </label>

        {/* Search input */}
        <div className="relative flex gap-3">
          <div className="relative flex-1">
            <input
              id="role-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(input)}
              placeholder="e.g. SOC Analyst, Cloud Security Engineer..."
              className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-secondary-800 placeholder:text-secondary-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all bg-white pr-10"
            />
            {input && (
              <button
                onClick={() => setInput("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600 transition-colors"
                aria-label="Clear"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => handleSubmit(input)}
            disabled={!input.trim() || isLoading || isFetching}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
          >
            {isLoading || isFetching ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Map className="w-4 h-4" />
            )}
            {isLoading || isFetching ? "Generating..." : "Get Roadmap"}
          </button>
        </div>

        {/* Popular roles */}
        <div className="mt-4">
          <p className="text-xs text-secondary-400 mb-2">Popular roles:</p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_ROLES.map((role) => (
              <button
                key={role}
                onClick={() => {
                  setInput(role);
                  handleSubmit(role);
                }}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  submittedRole === role
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
        {data && !isLoading && (
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
      {(isLoading || isFetching) && (
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

      {/* Error */}
      {error && !isLoading && (
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
      {data && !isLoading && !isFetching && (
        <RoadmapResults data={data!} />
      )}
    </div>
  );
}