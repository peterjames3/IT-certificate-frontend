"use client";
// components/certifications/CompareTool.tsx
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftRight, Plus, X } from "lucide-react";
import CertSearchInput from "./cert-search-input";
import { buildCompareSlug } from "@/lib/compareSlugs";

interface CertSlot {
  slug: string;
  label: string;
}

const EMPTY_SLOT: CertSlot = { slug: "", label: "" };

export default function CompareTool() {
  const router = useRouter();
  const [slots, setSlots] = useState<CertSlot[]>([
    { ...EMPTY_SLOT },
    { ...EMPTY_SLOT },
  ]);

  const canCompare = slots.filter((s) => s.slug).length >= 2;
  const canAddSlot = slots.length < 3;

  function handleChange(index: number, slug: string, label: string) {
    setSlots((prev) => {
      const next = [...prev];
      next[index] = { slug, label };
      return next;
    });
  }

  function handleClear(index: number) {
    setSlots((prev) => {
      const next = [...prev];
      next[index] = { ...EMPTY_SLOT };
      return next;
    });
  }

  function handleAddSlot() {
    if (canAddSlot) setSlots((prev) => [...prev, { ...EMPTY_SLOT }]);
  }

  function handleRemoveSlot() {
    setSlots((prev) => prev.slice(0, -1));
  }

  function handleCompare() {
    const slugs = slots.map((s) => s.slug).filter(Boolean);
    if (slugs.length < 2) return;
    // Navigate to the crawlable, server-rendered comparison page.
    // The server pre-fetches the data, so this lands with full content
    // already in the HTML — and the URL itself becomes indexable by Google.
    router.push(`/it-certificate-tools/compare/${buildCompareSlug(slugs)}`);
  }

  return (
    <div>
      {/* Input card */}
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {slots.map((slot, i) => (
            <CertSearchInput
              key={i}
              index={i}
              value={slot.slug}
              label={slot.label}
              onChange={(slug, label) => handleChange(i, slug, label)}
              onClear={() => handleClear(i)}
              placeholder={
                i === 0
                  ? "e.g. CompTIA Security+"
                  : i === 1
                    ? "e.g. CISSP"
                    : "e.g. AWS Security Specialty"
              }
            />
          ))}
        </div>

        {/* Actions row */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <button
            onClick={handleCompare}
            disabled={!canCompare}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeftRight className="w-4 h-4" />
            Compare
          </button>

          {canAddSlot && (
            <button
              onClick={handleAddSlot}
              className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-dashed border-neutral-300 text-secondary-500 text-sm hover:border-primary-400 hover:text-primary-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add 3rd cert
            </button>
          )}

          {slots.length === 3 && (
            <button
              onClick={handleRemoveSlot}
              className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-neutral-200 text-secondary-400 text-sm hover:border-red-300 hover:text-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
              Remove 3rd cert
            </button>
          )}
        </div>

        {!canCompare && (
          <p className="text-xs text-secondary-400 mt-3">
            Select at least 2 certifications to compare.
          </p>
        )}
      </div>
    </div>
  );
}
