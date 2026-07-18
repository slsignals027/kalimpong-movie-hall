"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { voteForMovie } from "@/actions/vote";

type Props = {
  movieId: number;
};

export default function VoteButton({ movieId }: Props) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      className="w-full"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          const result = await voteForMovie(movieId);

          alert(result.message);
        })
      }
    >
      {isPending ? "Voting..." : "Vote"}
    </Button>
  );
}