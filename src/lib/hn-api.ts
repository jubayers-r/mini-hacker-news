const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export async function fetchTopStoryIds(): Promise<number[]> {
  const res = await fetch(`${BASE_URL}/topstories.json`);
  return res.json();
}

export async function fetchStory(id: number): Promise<Story> {
  const res = await fetch(`${BASE_URL}/item/${id}.json`);
  return res.json();
}

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