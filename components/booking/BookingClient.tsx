"use client";

import { useState } from "react";
import SeatLayout from "./SeatLayout";
import { confirmBooking } from "@/actions/booking";
import { useRouter } from "next/navigation";

type Props = {
  movieTitle: string;
  showDate: string;
  showTime: string;
  bookedSeats: string[];
  showId: number;
};

export default function BookingClient({
  movieTitle,
  showDate,
  showTime,
  bookedSeats,
  showId,
}: Props) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const router = useRouter();
  async function handleBooking() {
  const result = await confirmBooking(
    showId,
    selectedSeats
  );

  if (result.success) {
    alert(result.message);

    setSelectedSeats([]);

    router.refresh();
  } else {
    alert(result.message);
  }
}

  function toggleSeat(seat: string) {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 md:px-6 lg:flex-row">

        <div className="w-full lg:w-[70%]">
          <SeatLayout
          selectedSeats={selectedSeats}
          bookedSeats={bookedSeats}
          toggleSeat={toggleSeat}
/>
        </div>

<div className="h-fit w-full rounded-3xl bg-white p-6 shadow-xl lg:sticky lg:top-8 lg:w-[30%]">
          <div className="mb-6 border-b pb-5">

<h2 className="text-3xl font-bold text-[#1B4332]">
Booking Summary
</h2>

<p className="mt-1 text-sm text-gray-500">
Review your booking before confirming.
</p>

</div>

          <div className="space-y-5">

            <div>
              <p className="text-sm text-gray-500">
                Movie
              </p>
              <p className="text-lg font-semibold">
                {movieTitle}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Date
              </p>
              <p className="text-lg font-semibold">
                {showDate}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Time
              </p>
              <p className="text-lg font-semibold">
                {showTime}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Selected Seats
              </p>

              <p className="text-lg font-semibold">
                {selectedSeats.length === 0
                  ? "None"
                  : selectedSeats.join(", ")}
              </p>
            </div>
            <hr className="my-6" />

<div>
  <p className="text-sm text-gray-500">
    Total Seats
  </p>

  <p className="text-4xl font-black text-[#1B4332]">
    {selectedSeats.length}
  </p>
</div>

<button
onClick={handleBooking}
  className={`mt-8 w-full rounded-2xl py-4 text-lg font-bold shadow-lg transition-all duration-300 ${
    selectedSeats.length === 0
      ? "cursor-not-allowed bg-gray-400"
      : "bg-[#1B4332] hover:bg-[#143526]"
  }`}
  disabled={selectedSeats.length === 0}
>
  Confirm Booking
</button>

          </div>

        </div>

      </div>
    </main>
  );
}