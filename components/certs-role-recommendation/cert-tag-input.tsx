"use client";

// components/certifications/CertTagInput.tsx
// Tag-style input for entering certifications the user already holds.

import { useState } from "react";
import { Input } from "./ui";

interface CertTagInputProps {
  value: string[];
  onChange: (certs: string[]) => void;
}

export function CertTagInput({ value, onChange }: CertTagInputProps) {
  const [draft, setDraft] = useState("");

  function add() {
    const trimmed = draft.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
    }
    setDraft("");
  }

  function remove(cert: string) {
    onChange(value.filter((c) => c !== cert));
  }

  return (
    <div>
      <div className="flex gap-2">
        <Input
          id="existingCerts"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              add();
            }
          }}
          placeholder="e.g. CompTIA A+ — press Enter to add"
        />
        <button
          type="button"
          onClick={add}
          className="px-3 py-2 rounded-lg border border-neutral-200 text-sm font-medium text-secondary-600 hover:bg-neutral-50 transition"
        >
          Add
        </button>
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {value.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {cert}
              <button
                type="button"
                onClick={() => remove(cert)}
                aria-label={`Remove ${cert}`}
                className="hover:text-primary-900 transition"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}