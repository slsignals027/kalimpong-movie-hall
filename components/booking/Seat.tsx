"use client";

type Props = {
  seat: string;
  premium: boolean;
  selected: boolean;
  booked: boolean;
  onClick: () => void;
};

export default function Seat({
  seat,
  premium,
  selected,
  booked,
  onClick,
}: Props) {

  let seatColor =
    "bg-green-500 border-green-600";

  if (premium)
    seatColor =
      "bg-gradient-to-b from-yellow-300 to-yellow-500 border-yellow-600";

  if (selected)
    seatColor =
      "bg-blue-500 border-blue-700";

  if (booked)
    seatColor =
      "bg-gradient-to-b from-red-400 to-red-700 border-red-800 opacity-80";

  return (
    <button
      disabled={booked}
      onClick={onClick}
      className="
      group
      flex
      flex-col
      items-center
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-110
      active:scale-95
      disabled:cursor-not-allowed
      "
    >

      {/* Seat */}

      <div className="relative">

        {/* Shadow */}

        <div className="absolute bottom-0 left-1/2 h-2 w-8 -translate-x-1/2 rounded-full bg-black/20 blur-sm" />

        {/* Seat */}

        <div
          className={`
          relative
          h-9
          w-9
          ${seatColor}
          rounded-t-xl
          border-2
          shadow-md
          transition-all
          duration-300
          ${
            premium && !selected && !booked
              ? "shadow-yellow-300/60"
              : ""
          }
          `}
        >

          {/* Back Cushion */}

          <div
            className="
            absolute
            left-1
            right-1
            top-1
            h-3
            rounded-lg
            bg-white/25
            "
          />

          {/* Seat Cushion */}

          <div
            className="
            absolute
            bottom-1
            left-1
            right-1
            h-2
            rounded-md
            bg-black/10
            "
          />

          {/* Arms */}

          <div className="absolute -left-1 top-3 h-4 w-1 rounded bg-black/20" />
          <div className="absolute -right-1 top-3 h-4 w-1 rounded bg-black/20" />

        </div>

      </div>

      <span className="mt-1 text-[9px] font-medium text-gray-700">
        {seat.replace(/[A-Z]/, "")}
      </span>

    </button>
  );
}