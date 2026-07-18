"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createPoll(formData: FormData) {
  const title = formData.get("title") as string;

  const movieIds = formData
    .getAll("movies")
    .map((id) => Number(id));

  if (movieIds.length < 2) {
    throw new Error("Please select at least 2 movies.");
  }

  // Close any currently active poll
  await prisma.poll.updateMany({
    data: {
      isActive: false,
    },
  });

  const now = new Date();

  // Monday 12:00
  const start = new Date(now);
  const day = start.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  start.setDate(start.getDate() + diff);
  start.setHours(12, 0, 0, 0);

  // Wednesday 12:00
  const end = new Date(start);
  end.setDate(end.getDate() + 2);

  await prisma.poll.create({
    data: {
      title,
      startsAt: start,
      endsAt: end,
      isActive: true,

      movies: {
        create: movieIds.map((movieId) => ({
          movieId,
        })),
      },
    },
  });

  revalidatePath("/admin/polls");
  revalidatePath("/");

  redirect("/admin/polls");
}
export async function deletePoll(pollId: number) {
  try {
    await prisma.vote.deleteMany({
      where: {
        pollId,
      },
    });

    await prisma.pollMovie.deleteMany({
      where: {
        pollId,
      },
    });

    await prisma.poll.delete({
      where: {
        id: pollId,
      },
    });

    revalidatePath("/admin/polls");

  } catch (error) {
    console.error(error);
  }
}