
import { prisma } from "@/lib/prisma";
import CreatePollForm from "@/components/admin/CreatePollForm";

export default async function NewPollPage() {
  const movies = await prisma.movie.findMany({
    orderBy: {
      title: "asc",
    },
  });

  return (
    <main className="mx-auto max-w-4xl p-10">
      <h1 className="mb-8 text-3xl font-bold">
        Create This Week's Poll
      </h1>

      <CreatePollForm movies={movies} />
    </main>
  );
}