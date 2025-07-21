"use client";


import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import ScoreBadge from "@/components/post/ScoreBagde";
import SearchAndSortBar, { SortType } from "@/components/shared/SearchAndSortBar";
import { useState } from "react";
import { useStoriesByType } from "@/hooks/useStoriesByType";

export default function HomePage() {
    const [sortBy, setSortBy] = useState<SortType>("top");
  const { data, isLoading, error } = useStoriesByType(sortBy);
  const [searchQuery, setSearchQuery] = useState("");


  if (isLoading) return <p className="p-4">Loading top stories...</p>;
  if (error) return <p className="p-4 text-red-500">Failed to load stories.</p>;

const filteredData = data
  ?.filter((story) => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = sortBy === "ask"
      ? story.title.startsWith("Ask HN") // crude but effective
      : true;

    return matchesSearch && matchesType;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "new":
        return b.time - a.time;
      case "comments":
        return (b.kids?.length ?? 0) - (a.kids?.length ?? 0);
      default:
        return b.score - a.score;
    }
  });


  return (
    <main className="p-4 max-w-2xl mx-auto space-y-4">
      <SearchAndSortBar
        onSearch={(query) => setSearchQuery(query)}
        onSort={(sortBy) => setSortBy(sortBy)}
      />
      <motion.h1
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Hacker News Stories
      </motion.h1>

      {filteredData?.map((story, i) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: i * 0.04 }} // slight stagger
        >
          <Card className="p-4 hover:shadow transition">
            <a
              href={story.url ?? `/post/${story.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-lg font-semibold">{story.title}</h2>
            </a>
            <ScoreBadge score={story.score} by={story.by} time={story.time} />
          </Card>
        </motion.div>
      ))}
    </main>
  );
}
