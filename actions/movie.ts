"use server";

import { prisma } from "@/lib/prisma";
import { saveImage } from "@/lib/uploads";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { unlink } from "fs/promises";
import { join } from "path";



export async function setActiveMovie(movieId: number) {
  try {
    await prisma.$transaction([
      prisma.movie.updateMany({
        data: {
          isActive: false,
        },
      }),

      prisma.movie.update({
        where: {
          id: movieId,
        },
        data: {
          isActive: true,
        },
      }),
    ]);

    revalidatePath("/");

revalidatePath("/admin/movies");

revalidatePath("/admin");

    return {
      success: true,
      message: "Active movie updated.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to update active movie.",
    };
  }
}
export async function createMovie(formData: FormData) {
  try {
    const poster = formData.get("poster") as File;
    const backdrop = formData.get("backdrop") as File;

    const posterPath = await saveImage(
      poster,
      "posters"
    );

    const backdropPath = await saveImage(
      backdrop,
      "backdrops"
    );

    await prisma.movie.create({
      data: {
        title: formData.get("title") as string,

        description:
          formData.get("description") as string,

        genre:
          formData.get("genre") as string,

        language:
          formData.get("language") as string,

        duration:
          formData.get("duration") as string,

        imdbRating: Number(
          formData.get("imdbRating")
        ),

        releaseYear: Number(
          formData.get("releaseYear")
        ),

        trailerUrl:
          (formData.get("trailerUrl") as string) ||
          null,

        poster: posterPath,

        backdrop: backdropPath,
      },
    });

    revalidatePath("/admin/movies");
    revalidatePath("/");
    revalidatePath("/admin");

    redirect("/admin/movies");
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function updateMovie(
  movieId: number,
  formData: FormData
) {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      throw new Error("Movie not found.");
    }

    let posterPath = movie.poster;
    let backdropPath = movie.backdrop;

    const poster = formData.get("poster") as File;
    const backdrop = formData.get("backdrop") as File;

    // Replace Poster
    if (poster && poster.size > 0) {
      if (movie.poster) {
        try {
          await unlink(
            join(process.cwd(), "public", movie.poster)
          );
        } catch {}
      }

      posterPath = await saveImage(
        poster,
        "posters"
      );
    }

    // Replace Backdrop
    if (backdrop && backdrop.size > 0) {
      if (movie.backdrop) {
        try {
          await unlink(
            join(process.cwd(), "public", movie.backdrop)
          );
        } catch {}
      }

      backdropPath = await saveImage(
        backdrop,
        "backdrops"
      );
    }

    await prisma.movie.update({
      where: {
        id: movieId,
      },

      data: {
        title: formData.get("title") as string,

        description:
          formData.get("description") as string,

        genre:
          formData.get("genre") as string,

        language:
          formData.get("language") as string,

        duration:
          formData.get("duration") as string,

        imdbRating: Number(
          formData.get("imdbRating")
        ),

        releaseYear: Number(
          formData.get("releaseYear")
        ),

        trailerUrl:
          (formData.get("trailerUrl") as string) ||
          null,

        poster: posterPath,

        backdrop: backdropPath,
      },
    });

    revalidatePath("/admin/movies");

    redirect("/admin/movies");

  } catch (err) {
    console.error(err);
    throw err;
  }
}

  export async function deleteMovie(
  movieId: number
) {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) return;

    // Delete Poster
    if (movie.poster) {
      try {
        await unlink(
          join(process.cwd(), "public", movie.poster)
        );
      } catch {}
    }

    // Delete Backdrop
    if (movie.backdrop) {
      try {
        await unlink(
          join(process.cwd(), "public", movie.backdrop)
        );
      } catch {}
    }

    await prisma.movie.delete({
      where: {
        id: movieId,
      },
    });

    revalidatePath("/admin/movies");

  } catch (err) {
    console.error(err);
    throw err;
  }
}