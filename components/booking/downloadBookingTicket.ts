"use client";

export type BookingTicket = {
  bookingNumber: string;
  movieTitle: string;
  showDate: string;
  showTime: string;
  seats: string[];
};

export function downloadBookingTicket(ticket: BookingTicket) {
  const canvas = document.createElement("canvas");
  const scale = 2;
  canvas.width = 720 * scale;
  canvas.height = 560 * scale;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Image download is unavailable on this device.");

  ctx.scale(scale, scale);
  ctx.fillStyle = "#f8f5ef";
  ctx.fillRect(0, 0, 720, 560);
  ctx.fillStyle = "#1b4332";
  ctx.fillRect(0, 0, 720, 110);
  ctx.font = "bold 32px sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("BEWOOR HALL", 38, 55);
  ctx.font = "18px sans-serif";
  ctx.fillText("Booking Confirmation", 38, 83);

  ctx.fillStyle = "#1b4332";
  ctx.font = "bold 27px sans-serif";
  const title = ticket.movieTitle;
  const maxWidth = 640;
  const words = title.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? line + " " + word : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  lines.slice(0, 2).forEach((text, index) => ctx.fillText(text, 38, 165 + index * 36));

  ctx.font = "18px sans-serif";
  ctx.fillStyle = "#475569";
  const details = [
    ["DATE", ticket.showDate],
    ["TIME", ticket.showTime],
    ["SEATS", ticket.seats.join(", ")],
    ["BOOKING NUMBER", ticket.bookingNumber],
  ];
  let y = lines.length > 1 ? 250 : 215;
  for (const [label, value] of details) {
    ctx.font = "bold 15px sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.fillText(label, 38, y);
    ctx.font = "20px sans-serif";
    ctx.fillStyle = "#1b4332";
    ctx.fillText(value, 38, y + 27, 645);
    y += 75;
  }
  ctx.fillStyle = "#64748b";
  ctx.font = "15px sans-serif";
  ctx.fillText("Please show this ticket at the entrance.", 38, 525);

  const link = document.createElement("a");
  link.download = "booking-" + ticket.bookingNumber.replace(/[^a-zA-Z0-9-]/g, "") + ".png";
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  link.remove();
}
