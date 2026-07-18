"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type GenerateWeeklyShowsData = {
  movieId: number;
  dates: Date[];
  schedule: Record<number, string[]>;
};

export async function generateWeeklyShows(
  data: GenerateWeeklyShowsData
) {
  try {
    let created = 0;
    let skipped = 0;

    for (let day = 0; day < data.dates.length; day++) {
      const date = new Date(data.dates[day]);

      for (const time of data.schedule[day]) {
        const existing = await prisma.show.findFirst({
          where: {
            movieId: data.movieId,
            showDate: date,
            showTime: time,
          },
        });

        if (existing) {
          skipped++;
          continue;
        }

        await prisma.show.create({
          data: {
            movieId: data.movieId,
            showDate: date,
            showTime: time,
            totalSeats: 174,
            isActive: true,
          },
        });

        created++;
      }
    }

    revalidatePath("/admin/shows");
    revalidatePath("/");

    return {
      success: true,
      message: `Created ${created} show(s). ${skipped} duplicate show(s) skipped.`,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to generate schedule.",
    };
  }
}
export async function deleteShow(showId: number) {
  try {
    await prisma.show.delete({
      where: {
        id: showId,
      },
    });

    revalidatePath("/admin/shows");

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
    };
  }
}