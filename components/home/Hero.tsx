import { getCurrentMovie } from "@/lib/movie";
import { Play, Star, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between px-6 py-20 lg:px-10">

        {/* Left Content */}
        <div className="max-w-xl text-white">

          <p className="mb-4 tracking-[0.3em] text-[#C9A24B] uppercase">
            This Week's Screening
          </p>

          <h1 className="mb-6 text-6xl font-black leading-none lg:text-7xl">
            {movie.title}
          </h1>

          <div className="mb-8 flex flex-wrap gap-3">

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

          <p className="mb-10 text-lg leading-8 text-gray-300">
            {movie.description}
          </p>

          <div className="flex gap-4">

            

            <a
  href={movie.trailerUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="secondary"
    className="flex items-center gap-2"
  >
    <Play size={18} />
    Watch Trailer
  </Button>
</a>

          </div>

        </div>

        {/* Poster */}

        <div className="hidden lg:block">

          <Image
  src={movie.poster}
  alt={movie.title}
  width={340}
  height={510}
  className="rounded-3xl shadow-2xl"
/>

        </div>

      </div>
    </section>
  );
}