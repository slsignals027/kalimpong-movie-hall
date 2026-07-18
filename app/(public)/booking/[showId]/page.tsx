import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import BookingClient from "@/components/booking/BookingClient";

export default async function BookingPage({
  params,
}: {
  params: Promise<{ showId: string }>;
}) {
  const session = await auth();

if (!session) {
  redirect("/login");
}
  const { showId } = await params;

  const show = await prisma.show.findUnique({
  where: {
    id: Number(showId),
  },
  include: {
    movie: true,
    bookings: {
      where: {
        status: "CONFIRMED",
      },
      include: {
        seats: true,
      },
    },
  },
});
const bookedSeats =
  show?.bookings.flatMap((booking) =>
    booking.seats.map((seat) => seat.seatNumber)
  ) ?? [];

  if (!show) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Show not found
        </h1>
      </main>
    );
  }

  return (
  <BookingClient
  movieTitle={show.movie.title}
  showDate={show.showDate.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
  showTime={show.showTime}
  bookedSeats={bookedSeats}
  showId={show.id}
/>
);
}