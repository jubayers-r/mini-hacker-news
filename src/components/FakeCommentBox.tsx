"use client";

import { useState } from "react";

export default function FakeCommentBox() {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo comment box. Comments are not sent.");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <textarea
        rows={4}
        placeholder="Write your comment here..."
        className="w-full rounded-md border border-gray-300 p-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button
        type="submit"
        className="self-end rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}