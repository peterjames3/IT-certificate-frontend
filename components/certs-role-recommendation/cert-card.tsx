// components/certifications/CertCard.tsx
// Displays a single recommended certification with priority, cost, and reason.

import type { RecommendedCert } from "@/types/api.types";

const PRIORITY_COLOURS: Record<number, string> = {
  1: "bg-primary-100 text-primary-700 border-primary-200",
  2: "bg-violet-50 text-violet-700 border-violet-200",
};

function PriorityBadge({ n }: { n: number }) {
  const cls =
    PRIORITY_COLOURS[n] ?? "bg-neutral-100 text-secondary-600 border-neutral-200";
  return (
    <span
      className={`inline-flex items-center justify-center w-6 h-6 rounded-full border text-xs font-bold flex-shrink-0 ${cls}`}
    >
      {n}
    </span>
  );
}

export function CertCard({ cert }: { cert: RecommendedCert }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
      <div className="mt-0.5">
        <PriorityBadge n={cert.priority} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <div>
            <h4 className="text-sm font-semibold text-secondary-800">{cert.cert}</h4>
            <p className="text-xs text-secondary-400">{cert.vendor}</p>
          </div>

          <div className="text-right flex-shrink-0">
            <p className="text-sm font-bold text-secondary-800">
              ${cert.cost.toLocaleString()}
            </p>
            <p className="text-xs text-secondary-400">
              ~{cert.estimatedStudyMonths} mo. study
            </p>
          </div>
        </div>

        <p className="text-sm text-secondary-600 leading-relaxed">{cert.reason}</p>
      </div>
    </div>
  );
}