"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  endsAt: Date;
  winner?: {
    title: string;
    poster: string;
    genre: string;
    rating: number;
    votes: number;
  };
};

export default function PollCountdown({
  endsAt,
  winner,
}: Props) {
  const [expired, setExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function updateCountdown() {
      const now = Date.now();
      const end = new Date(endsAt).getTime();

      const diff = end - now;

      if (diff <= 0) {
        setExpired(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
          (1000 * 60)
      );
      const seconds = Math.floor(
        (diff % (1000 * 60)) /
          1000
      );

      setTimeLeft(
        `${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    }

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [endsAt]);

  if (expired && winner) {
    return (
      <div className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 shadow-2xl">

        <div className="grid items-center gap-8 p-8 md:grid-cols-[220px_1fr]">

          <div className="mx-auto">
            <Image
              src={winner.poster}
              alt={winner.title}
              width={220}
              height={330}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div className="text-center md:text-left">

            <p className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
              🏆 Winner
            </p>

            <h2 className="mt-2 text-5xl font-bold text-white">
              {winner.title}
            </h2>

            <div className="mt-5 flex flex-wrap justify-center gap-4 md:justify-start">

              <span className="rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur">
                🎬 {winner.genre}
              </span>

              <span className="rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur">
                ⭐ IMDb {winner.rating}
              </span>

              <span className="rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur">
                🗳 {winner.votes} Votes
              </span>

            </div>

            <p className="mt-8 text-lg text-white">
              Congratulations! This movie has been selected for next week's screening.
            </p>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="mb-10 rounded-3xl bg-[#1B4332] p-8 text-center text-white shadow-xl">

      <p className="text-lg uppercase tracking-[0.25em]">
        Voting Ends In
      </p>

      <h2 className="mt-4 text-5xl font-bold">
        {timeLeft}
      </h2>

    </div>
  );
}