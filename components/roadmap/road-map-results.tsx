"use client";
// components/certifications/RoadmapResults.tsx
import { Clock, DollarSign, CheckCircle, ChevronRight } from "lucide-react";
import type { Roadmap, RoadmapCert } from "@/types/api.types";

interface RoadmapResultsProps {
  data: Roadmap;
}

const PHASE_CONFIG = {
  beginner: {
    label: "Beginner",
    sublabel: "Foundational certs — start here",
    color: "border-primary-400 bg-primary-50",
    badge: "bg-primary-100 text-primary-700",
    number: "bg-primary-500 text-white",
    connector: "bg-primary-300",
  },
  intermediate: {
    label: "Intermediate",
    sublabel: "Job-ready certs",
    color: "border-secondary-400 bg-secondary-50",
    badge: "bg-secondary-100 text-secondary-700",
    number: "bg-secondary-500 text-white",
    connector: "bg-secondary-300",
  },
  advanced: {
    label: "Advanced",
    sublabel: "Senior & specialist certs",
    color: "border-accent-400 bg-accent-50",
    badge: "bg-accent-100 text-accent-700",
    number: "bg-accent-500 text-white",
    connector: "bg-accent-300",
  },
} as const;

function CertCard({
  cert,
  index,
  phaseKey,
}: {
  cert: RoadmapCert;
  index: number;
  phaseKey: keyof typeof PHASE_CONFIG;
}) {
  const config = PHASE_CONFIG[phaseKey];

  return (
    <div className={`rounded-xl border-l-4 ${config.color} p-4 space-y-3`}>
      {/* Number + name */}
      <div className="flex items-start gap-3">
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${config.number}`}
        >
          {index + 1}
        </span>
        <div>
          <h4 className="font-semibold text-secondary-900 text-sm leading-snug">
            {cert.cert}
          </h4>
          <p className="text-xs text-secondary-500 mt-0.5">{cert.vendor}</p>
        </div>
      </div>

      {/* Why */}
      <p className="text-xs text-secondary-600 leading-relaxed pl-9">
        {cert.why}
      </p>

      {/* Cost + time */}
      <div className="flex items-center gap-4 pl-9">
        <span className="flex items-center gap-1 text-xs text-secondary-500">
          <DollarSign className="w-3 h-3" />
          {cert.estimatedCostUSD === 0
            ? "Free"
            : `$${cert.estimatedCostUSD.toLocaleString()}`}
        </span>
        <span className="flex items-center gap-1 text-xs text-secondary-500">
          <Clock className="w-3 h-3" />
          {cert.estimatedMonths}{" "}
          {cert.estimatedMonths === 1 ? "month" : "months"}
        </span>
      </div>
    </div>
  );
}

function Phase({
  phaseKey,
  certs,
}: {
  phaseKey: keyof typeof PHASE_CONFIG;
  certs: RoadmapCert[];
}) {
  const config = PHASE_CONFIG[phaseKey];
  if (!certs.length) return null;

  return (
    <div>
      {/* Phase header */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${config.badge}`}
        >
          {config.label}
        </span>
        <span className="text-xs text-secondary-400">{config.sublabel}</span>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      {/* Cert cards */}
      <div className="space-y-3">
        {certs.map((cert, i) => (
          <CertCard key={i} cert={cert} index={i} phaseKey={phaseKey} />
        ))}
      </div>
    </div>
  );
}

export default function RoadmapResults({ data }: RoadmapResultsProps) {
  const totalCerts =
    data.beginner.length + data.intermediate.length + data.advanced.length;

  return (
    <div className="mt-10 space-y-8">
      {/* Summary bar */}
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <CheckCircle className="w-4 h-4 text-primary-500" />
          <h2 className="font-semibold text-secondary-900 text-base">
            Roadmap for <span className="text-primary-600">{data.role}</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-6">
          <div>
            <p className="text-xs text-secondary-400">Total certifications</p>
            <p className="text-2xl font-bold text-secondary-900">
              {totalCerts}
            </p>
          </div>
          <div>
            <p className="text-xs text-secondary-400">Estimated duration</p>
            <p className="text-2xl font-bold text-secondary-900">
              {data.totalEstimatedMonths}{" "}
              <span className="text-base font-normal text-secondary-500">
                months
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs text-secondary-400">Total exam cost</p>
            <p className="text-2xl font-bold text-secondary-900">
              ${data.totalEstimatedCostUSD.toLocaleString()}
              <span className="text-base font-normal text-secondary-400 ml-1">
                USD
              </span>
            </p>
          </div>

          {/* Phase breakdown */}
          <div className="flex items-center gap-2 ml-auto self-center flex-wrap">
            {(
              [
                ["beginner", data.beginner.length],
                ["intermediate", data.intermediate.length],
                ["advanced", data.advanced.length],
              ] as [keyof typeof PHASE_CONFIG, number][]
            ).map(([phase, count]) => (
              <div key={phase} className="flex items-center gap-1.5">
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${PHASE_CONFIG[phase].badge}`}
                >
                  {PHASE_CONFIG[phase].label}: {count}
                </span>
                {phase !== "advanced" && (
                  <ChevronRight className="w-3 h-3 text-neutral-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phases */}
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 space-y-8">
        <Phase phaseKey="beginner" certs={data.beginner} />
        <Phase phaseKey="intermediate" certs={data.intermediate} />
        <Phase phaseKey="advanced" certs={data.advanced} />
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-secondary-400 text-center pb-4">
        Cost estimates reflect exam fees only — study materials not included.
        Durations are estimates and vary by prior experience.
        {data.meta?.cached && " Results served from cache."}
      </p>
    </div>
  );
}
