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
  let color = premium
  ? "fill-yellow-500"
  : "fill-green-500";

if (booked) {
  color = "fill-red-500";
} else if (selected) {
  color = "fill-blue-500";
}
  return (
    <button
      disabled={booked}
      onClick={onClick}
      className={`
group
flex flex-col items-center
transition-all
duration-300
hover:-translate-y-1
hover:scale-110
active:scale-95
disabled:cursor-not-allowed
`}
    >
      <svg
  viewBox="0 0 80 80"
  className={`h-8 w-8 transition-all duration-300 ${
  selected ? "scale-110" : ""
} ${color} ${
  premium && !booked && !selected
    ? "drop-shadow-[0_0_8px_rgba(234,179,8,.8)]"
    : ""
}`}
>
  {/* Back Cushion */}
  <rect
    x="22"
    y="10"
    width="36"
    height="26"
    rx="10"
    opacity="0.95"
  />

  {/* Seat Cushion */}
  <rect
    x="16"
    y="36"
    width="48"
    height="14"
    rx="7"
  />

  {/* Left Arm */}
  <rect
    x="10"
    y="26"
    width="8"
    height="26"
    rx="4"
  />

  {/* Right Arm */}
  <rect
    x="62"
    y="26"
    width="8"
    height="26"
    rx="4"
  />

  {/* Left Leg */}
  <rect
    x="24"
    y="50"
    width="5"
    height="16"
    rx="2"
  />

  {/* Right Leg */}
  <rect
    x="51"
    y="50"
    width="5"
    height="16"
    rx="2"
  />

  {/* Shadow */}
  <ellipse
    cx="40"
    cy="71"
    rx="18"
    ry="3"
    fill="black"
    opacity="0.15"
  />
</svg>

      <span className="mt-1 text-[9px] font-medium text-gray-700">
        {seat.replace(/[A-Z]/, "")}
      </span>
    </button>
  );
}