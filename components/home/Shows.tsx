import { prisma } from "@/lib/prisma";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/container";
import Link from "next/link";
import { auth } from "@/auth";
export default async function Shows() {
  const session = await auth();
  const movie = await prisma.movie.findFirst({
    where: {
      isActive: true,
    },
  });

  if (!movie) {
    return null;
  }

  const shows = await prisma.show.findMany({
  where: {
    movieId: movie.id,
    isActive: true,
  },
  include: {
    bookings: {
      where: {
        status: "CONFIRMED",
      },
    },
  },
  orderBy: {
    showDate: "asc",
  },
});

  return (
    <section className="bg-[#F8F5EF] py-20">
      <Container>
        <SectionTitle
          title="This Week's Shows"
          subtitle="Reserve your seats for this week's screenings."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {shows.map((show) => {
            // Temporary until bookings are connected
            const booked = show.bookings.reduce(
  (total, booking) => total + booking.numberOfSeats,
  0
);

            const available = show.totalSeats - booked;

            const percent =
              show.totalSeats === 0
                ? 0
                : (booked / show.totalSeats) * 100;

            return (
              <div
                key={show.id}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold">
                  {show.showDate.toLocaleDateString("en-IN", {
                    weekday: "long",
                  })}
                </h3>

                <p className="text-gray-500">
                  {show.showTime}
                </p>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-[#1B4332]"
                    style={{
                      width: `${percent}%`,
                    }}
                  />
                </div>

                <p className="mt-4 text-sm">
                  <strong>{booked}</strong> / {show.totalSeats} booked
                </p>

                <p
                  className={`mt-2 text-sm font-medium ${
                    available === 0
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {available === 0
                    ? "Fully Booked"
                    : `${available} Seats Left`}
                </p>

                <Link
  href={
    !session
      ? "/login"
      : `/booking/${show.id}`
  }
  className={`mt-6 block w-full rounded-lg py-3 text-center text-white transition ${
    available === 0
      ? "pointer-events-none cursor-not-allowed bg-gray-500"
      : "bg-[#1B4332] hover:bg-[#143526]"
  }`}
>
  {available === 0 ? "House Full" : "Book Now"}
</Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}