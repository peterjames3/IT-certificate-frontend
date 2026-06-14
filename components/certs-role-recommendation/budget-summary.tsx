// components/certifications/BudgetSummary.tsx
// Displays cost vs. budget summary card with animated progress bar.

import type { RecommendationResult } from "@/types/api.types";

interface BudgetSummaryProps {
  result: RecommendationResult;
  budget: number;
}

function BudgetBar({
  totalCost,
  budget,
  withinBudget,
}: {
  totalCost: number;
  budget: number;
  withinBudget: boolean;
}) {
  const pct = Math.min((totalCost / budget) * 100, 100);
  return (
    <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
      <div
        className={`h-2 rounded-full transition-all duration-700 ${
          withinBudget ? "bg-emerald-500" : "bg-amber-500"
        }`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function BudgetSummary({ result, budget }: BudgetSummaryProps) {
  const { totalCost, estimatedDurationMonths, withinBudget, budgetNotes, meta } = result;

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs text-secondary-500 uppercase tracking-wide font-medium mb-0.5">
            Total cost
          </p>
          <p className="text-2xl font-bold text-secondary-800">
            ${totalCost.toLocaleString()}
            <span className="text-sm font-normal text-secondary-400 ml-1">
              / ${budget.toLocaleString()} budget
            </span>
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-secondary-500 uppercase tracking-wide font-medium mb-0.5">
            Study duration
          </p>
          <p className="text-2xl font-bold text-secondary-800">
            {estimatedDurationMonths}
            <span className="text-sm font-normal text-secondary-400 ml-1">months</span>
          </p>
        </div>
      </div>

      <BudgetBar totalCost={totalCost} budget={budget} withinBudget={withinBudget} />

      <p className={`text-sm ${withinBudget ? "text-emerald-700" : "text-amber-700"}`}>
        {budgetNotes}
      </p>

      {meta?.cached && (
        <p className="text-xs text-neutral-400">Served from cache</p>
      )}
    </div>
  );
}