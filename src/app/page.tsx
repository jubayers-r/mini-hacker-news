"use client";

import { useTopStories } from "@/hooks/useTopStories";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { motion } from "motion/react";
import ScoreBadge from "@/components/post/ScoreBagde";

export default function HomePage() {
  const { data, isLoading, error } = useTopStories();

  if (isLoading) return <p className="p-4">Loading top stories...</p>;
  if (error) return <p className="p-4 text-red-500">Failed to load stories.</p>;

  return (
    <main className="p-4 max-w-2xl mx-auto space-y-4">
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Top Hacker News Stories
      </motion.h1>

      {data?.map((story, i) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: i * 0.04 }} // slight stagger
        >
          <Card className="p-4 hover:shadow transition">
            <a href={story.url ?? `/post/${story.id}`} target="_blank" rel="noopener noreferrer">
              <h2 className="text-lg font-semibold">{story.title}</h2>
            </a>
                <ScoreBadge score={story.score} by={story.by} time={story.time} />
          </Card>
        </motion.div>
      ))}
    </main>
  );
}
