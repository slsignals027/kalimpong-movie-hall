"use client";

import { AUDITORIUM } from "@/lib/auditorium";
import Screen from "./Screen";
import SeatRow from "./SeatRow";

type Props = {
  selectedSeats: string[];
  bookedSeats: string[];
  toggleSeat: (seat: string) => void;
};

export default function SeatLayout({
  selectedSeats,
  bookedSeats,
  toggleSeat,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <div className="mb-8 flex items-center justify-between">

  <div>
    <h2 className="text-2xl font-bold text-[#1B4332]">
      Select Your Seats
    </h2>

    <p className="text-sm text-gray-500">
      Tap a seat to select it.
    </p>
  </div>

  <div className="rounded-xl bg-[#1B4332] px-5 py-3 text-center text-white shadow">

    <p className="text-xs uppercase tracking-wider">
      Selected
    </p>

    <p className="text-2xl font-bold">
      {selectedSeats.length}
    </p>

  </div>

</div>

      <Screen />

      <div className="mt-10 flex flex-col items-center">

        {AUDITORIUM.map((row) => (

          <SeatRow
            key={row.row}
            row={row.row}
            blocks={row.blocks}
            selectedSeats={selectedSeats}
            bookedSeats={bookedSeats}
            toggleSeat={toggleSeat}
          />

        ))}

      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 rounded-xl bg-gray-50 p-5">

  <div className="flex items-center gap-2">
    <div className="h-5 w-5 rounded bg-green-500" />
    <span>Available</span>
  </div>

  <div className="flex items-center gap-2">
    <div className="h-5 w-5 rounded bg-blue-500" />
    <span>Selected</span>
  </div>

  <div className="flex items-center gap-2">
    <div className="h-5 w-5 rounded bg-red-500" />
    <span>Booked</span>
  </div>

  <div className="flex items-center gap-2">
    <div className="h-5 w-5 rounded border-2 border-yellow-500 bg-white" />
    <span>Premium Seat</span>
  </div>

</div>

    </div>
  );
}