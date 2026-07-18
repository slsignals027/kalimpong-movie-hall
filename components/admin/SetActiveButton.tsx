"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { setActiveMovie } from "@/actions/movie";

type Props = {
  movieId: number;
  active: boolean;
};

export default function SetActiveButton({
  movieId,
  active,
}: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  async function handleClick() {
    startTransition(async () => {
      const result = await setActiveMovie(movieId);

      if (result.success) {
        router.refresh();
      } else {
        alert(result.message);
      }
    });
  }

  if (active) {
    return (
      <Button size="sm" disabled>
        Active
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      variant="secondary"
      disabled={pending}
      onClick={handleClick}
    >
      {pending ? "Updating..." : "Set Active"}
    </Button>
  );
}