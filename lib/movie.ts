import { prisma } from "@/lib/prisma";

export async function getCurrentMovie() {
  return prisma.movie.findFirst({
    where: {
      isActive: true,
    },
  });
}