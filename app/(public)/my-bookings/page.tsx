import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import HomeButton from "@/components/home/HomeButton";


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
    
    
    <main className="min-h-screen bg-[#F5F5F5] py-12">

  <div className="mx-auto mb-6 max-w-7xl px-6">
    <HomeButton />
  </div>

    

     <h1 className="mb-8 text-3xl font-bold text-[#1B4332] sm:text-4xl">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="rounded-3xl border bg-white p-8 text-center shadow-lg">
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
        
      ) :
       (
        
        
        <div className="space-y-6">
          

          {bookings.map((booking) => (

            <div
              key={booking.id}
              className="rounded-3xl border bg-white p-5 shadow-lg transition hover:shadow-xl sm:p-6"
            >

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <h2 className="text-xl font-bold text-[#1B4332] sm:text-2xl">
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

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <p className="text-sm text-gray-500">
                    Booking Number
                  </p>

                  <p className="break-all font-semibold">
                    {booking.bookingNumber}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Seats
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">

  {booking.seats.map((seat) => (

    <span
      key={seat.id}
      className="rounded-lg bg-[#1B4332] px-3 py-1 text-sm font-medium text-white"
    >
      {seat.seatNumber}
    </span>

  ))}

</div>

                </div>
                

                <div>

                  <p className="text-sm text-gray-500">
                    Total Seats
                  </p>

                  <p className="break-all font-semibold">
                    {booking.numberOfSeats}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Booked On
                  </p>

                  <p className="break-all font-semibold">
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