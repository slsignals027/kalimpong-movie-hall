"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function confirmBooking(
  showId: number,
  seats: string[]
) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        message: "Please login.",
      };
    }

    if (seats.length === 0) {
      return {
        success: false,
        message: "No seats selected.",
      };
    }

    const bookingNumber =
      "BK" +
      Date.now() +
      Math.floor(Math.random() * 1000);

    await prisma.$transaction(async (tx) => {

      const existing = await tx.booking.findMany({
        where: {
          showId,
          status: "CONFIRMED",
        },
        include: {
          seats: true,
        },
      });

      const bookedSeats = existing.flatMap((booking) =>
        booking.seats.map((seat) => seat.seatNumber)
      );

      const duplicate = seats.find((seat) =>
        bookedSeats.includes(seat)
      );

      if (duplicate) {
        throw new Error(
          `${duplicate} has just been booked by another user.`
        );
      }

      const booking = await tx.booking.create({
        data: {
          bookingNumber,
          userId: Number(session.user.id),
          showId,
          numberOfSeats: seats.length,
        },
      });

      await tx.bookingSeat.createMany({
        data: seats.map((seat) => ({
          bookingId: booking.id,
          seatNumber: seat,
        })),
      });

    });

    revalidatePath(`/booking/${showId}`);

    return {
      success: true,
      message: "Booking Confirmed",
    };

  } catch (error) {

    console.error(error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Booking failed.",
    };
  }
}