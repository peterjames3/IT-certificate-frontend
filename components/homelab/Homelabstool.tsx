"use client";
// components/homelab/HomelabsTool.tsx
import { useState } from "react";
import { useHomelabsMutation } from "@/hooks/useHomelabs";

import HomelabForm from "@/components/homelab/homelab-form";
import HomelabResults from "@/components/homelab/homelab-results";

import type {
  HomelabRecommendRequest,
  HomelabRecommendationResult,
} from "@/types/api.types";

export default function HomelabsTool() {
  const [result, setResult] = useState<HomelabRecommendationResult | null>(
    null
  );

  const { mutateAsync, isPending, error } = useHomelabsMutation();

  async function handleSubmit(payload: HomelabRecommendRequest) {
    const data = await mutateAsync(payload);
    setResult(data);
  }

  return (
    <div className="space-y-8">
      <HomelabForm onSubmit={handleSubmit} isLoading={isPending} />

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Failed to generate homelab recommendations.
        </div>
      )}

      {result && <HomelabResults result={result} />}
    </div>
  );
}