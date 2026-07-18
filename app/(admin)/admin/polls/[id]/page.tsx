import { prisma } from "@/lib/prisma";

export default async function PollDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const poll = await prisma.poll.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      movies: {
        include: {
          movie: {
            include: {
              _count: {
                select: {
                  votes: {
                    where: {
                      pollId: Number(id),
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!poll) {
    return <h1>Poll not found.</h1>;
  }

  const winner = [...poll.movies].sort(
    (a, b) =>
      b.movie._count.votes -
      a.movie._count.votes
  )[0];

  return (
    <main className="mx-auto max-w-5xl p-10">

      <h1 className="mb-2 text-3xl font-bold">
        {poll.title}
      </h1>

      <p className="mb-8 text-gray-600">
        {poll.startsAt.toLocaleString("en-IN")}
        {"  "}→{"  "}
        {poll.endsAt.toLocaleString("en-IN")}
      </p>

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>

            <th className="border p-3">
              Movie
            </th>

            <th className="border p-3">
              Votes
            </th>

          </tr>

        </thead>

        <tbody>

          {poll.movies.map(({ movie }) => (

            <tr key={movie.id}>

              <td className="border p-3">
                {movie.title}
              </td>

              <td className="border p-3 text-center">
                {movie._count.votes}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="mt-10 rounded-lg border bg-green-50 p-6">

        <h2 className="text-2xl font-bold">
          Current Leader
        </h2>

        <p className="mt-3 text-xl">

          {winner.movie.title}

          {" — "}

          {winner.movie._count.votes}

          {" votes"}

        </p>

      </div>

    </main>
  );
}