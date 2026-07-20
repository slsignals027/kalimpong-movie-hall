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
    <div className="rounded-3xl bg-gradient-to-b from-[#232323] via-[#1b1b1b] to-[#111111] p-6 shadow-2xl sm:p-8">

      {/* Scroll only the auditorium */}
      <div className="overflow-x-auto overflow-y-hidden hide-scrollbar">

        {/* Width automatically becomes the width of the seat map */}
        <div className="mx-auto w-max">

          {/* Screen */}
          <Screen />

          {/* Seat Rows */}
          <div className="mt-8">

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

        </div>

      </div>

      {/* Legend */}

      <div className="mt-10 flex flex-wrap justify-center gap-6 rounded-2xl bg-white/10 p-5 backdrop-blur">

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-green-500" />
          <span className="text-white">Normal</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-yellow-400" />
          <span className="text-white">Premium</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-blue-500" />
          <span className="text-white">Selected</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-red-500" />
          <span className="text-white">Booked</span>
        </div>

      </div>

    </div>
  );
}