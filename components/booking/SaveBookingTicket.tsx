"use client";

import { useState } from "react";
import { downloadBookingTicket, type BookingTicket } from "./downloadBookingTicket";

export default function SaveBookingTicket(ticket: BookingTicket) {
  const [error, setError] = useState("");

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => {
          try {
            downloadBookingTicket(ticket);
            setError("");
          } catch {
            setError("Could not save the image. Please take a screenshot of this booking.");
          }
        }}
        className="rounded-lg bg-[#1B4332] px-5 py-3 font-semibold text-white hover:bg-[#143526]"
      >
        Save ticket image
      </button>
      {error && <p role="alert" className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
