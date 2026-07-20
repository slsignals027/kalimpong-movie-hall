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
  const premiumRows = ["K", "L", "M", "N", "O", "P", "Q"];
const isPremium = premiumRows.includes(row);
  return (
    <div className="mb-3 flex items-center justify-center">

      {/* Row Letter */}
      <div className="mr-3 w-6 text-center font-bold text-gray-700">
        {row}
      </div>

      {/* Seat Blocks */}
      {blocks.map((block, index) => (
        <div
          key={index}
          className="mx-2 flex gap-1"
        >
          {block.map((seat) => {
            const seatId = `${row}${seat}`;

            return (
              <Seat
  key={seatId}
  seat={seatId}
  premium={isPremium}
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
