"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function voteForMovie(movieId: number) {
  const session = await auth();

  if (!session?.user) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  const poll = await prisma.poll.findFirst({
    where: {
      isActive: true,
    },
  });

  if (!poll) {
    return {
      success: false,
      message: "No active poll found.",
    };
  }

  const existingVote = await prisma.vote.findFirst({
  where: {
    userId: Number(session.user.id),
    pollId: poll.id,
  },
});

if (existingVote) {
  await prisma.vote.update({
    where: {
      id: existingVote.id,
    },
    data: {
      movieId,
      createdAt: new Date(),
    },
  });

  revalidatePath("/");

  return {
    success: true,
    message: "Vote updated successfully.",
  };
}

await prisma.vote.create({
  data: {
    userId: Number(session.user.id),
    movieId,
    pollId: poll.id,
  },
});

revalidatePath("/");

return {
  success: true,
  message: "Vote recorded successfully.",
};
}