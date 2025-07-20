"use client";

import { useTopStories } from "@/hooks/useTopStories";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export default function HomePage() {
  const { data, isLoading, error } = useTopStories();

  if (isLoading) return <p className="p-4">Loading top stories...</p>;
  if (error) return <p className="p-4 text-red-500">Failed to load stories.</p>;

  return (
    <main className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-4">Top Hacker News Stories</h1>
      {data?.map((story) => (
        <Card key={story.id} className="p-4 hover:shadow transition">
          <a href={story.url ?? `/post/${story.id}`} target="_blank" rel="noopener noreferrer">
            <h2 className="text-lg font-semibold">{story.title}</h2>
          </a>
          <p className="text-sm text-muted-foreground">
            {story.score} points by {story.by} • {formatDistanceToNow(new Date(story.time * 1000), { addSuffix: true })}
          </p>
        </Card>
      ))}
    </main>
  );
}