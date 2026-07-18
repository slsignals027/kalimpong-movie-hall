"use client";


type Props = {
  seat: string;
  selected: boolean;
  booked: boolean;
  onClick: () => void;
};

export default function Seat({
  seat,
  selected,
  booked,
  onClick,
}: Props) {
  let color = "fill-green-500";

  if (booked) color = "fill-red-500";
  else if (selected) color = "fill-blue-500";

  return (
    <button
      disabled={booked}
      onClick={onClick}
      className="flex flex-col items-center transition hover:scale-105 disabled:cursor-not-allowed"
    >
      <svg
        viewBox="0 0 64 64"
        className={`h-5 w-5 ${color}`}
      >
        <rect x="16" y="6" width="32" height="22" rx="6"/>
        <rect x="12" y="28" width="40" height="12" rx="4"/>
        <rect x="8" y="22" width="6" height="24" rx="2"/>
        <rect x="50" y="22" width="6" height="24" rx="2"/>
        <rect x="18" y="40" width="4" height="16" rx="2"/>
        <rect x="42" y="40" width="4" height="16" rx="2"/>
      </svg>

      <span className="text-[8px]">
        {seat.replace(/[A-Z]/, "")}
      </span>
    </button>
  );
}