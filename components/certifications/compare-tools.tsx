"use client";
// components/certifications/CompareTool.tsx
import { useState } from "react";
import { ArrowLeftRight, Plus, X, Loader2, AlertCircle } from "lucide-react";
import { useComparison } from "@/hooks/useComparisons";
import CertSearchInput from "./cert-search-input";
import CompareResults from "./compare-results";

interface CertSlot {
  slug:  string;
  label: string;
}

const EMPTY_SLOT: CertSlot = { slug: "", label: "" };

export default function CompareTool() {
  const [slots, setSlots] = useState<CertSlot[]>([
    { ...EMPTY_SLOT },
    { ...EMPTY_SLOT },
  ]);
  // Submitted slugs — only set when user clicks Compare
  const [submittedSlugs, setSubmittedSlugs] = useState<string[]>([]);

  const validSlugs   = submittedSlugs.filter(Boolean);
  const canCompare   = slots.filter((s) => s.slug).length >= 2;
  const canAddSlot   = slots.length < 3;

  const { data, isLoading, error, isFetching } = useComparison(validSlugs);

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
    // Also remove last submitted slug if present
    setSubmittedSlugs((prev) => prev.slice(0, -1));
  }

  function handleCompare() {
    const slugs = slots.map((s) => s.slug).filter(Boolean);
    setSubmittedSlugs(slugs);
  }

  function handleReset() {
    setSlots([{ ...EMPTY_SLOT }, { ...EMPTY_SLOT }]);
    setSubmittedSlugs([]);
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
          {/* Compare button */}
          <button
            onClick={handleCompare}
            disabled={!canCompare || isLoading || isFetching}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading || isFetching ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ArrowLeftRight className="w-4 h-4" />
            )}
            {isLoading || isFetching ? "Comparing..." : "Compare"}
          </button>

          {/* Add 3rd cert */}
          {canAddSlot && (
            <button
              onClick={handleAddSlot}
              className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-dashed border-neutral-300 text-secondary-500 text-sm hover:border-primary-400 hover:text-primary-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add 3rd cert
            </button>
          )}

          {/* Remove 3rd cert */}
          {slots.length === 3 && (
            <button
              onClick={handleRemoveSlot}
              className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-neutral-200 text-secondary-400 text-sm hover:border-red-300 hover:text-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
              Remove 3rd cert
            </button>
          )}

          {/* Reset */}
          {data && (
            <button
              onClick={handleReset}
              className="ml-auto text-sm text-secondary-400 hover:text-secondary-600 transition-colors underline underline-offset-4"
            >
              Start over
            </button>
          )}
        </div>

        {/* Helper text */}
        {!canCompare && (
          <p className="text-xs text-secondary-400 mt-3">
            Select at least 2 certifications to compare.
          </p>
        )}
      </div>

      {/* Loading skeleton */}
      {(isLoading || isFetching) && (
        <div className="mt-10 animate-pulse space-y-4">
          <div className="h-32 bg-neutral-100 rounded-xl" />
          <div className="h-96 bg-neutral-100 rounded-xl" />
        </div>
      )}

      {/* Error state */}
      {error && !isLoading && (
        <div className="mt-8 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-5">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-700">
              Failed to compare certifications
            </p>
            <p className="text-sm text-red-600 mt-0.5">
              {error instanceof Error ? error.message : "Please try again."}
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {data && !isLoading && !isFetching && (
        <CompareResults data={data} />
      )}
    </div>
  );
}