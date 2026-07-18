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

      <div className="mt-10 flex justify-center gap-10">

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-green-500" />
          <span>Available</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-blue-500" />
          <span>Selected</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-red-500" />
          <span>Booked</span>
        </div>

      </div>

    </div>
  );
}