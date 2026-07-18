import { prisma } from "@/lib/prisma";
import EditMovieForm from "@/components/admin/EditMovieForm";

export default async function EditMoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie = await prisma.movie.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!movie) {
    return (
      <main className="mx-auto max-w-3xl p-10">
        <h1 className="text-3xl font-bold text-red-600">
          Movie not found
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-10">
      <h1 className="mb-8 text-3xl font-bold">
        Edit Movie
      </h1>

      <EditMovieForm movie={movie} />
    </main>
  );
}