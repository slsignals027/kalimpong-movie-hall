import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

import {
  deleteMovie,
  setActiveMovie,
} from "@/actions/movie";

export default async function MoviesPage() {
  const movies = await prisma.movie.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-7xl p-10">

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Movie Management
        </h1>

        <Link
          href="/admin/movies/new"
          className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700"
        >
          + Add Movie
        </Link>

      </div>

      <table className="w-full border border-gray-300">

        <thead className="bg-gray-100">

          <tr>

            <th className="border p-3">Poster</th>

            <th className="border p-3">Title</th>

            <th className="border p-3">Genre</th>

            <th className="border p-3">Language</th>

            <th className="border p-3">IMDb</th>

            <th className="border p-3">Year</th>

            <th className="border p-3">Status</th>

            <th className="border p-3">Actions</th>

          </tr>

        </thead>

        <tbody>

          {movies.map((movie) => (

            <tr key={movie.id}>

              <td className="border p-2 text-center">

                <Image
                  src={movie.poster}
                  alt={movie.title}
                  width={60}
                  height={90}
                  className="mx-auto rounded object-cover"
                />

              </td>

              <td className="border p-3 font-medium">
                {movie.title}
              </td>

              <td className="border p-3">
                {movie.genre}
              </td>

              <td className="border p-3">
                {movie.language}
              </td>

              <td className="border p-3">
                {movie.imdbRating}
              </td>

              <td className="border p-3">
                {movie.releaseYear}
              </td>

              <td className="border p-3 text-center">

                {movie.isActive ? (

                  <span className="font-semibold text-green-600">
                    Active
                  </span>

                ) : (

                  <span className="text-gray-500">
                    Inactive
                  </span>

                )}

              </td>

              <td className="border p-3">

  <div className="flex flex-col gap-3">

    {/* Edit */}

    <Link
      href={`/admin/movies/${movie.id}/edit`}
      className="text-blue-600 hover:underline"
    >
      Edit
    </Link>

    {/* Delete */}

    <form
      action={async () => {
        "use server";
        await deleteMovie(movie.id);
      }}
    >
      <button
        className="text-left text-red-600 hover:underline"
      >
        Delete
      </button>
    </form>

    {/* Active */}

    {movie.isActive ? (

      <span className="font-semibold text-green-600">
        ✓ Active Movie
      </span>

    ) : (

      <form
        action={async () => {
          "use server";
          await setActiveMovie(movie.id);
        }}
      >
        <button
          className="text-left text-green-700 hover:underline"
        >
          Set Active
        </button>
      </form>

    )}

  </div>

</td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>
  );
}