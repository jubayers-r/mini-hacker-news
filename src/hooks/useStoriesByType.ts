import { useQuery } from "@tanstack/react-query";
import { fetchStoriesByType } from "@/lib/hn-api";
import { SortType } from "@/components/shared/SearchAndSortBar";
import { Story } from "@/lib/hn-api";

export function useStoriesByType(type: SortType = "top", limit = 20) {
  return useQuery<Story[]>({
    queryKey: ["stories", type, limit],
    queryFn: () => fetchStoriesByType(type, limit),

  });
}
