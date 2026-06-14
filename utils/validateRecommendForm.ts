// utils/validateRecommendForm.ts
import type { RecommendCertificationsRequest } from "@/types/api.types";

export type FormErrors = Partial<
  Record<keyof RecommendCertificationsRequest, string>
>;

export function validateRecommendForm(
  form: RecommendCertificationsRequest,
): FormErrors {
  const errors: FormErrors = {};

  if (!form.currentRole.trim()) {
    errors.currentRole = "Current role is required.";
  }
  if (!form.targetRole.trim()) {
    errors.targetRole = "Target role is required.";
  }
  if (form.experienceYears < 0) {
    errors.experienceYears = "Experience must be 0 or more years.";
  }
  if (!form.budget || form.budget <= 0) {
    errors.budget = "Budget must be greater than $0.";
  }

  return errors;
}
