import { SortType } from "@/components/shared/SearchAndSortBar";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export type Story = {
  id: number;
  by: string;
  title: string;
  url?: string;
  score: number;
  time: number;
  descendants?: number;
  text?: string;
  kids?: number[];
  type: "story";
  deleted?: boolean;
  dead?: boolean;
};
// Fetch story IDs by type (top, new, ask, job)
async function fetchStoryIdsByType(type: SortType): Promise<number[]> {
  let endpoint = "";
  switch (type) {
    case "top":
      endpoint = "/topstories.json";
      break;
    case "new":
      endpoint = "/newstories.json";
      break;
    case "ask":
      endpoint = "/askstories.json";
      break;
    default:
      endpoint = "/topstories.json";
  }

  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Failed to fetch ${type} story IDs`);
  return res.json();
}

// Fetch a single story by ID
export async function fetchStory(id: number): Promise<Story> {
  const res = await fetch(`${BASE_URL}/item/${id}.json`);
  if (!res.ok) throw new Error(`Failed to fetch story with id ${id}`);
  return res.json();
}

// Fetch stories by type with limit (e.g. top 30)
export async function fetchStoriesByType(type: SortType, limit = 30): Promise<Story[]> {
  const ids = await fetchStoryIdsByType(type);
  const slicedIds = ids.slice(0, limit);

  const stories = await Promise.all(slicedIds.map(id => fetchStory(id)));

  // Filter out null, deleted, or dead items
  return stories.filter((story): story is Story => !!story && !story.deleted && !story.dead);
}