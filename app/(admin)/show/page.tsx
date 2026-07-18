import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ShowsPage() {
  const activeMovie = await prisma.movie.findFirst({
    where: {
      isActive: true,
    },
  });

  const shows = await prisma.show.findMany({
    include: {
      movie: true,
    },
    orderBy: [
      {
        showDate: "asc",
      },
      {
        showTime: "asc",
      },
    ],
  });

  return (
    <main className="mx-auto max-w-7xl p-10">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Show Management
          </h1>

          {activeMovie && (
            <p className="mt-2 text-gray-600">
              Active Movie :
              <span className="font-semibold">
                {" "}
                {activeMovie.title}
              </span>
            </p>
          )}
        </div>

        {activeMovie && (
          <Link
            href={`/admin/shows/${activeMovie.id}`}
            className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700"
          >
            Generate Weekly Schedule
          </Link>
        )}

      </div>

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>

            <th className="border p-3">
              Movie
            </th>

            <th className="border p-3">
              Date
            </th>

            <th className="border p-3">
              Time
            </th>

            <th className="border p-3">
              Seats
            </th>

            <th className="border p-3">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {shows.map((show) => (

            <tr key={show.id}>

              <td className="border p-3">
                {show.movie.title}
              </td>

              <td className="border p-3">
                {show.showDate.toLocaleDateString("en-IN")}
              </td>

              <td className="border p-3">
                {show.showTime}
              </td>

              <td className="border p-3">
                {show.totalSeats}
              </td>

              <td className="border p-3">
                {show.isActive ? (
                  <span className="text-green-600">
                    Active
                  </span>
                ) : (
                  <span className="text-red-600">
                    Cancelled
                  </span>
                )}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>
  );
}