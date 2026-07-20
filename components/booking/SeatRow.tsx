import Seat from "./Seat";

type Props = {
  row: string;
  blocks: number[][];
  selectedSeats: string[];
  bookedSeats: string[];
  toggleSeat: (seat: string) => void;
};

export default function SeatRow({
  row,
  blocks,
  selectedSeats,
  bookedSeats,
  toggleSeat,
}: Props) {

  const premiumRows = [
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
  ];

  const rowSelected = selectedSeats.some((seat) =>
    seat.startsWith(row)
  );

  return (
    <div className="mb-1.5 flex items-center justify-center">

      {/* Row Label */}

      <div
        className={`
          mr-3
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          text-sm
          font-bold
          transition-all
          ${
            rowSelected
              ? "bg-blue-500 text-white"
              : "text-gray-300"
          }
        `}
      >
        {row}
      </div>

      {/* Seat Blocks */}

      {blocks.map((block, index) => (
        <div
          key={index}
          className="mx-1.5 flex gap-0.5"
        >
          {block.map((seat) => {

            const seatId = `${row}${seat}`;

            return (
              <Seat
                key={seatId}
                seat={seatId}
                premium={premiumRows.includes(row)}
                selected={selectedSeats.includes(seatId)}
                booked={bookedSeats.includes(seatId)}
                onClick={() => toggleSeat(seatId)}
              />
            );
          })}
        </div>
      ))}

    </div>
  );
}