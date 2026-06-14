import Link from "next/link";
import type { HomelabRecommendationResult } from "@/types/api.types";

type ResultData = HomelabRecommendationResult;

interface Props {
  result: ResultData;
}

export default function HomelabResults({ result }: Props) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="rounded-xl border border-neutral-200 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">{result.role}</h2>

            <p className="text-secondary-500 mt-1">Readiness Score</p>
          </div>

          <div className="text-right">
            <div className="text-4xl font-bold text-primary-500">
              {result.readinessScore}%
            </div>

            <span
              className={`inline-flex rounded-full px-3 py-1 text-sm ${
                result.source === "ai_fallback"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {result.source === "ai_fallback"
                ? "Research-Based Data"
                : "Database-validated Backed"}
            </span>
          </div>
        </div>
      </section>

      {/* Covered Skills */}
      <section className="rounded-xl border border-neutral-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Covered Skills</h3>

        <div className="flex flex-wrap gap-2">
          {result.coveredSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Missing Skills */}
      <section className="rounded-xl border border-neutral-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Missing Skills</h3>

        <div className="flex flex-wrap gap-2">
          {result.missingSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="rounded-xl border border-neutral-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">
          Recommended Certifications
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {result.recommendedCertifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-lg border border-neutral-200 p-4"
            >
              <h4 className="font-semibold">{cert.name}</h4>

              <div className="mt-2 text-sm text-secondary-500">
                Provider: {cert.provider ?? "N/A"}
              </div>

              <div className="text-sm text-secondary-500">
                Level: {cert.level ?? "N/A"}
              </div>

              <div className="mt-3">
                Coverage: <strong>{cert.coveragePercent}%</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="rounded-xl border border-neutral-200 bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Recommended Projects</h3>

        <div className="grid gap-4">
          {result.recommendedProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg border border-neutral-200 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-lg">{project.title}</h4>

                  <div className="mt-2 text-sm text-secondary-500">
                    Difficulty: {project.difficulty}
                  </div>

                  <div className="text-sm text-secondary-500">
                    Estimated Hours: {project.estimatedHours}
                  </div>

                  <div className="text-sm text-secondary-500">
                    Coverage: {project.coveragePercent}%
                  </div>

                  <div className="text-sm text-secondary-500">
                    Impact Score: {project.impact}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="text-primary-600 hover:underline"
                  >
                    GitHub Repository
                  </Link>
                )}

                {project.documentationUrl && (
                  <Link
                    href={project.documentationUrl}
                    target="_blank"
                    className="text-primary-600 hover:underline"
                  >
                    Documentation
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
