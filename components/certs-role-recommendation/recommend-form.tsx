"use client";

// components/certifications/RecommendForm.tsx
// Controlled form for collecting the recommendation request payload.

import type { RecommendCertificationsRequest } from "@/types/api.types";
import { Label, Input, Spinner } from "./ui";
import { CertTagInput } from "./cert-tag-input";

interface RecommendFormProps {
  form: RecommendCertificationsRequest;
  errors: Partial<Record<keyof RecommendCertificationsRequest, string>>;
  isPending: boolean;
  hasResults: boolean;
  onChange: <K extends keyof RecommendCertificationsRequest>(
    key: K,
    value: RecommendCertificationsRequest[K]
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
}

export function RecommendForm({
  form,
  errors,
  isPending,
  hasResults,
  onChange,
  onSubmit,
  onReset,
}: RecommendFormProps) {
  function handleChange(key: keyof RecommendCertificationsRequest) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const value =
        key === "experienceYears" || key === "budget" ? Number(raw) : raw;
      onChange(key, value as RecommendCertificationsRequest[typeof key]);
    };
  }

  return (
    <section className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-secondary-800 mb-1">
        Tell us about your goals
      </h2>
      <p className="text-sm text-secondary-500 mb-6">
        We&apos;ll build a personalised certification path for your career move.
      </p>

      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {/* Current → target role */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="currentRole">Current role</Label>
            <Input
              id="currentRole"
              value={form.currentRole}
              onChange={handleChange("currentRole")}
              placeholder="e.g. Help Desk"
            />
            {errors.currentRole && (
              <p className="mt-1 text-xs text-red-500">{errors.currentRole}</p>
            )}
          </div>

          <div>
            <Label htmlFor="targetRole">Target role</Label>
            <Input
              id="targetRole"
              value={form.targetRole}
              onChange={handleChange("targetRole")}
              placeholder="e.g. SOC Analyst"
            />
            {errors.targetRole && (
              <p className="mt-1 text-xs text-red-500">{errors.targetRole}</p>
            )}
          </div>
        </div>

        {/* Experience + budget */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <Label htmlFor="experienceYears">Years of IT experience</Label>
            <Input
              id="experienceYears"
              type="number"
              min={0}
              step={1}
              value={form.experienceYears}
              onChange={handleChange("experienceYears")}
              placeholder="0"
            />
            {errors.experienceYears && (
              <p className="mt-1 text-xs text-red-500">{errors.experienceYears}</p>
            )}
          </div>

          <div>
            <Label htmlFor="budget">Budget (USD)</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400 text-sm pointer-events-none">
                $
              </span>
              <Input
                id="budget"
                type="number"
                min={1}
                step={50}
                value={form.budget}
                onChange={handleChange("budget")}
                placeholder="500"
                className="pl-7"
              />
            </div>
            {errors.budget && (
              <p className="mt-1 text-xs text-red-500">{errors.budget}</p>
            )}
          </div>
        </div>

        {/* Existing certs */}
        <div>
          <Label htmlFor="existingCerts">
            Certifications you already hold{" "}
            <span className="text-neutral-400 font-normal">(optional)</span>
          </Label>
          <CertTagInput
            value={form.existingCerts ?? []}
            onChange={(certs) => onChange("existingCerts", certs)}
          />
          <p className="mt-1.5 text-xs text-neutral-400">
            These won&apos;t be recommended again.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
          >
            {isPending ? (
              <>
                <Spinner />
                Generating…
              </>
            ) : (
              "Get recommendations"
            )}
          </button>

          {hasResults && (
            <button
              type="button"
              onClick={onReset}
              className="text-sm text-secondary-500 hover:text-secondary-700 underline underline-offset-2 transition"
            >
              Start over
            </button>
          )}
        </div>
      </form>
    </section>
  );
}