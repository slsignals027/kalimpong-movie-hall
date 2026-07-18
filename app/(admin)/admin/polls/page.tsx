import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePoll } from "@/actions/poll";

export default async function PollsPage() {
  const polls = await prisma.poll.findMany({
    include: {
      movies: {
        include: {
          movie: true,
        },
      },
      _count: {
        select: {
          votes: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-7xl p-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Poll Management
        </h1>

        <Link
          href="/admin/polls/new"
          className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700"
        >
          + Create Poll
        </Link>
      </div>

      {polls.length === 0 ? (
        <div className="rounded-lg border bg-gray-50 p-8 text-center">
          <p className="text-gray-600">
            No polls created yet.
          </p>
        </div>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3">Title</th>
              <th className="border p-3">Voting Period</th>
              <th className="border p-3">Movies</th>
              <th className="border p-3">Votes</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {polls.map((poll) => (
              <tr key={poll.id}>
                <td className="border p-3 font-medium">
                  {poll.title}
                </td>

                <td className="border p-3">
                  <div>
                    <div>
                      {poll.startsAt.toLocaleString("en-IN")}
                    </div>

                    <div className="text-sm text-gray-500">
                      to
                    </div>

                    <div>
                      {poll.endsAt.toLocaleString("en-IN")}
                    </div>
                  </div>
                </td>

                <td className="border p-3">
                  <ul className="list-disc pl-5">
                    {poll.movies.map((pm) => (
                      <li key={pm.movie.id}>
                        {pm.movie.title}
                      </li>
                    ))}
                  </ul>
                </td>

                <td className="border p-3 text-center">
                  {poll._count.votes}
                </td>

                <td className="border p-3 text-center">
                  {poll.isActive ? (
                    <span className="font-semibold text-green-600">
                      Active
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      Closed
                    </span>
                  )}
                </td>

                <td className="border p-3">
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/admin/polls/${poll.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </Link>

                    <form
  action={async () => {
    "use server";
    await deletePoll(poll.id);
  }}
>
  <button
    className="text-left text-red-600 hover:underline"
  >
    Delete
  </button>
</form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
