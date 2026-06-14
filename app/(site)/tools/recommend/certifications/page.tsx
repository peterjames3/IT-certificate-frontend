"use client";
import { useState } from "react";
import { useRecommendationsMutation } from "@/hooks/useRecommendations";
import type { RecommendCertificationsRequest } from "@/types/api.types";
import { RecommendForm, RecommendResults } from "@/components/certs-role-recommendation";
import { validateRecommendForm } from "@/utils/validateRecommendForm";
import type { FormErrors } from "@/utils/validateRecommendForm";

const INITIAL_FORM: RecommendCertificationsRequest = {
  currentRole: "",
  targetRole: "",
  experienceYears: 0,
  budget: 500,
  existingCerts: [],
};

export default function RecommendCertificationsPage() {
  const [form, setForm] = useState<RecommendCertificationsRequest>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});

  const { mutate, data, isPending, error, reset } = useRecommendationsMutation();

  function handleChange<K extends keyof RecommendCertificationsRequest>(
    key: K,
    value: RecommendCertificationsRequest[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateRecommendForm(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    mutate(form);
  }

  function handleReset() {
    setForm(INITIAL_FORM);
    setErrors({});
    reset();
  }

  return (
    <div className="space-y-10">
      <RecommendForm
        form={form}
        errors={errors}
        isPending={isPending}
        hasResults={Boolean(data)}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          <strong className="font-semibold">Something went wrong.</strong>{" "}
          {(error as Error).message ?? "Failed to generate recommendations. Please try again."}
        </div>
      )}

      {data && <RecommendResults result={data} budget={form.budget} />}

      {!data && !isPending && !error && (
        <div className="text-center py-16 text-secondary-400">
          <div className="text-4xl mb-3">🎯</div>
          <p className="text-sm">
            Fill in your details above to generate a personalised certification roadmap.
          </p>
        </div>
      )}
    </div>
  );
}