// components/certifications/RecommendResults.tsx
// Composes BudgetSummary + the ordered list of CertCards.

import type { RecommendationResult } from "@/types/api.types";
import { BudgetSummary } from "./budget-summary";
import { CertCard } from "./cert-card";

interface RecommendResultsProps {
  result: RecommendationResult;
  budget: number;
}

export function RecommendResults({ result, budget }: RecommendResultsProps) {
  return (
    <section className="space-y-6">
      <BudgetSummary result={result} budget={budget} />

      <div className="space-y-4">
        <h3 className="text-base font-semibold text-secondary-800">
          Your recommended path
        </h3>

        {result.recommendedPath.map((cert) => (
          <CertCard key={cert.cert} cert={cert} />
        ))}
      </div>
    </section>
  );
}
