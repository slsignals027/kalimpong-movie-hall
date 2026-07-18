import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function MyBookingsPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const bookings = await prisma.booking.findMany({
    where: {
      userId: Number(session.user.id),
    },
    include: {
      show: {
        include: {
          movie: true,
        },
      },
      seats: true,
    },
    orderBy: {
      bookedAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-6xl py-12 px-6">

      <h1 className="mb-8 text-4xl font-bold">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="rounded-xl border p-10 text-center">
          <h2 className="text-2xl font-semibold">
            No bookings yet
          </h2>

          <p className="mt-3 text-gray-500">
            Book your first movie!
          </p>

          <Link
            href="/shows"
            className="mt-6 inline-block rounded bg-green-600 px-6 py-3 text-white"
          >
            Browse Shows
          </Link>
        </div>
      ) : (
        <div className="space-y-6">

          {bookings.map((booking) => (

            <div
              key={booking.id}
              className="rounded-2xl border bg-white p-6 shadow"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    {booking.show.movie.title}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    {booking.show.showDate.toLocaleDateString("en-IN", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-gray-600">
                    {booking.show.showTime}
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                  {booking.status}
                </span>

              </div>

              <hr className="my-5" />

              <div className="grid grid-cols-2 gap-6">

                <div>

                  <p className="text-sm text-gray-500">
                    Booking Number
                  </p>

                  <p className="font-semibold">
                    {booking.bookingNumber}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Seats
                  </p>

                  <p className="font-semibold">
                    {booking.seats
                      .map((seat) => seat.seatNumber)
                      .join(", ")}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Total Seats
                  </p>

                  <p className="font-semibold">
                    {booking.numberOfSeats}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Booked On
                  </p>

                  <p className="font-semibold">
                    {booking.bookedAt.toLocaleString("en-IN")}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </main>
  );
}