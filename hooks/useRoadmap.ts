// hooks/useRoadmap.ts
import { useQuery } from "@tanstack/react-query";
import { getRoadmap } from "@/services/roadmap.service";
import { queryKeys } from "@/lib/queryKeys";

export function useRoadmap(role: string) {
  return useQuery({
    queryKey: queryKeys.roadmap(role),
    queryFn:  () => getRoadmap(role),
    enabled:  Boolean(role.trim()),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}