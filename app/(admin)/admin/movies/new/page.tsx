import MovieForm from "@/components/admin/MovieForm";

export default function NewMoviePage() {
  return (
    <main className="mx-auto max-w-3xl p-10">

      <h1 className="mb-8 text-3xl font-bold">
        Add Movie
      </h1>

      <MovieForm />

    </main>
  );
}