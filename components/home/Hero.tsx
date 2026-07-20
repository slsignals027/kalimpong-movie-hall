import { getCurrentMovie } from "@/lib/movie";
import { Play, Star, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default async function Hero() {
  const movie = await getCurrentMovie();

if (!movie) {
  return (
    <section className="flex min-h-[90vh] items-center justify-center">
      <h2 className="text-3xl font-bold">No Active Movie Found</h2>
    </section>
  );
}
return (
  <section
    className="relative min-h-[90vh] bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(
      to right,
      rgba(8,15,12,.92) 30%,
      rgba(8,15,12,.60) 65%,
      rgba(8,15,12,.35)
    ), url('${movie.backdrop}')`,
    }}
  >
  <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">

  <div className="flex w-full items-start justify-between gap-4 md:gap-10">

    {/* Movie Details */}

    <div className="flex-1 text-white">

      <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#C9A24B] sm:text-sm">
        This Week's Screening
      </p>

      <h1 className="mb-5 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
        {movie.title}
      </h1>

      <div className="mb-6 flex flex-wrap gap-3">

        <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Star size={16} fill="gold" />
          {movie.imdbRating}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Clock size={16} />
          {movie.duration}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Globe size={16} />
          {movie.language}
        </span>

      </div>

      <p className="mb-8 text-sm leading-6 text-gray-300 sm:text-lg sm:leading-8">
        {movie.description}
      </p>

      {movie.trailerUrl && (
        <a
          href={movie.trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button
            variant="secondary"
            className="flex items-center gap-2"
          >
            <Play size={18} />
            Watch Trailer
          </Button>
        </a>
      )}

    </div>

    {/* Poster */}

    <div className="shrink-0">

      <Image
        src={movie.poster}
        alt={movie.title}
        width={340}
        height={510}
        priority
        className="h-auto w-28 rounded-2xl shadow-2xl sm:w-36 md:w-52 lg:w-[340px]"
      />

    </div>

  </div>

</div>
  </section>
);
}