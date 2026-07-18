"use client";

import { createMovie } from "@/actions/movie";

export default function MovieForm() {
  return (
    <form
      action={createMovie}
      className="space-y-6 rounded-lg border bg-white p-6 shadow"
    >
      <div>
        <label className="mb-2 block font-medium">
          Movie Title
        </label>

        <input
          type="text"
          name="title"
          required
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          name="description"
          rows={5}
          required
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Genre
        </label>

        <input
          type="text"
          name="genre"
          required
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Language
        </label>

        <input
          type="text"
          name="language"
          required
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Duration
        </label>

        <input
          type="text"
          name="duration"
          placeholder="2h 49m"
          required
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          IMDb Rating
        </label>

        <input
          type="number"
          name="imdbRating"
          step="0.1"
          min="0"
          max="10"
          required
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Release Year
        </label>

        <input
          type="number"
          name="releaseYear"
          required
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Trailer URL
        </label>

        <input
          type="url"
          name="trailerUrl"
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Poster
        </label>

        <input
          type="file"
          name="poster"
          accept="image/png,image/jpeg,image/webp"
          required
          className="block w-full"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Backdrop
        </label>

        <input
          type="file"
          name="backdrop"
          accept="image/png,image/jpeg,image/webp"
          required
          className="block w-full"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
      >
        Save Movie
      </button>
    </form>
  );
}