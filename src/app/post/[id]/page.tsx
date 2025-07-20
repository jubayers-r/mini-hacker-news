import { fetchStory } from "@/lib/hn-api";
import { formatDistanceToNow } from "date-fns";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = await fetchStory(Number(params.id));
  if (!story) return { title: "Not found" };

  return {
    title: story.title,
    description: `${story.score} points by ${story.by}`,
  };
}

export default async function StoryPage({ params }: Props) {
  const story = await fetchStory(Number(params.id));
  if (!story) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">{story.title}</h1>
      <p className="text-sm text-muted-foreground">
        {story.score} points by {story.by} •{" "}
        {formatDistanceToNow(new Date(story.time * 1000), { addSuffix: true })}
      </p>
      {story.url && (
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Visit original source
        </a>
      )}
    </main>
  );
}