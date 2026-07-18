"use client";

import type { Movie } from "@prisma/client";
import { updateMovie } from "@/actions/movie";

export default function EditMovieForm({
  movie,
}: {
  movie: Movie;
}) {
  async function update(formData: FormData) {
    await updateMovie(movie.id, formData);
  }

  return (
    <form
      action={update}
      className="space-y-6 rounded-lg border bg-white p-6 shadow"
    >
      <div>
        <label className="mb-2 block font-medium">
          Movie Title
        </label>

        <input
          type="text"
          name="title"
          defaultValue={movie.title}
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
          defaultValue={movie.description}
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
          defaultValue={movie.genre}
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
          defaultValue={movie.language}
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
          defaultValue={movie.duration}
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
          step="0.1"
          min="0"
          max="10"
          name="imdbRating"
          defaultValue={movie.imdbRating}
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
          defaultValue={movie.releaseYear}
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
          defaultValue={movie.trailerUrl ?? ""}
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Current Poster
        </label>

        <img
          src={movie.poster}
          alt={movie.title}
          className="mb-3 h-40 rounded border object-cover"
        />

        <input
          type="file"
          name="poster"
          accept="image/png,image/jpeg,image/webp"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Current Backdrop
        </label>

        <img
          src={movie.backdrop}
          alt={movie.title}
          className="mb-3 h-40 w-full rounded border object-cover"
        />

        <input
          type="file"
          name="backdrop"
          accept="image/png,image/jpeg,image/webp"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Update Movie
      </button>
    </form>
  );
}