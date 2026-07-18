"use client";

import type { Movie } from "@prisma/client";
import { createPoll } from "@/actions/poll";

export default function CreatePollForm({
  movies,
}: {
  movies: Movie[];
}) {
  return (
    <form
      action={createPoll}
      className="space-y-8 rounded-lg border bg-white p-6 shadow"
    >
      <div>
        <label className="mb-2 block font-semibold">
          Poll Title
        </label>

        <input
          name="title"
          required
          placeholder="Week 35 Movie Voting"
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">
          Select Movies
        </h2>

        <div className="space-y-3">

          {movies.map((movie) => (

            <label
              key={movie.id}
              className="flex items-center gap-3"
            >
              <input
                type="checkbox"
                name="movies"
                value={movie.id}
              />

              {movie.title}
            </label>

          ))}

        </div>
      </div>

      <button
        className="rounded bg-green-600 px-8 py-3 font-semibold text-white"
      >
        Create Poll
      </button>
    </form>
  );
}