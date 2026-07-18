import { prisma } from "@/lib/prisma";
import AddShowForm from "./AddShowForm";

export default async function Page({
  params,
}: {
  params: Promise<{ movieID: string }>;
}) {
  const { movieID } = await params;

  const movie = await prisma.movie.findUnique({
    where: {
      id: Number(movieID),
    },
  });

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <main className="mx-auto max-w-xl py-10">

      <h1 className="mb-8 text-3xl font-bold">
        {movie.title}
      </h1>

      <AddShowForm movieId={movie.id} />

    </main>
  );
}