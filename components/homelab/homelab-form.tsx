"use client";

import { useState } from "react";
import type { HomelabRecommendRequest } from "@/types/api.types";

interface HomelabFormProps {
  onSubmit: (payload: HomelabRecommendRequest) => void;
  isLoading?: boolean;
}

export default function HomelabForm({ onSubmit, isLoading }: HomelabFormProps) {
  const [targetRole, setTargetRole] = useState("");
  const [skillsInput, setSkillsInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!targetRole.trim()) return;

    const currentSkills = skillsInput
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    onSubmit({
      targetRole,
      currentSkills,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-secondary-700"
          >
            Target Role
          </label>

          <input
            id="role"
            type="text"
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            placeholder="SOC Analyst"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div>
          <label
            htmlFor="skills"
            className="block mb-2 text-sm font-medium text-secondary-700"
          >
            Current Skills
          </label>

          <input
            id="skills"
            type="text"
            value={skillsInput}
            onChange={(e) => setSkillsInput(e.target.value)}
            placeholder="Linux, Networking, Security+"
            className="w-full rounded-lg border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500"
          />

          <p className="mt-2 text-sm text-secondary-500">
            Separate skills with commas.
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-lg bg-primary-500 px-5 py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Generating Recommendations..." : "Generate Homelabs"}
        </button>
      </div>
    </form>
  );
}
