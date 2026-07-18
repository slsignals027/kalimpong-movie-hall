import { prisma } from "@/lib/prisma";
import SectionTitle from "@/components/ui/SectionTitle";
import MovieCard from "@/components/ui/MovieCard";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import Link from "next/link";
import VoteButton from "./VoteButton";
import PollCountdown from "./PollCountdown";

export default async function VoteSection() {
  const session = await auth();

  // Get the active poll
  const poll = await prisma.poll.findFirst({
    where: {
      isActive: true,
    },
    include: {
      movies: {
        include: {
          movie: {
            include: {
              _count: {
                select: {
                  votes: true,
                },
              },
            },
          },
        },
      },
    },
  });
  

  if (!poll) {
    return null;
  }
  const winner = poll.movies
  .map(({ movie }) => ({
    title: movie.title,
    poster: movie.poster,
    genre: movie.genre,
    rating: movie.imdbRating,
    votes: movie._count.votes,
  }))
  .sort((a, b) => b.votes - a.votes)[0];

  // Get the current user's vote for the active poll
  const userVote = session?.user
    ? await prisma.vote.findFirst({
        where: {
          userId: Number(session.user.id),
          pollId: poll.id,
        },
      })
    : null;

  return (
    <section className="bg-[#EFE7D8] py-20">
      <div className="mx-auto max-w-7xl px-8">

        <SectionTitle
          title="Vote for Next Week"
          subtitle="Help decide which movie we'll screen next weekend."
        />
        <PollCountdown
  endsAt={poll.endsAt}
  winner={winner}
/>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {poll.movies.map(({ movie }) => (

            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={movie.poster}
              genre={movie.genre}
              rating={movie.imdbRating.toString()}
            >

              <p className="mb-3 text-center font-semibold text-[#1B4332]">
                🗳 {movie._count.votes} Votes
              </p>

              {!session ? (
                <Link href="/login">
                  <Button className="w-full">
                    Login to Vote
                  </Button>
                </Link>
              ) : userVote?.movieId === movie.id ? (
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled
                >
                  ✓ Your Vote
                </Button>
              ) : (
                <VoteButton movieId={movie.id} />
              )}

            </MovieCard>

          ))}

        </div>

      </div>
    </section>
  );
}