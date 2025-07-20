import { fetchStory } from "@/lib/hn-api";
import { formatDistanceToNow } from "date-fns";
import { notFound } from "next/navigation";
import Comment from "@/components/Comment";
import FakeCommentBox from "@/components/FakeCommentBox";
import type { Metadata } from "next";
import ScoreBadge from "@/components/post/ScoreBagde";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = await fetchStory(Number(params.id));
  if (!story) return { title: "Not found" };

  return {
    title: story.title,
    description: `Posted by ${story.by}, ${story.score} points, ${
      story.kids?.length || 0
    } comments`,
  };
}

export default async function StoryPage({ params }: Props) {
  const story = await fetchStory(Number(params.id));
  if (!story) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Title and meta */}
      <h1 className="text-3xl font-bold">{story.title}</h1>
      {/* story score */}
      <ScoreBadge score={story.score} by={story.by} time={story.time} />

      {/* Render HTML body for Ask/Show posts */}
      {story.text && (
        <article
          className="prose dark:prose-invert mb-6"
          dangerouslySetInnerHTML={{ __html: story.text }}
        />
      )}

      {/* External link */}
      {story.url && (
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
        >
          Visit Original Site
        </a>
      )}

      {/* Comments */}
      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">Comments</h2>
        {story.kids?.length ? (
          story.kids.map((kidId) => <Comment key={kidId} id={kidId} />)
        ) : (
          <p className="text-muted-foreground">No comments yet.</p>
        )}
      </section>

      {/* Demo comment input */}
      <section className="mt-10">
        <h3 className="text-lg font-semibold mb-2">
          Add a comment (Demo only)
        </h3>
        <FakeCommentBox />
      </section>
    </main>
  );
}
