"use client";

import { Badge } from "@/components/ui/badge";
import { Flame, ThumbsUp } from "lucide-react";

type ScoreBadgeProps = {
  score: number;
  by: string;
  time: number; // UNIX timestamp
};

export default function ScoreBadge({ score, by, time }: ScoreBadgeProps) {
  const posted = new Date(time * 1000).toLocaleString();

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      <Badge variant="secondary" className="flex items-center gap-1 px-2 py-1">
        <Flame className="h-3 w-3 text-orange-500" />
        {score} points
      </Badge>

      <Badge variant="outline" className="flex items-center gap-1 px-2 py-1">
        <ThumbsUp className="h-3 w-3" />
        by {by}
      </Badge>

      {time && <span className="text-xs text-gray-500">{posted}</span>}
    </div>
  );
}