// hooks/useCertifications.ts
import { useQuery } from "@tanstack/react-query";
import { getCertification } from "@/services/certification.service";
import { queryKeys } from "@/lib/queryKeys";

/**
 * Fetches full cert details for a single slug.
 * Pass enabled: false if you don't want it to fire immediately.
 *
 * Usage:
 *   const { data, isLoading, error } = useCertification("comptia-security-plus");
 */
export function useCertification(slug: string) {
  return useQuery({
    queryKey: queryKeys.certification(slug),
    queryFn: () => getCertification(slug),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 60, // 1 hour — cert data rarely changes
  });
}
