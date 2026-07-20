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
      "bg-gradient-to-b from-blue-400 to-blue-700 border-blue-800 shadow-lg shadow-blue-400/50";

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
        items-center
        justify-center
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:scale-105
        active:scale-95
        disabled:cursor-not-allowed
      "
    >
      <div className="relative">

        {/* Shadow */}
        <div className="absolute bottom-0 left-1/2 h-2 w-6 -translate-x-1/2 rounded-full bg-black/20 blur-sm" />

        {/* Seat */}
        <div
          className={`
            relative
            h-7
            w-7
            sm:h-8
            sm:w-8
            rounded-t-lg
            border-2
            shadow-md
            transition-all
            duration-300
            group-hover:brightness-110
            group-hover:shadow-lg
            ${seatColor}
            ${
              premium && !selected && !booked
                ? "shadow-yellow-300/60"
                : ""
            }
          `}
        >
          {/* Back Cushion */}
          <div className="absolute left-1 right-1 top-1 h-2 rounded bg-white/25" />

          {/* Seat Cushion */}
          <div className="absolute bottom-1 left-1 right-1 h-1.5 rounded bg-black/10" />

          {/* Arms */}
          <div className="absolute -left-1 top-2 h-3 w-1 rounded bg-black/20" />
          <div className="absolute -right-1 top-2 h-3 w-1 rounded bg-black/20" />

          {/* Seat Number */}
          <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">
            {seat.replace(/[A-Z]/, "")}
          </div>
        </div>

      </div>
    </button>
  );
}