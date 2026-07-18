export type SeatBlock = {
  row: string;
  blocks: number[][];
};

export const AUDITORIUM: SeatBlock[] = [
  // Rows A-J (13 seats: 6 | 7)
  ...Array.from({ length: 10 }, (_, i) => {
    const row = String.fromCharCode(65 + i);

    return {
      row,
      blocks: [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12, 13],
      ],
    };
  }),

  // K
  {
    row: "K",
    blocks: [
      [1, 2],
      [3,4,5,6,7,8,9,10,11,12],
      [13,14],
    ],
  },

  // L
  {
    row: "L",
    blocks: [
      [1,2],
      [3,4,5,6,7,8,9,10,11,12],
      [13,14],
    ],
  },

  // N (8 seats)
  {
    row: "N",
    blocks: [
      [1,2],
      [5,6,7,8],
      [13,14],
    ],
  },

  // M (4 seats)
  {
    row: "M",
    blocks: [
      [1,2,3,4],
    ],
  },
];