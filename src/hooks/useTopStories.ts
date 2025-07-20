import { useQuery } from "@tanstack/react-query";
import { fetchTopStoryIds, fetchStory } from "@/lib/hn-api";

export function useTopStories(limit = 20) {
  return useQuery({
    queryKey: ["top-stories", limit],
    queryFn: async () => {
      const ids = await fetchTopStoryIds();
      const selected = ids.slice(0, limit);
      const stories = await Promise.all(selected.map(fetchStory));
      return stories;
    },
    staleTime: 1000 * 60, // 1 min
  });
}
