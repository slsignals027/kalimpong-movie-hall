/*
  Warnings:

  - You are about to drop the column `seatNumber` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `seatType` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `bookingOpen` on the `Show` table. All the data in the column will be lost.
  - Added the required column `bookingNumber` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfSeats` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `showTime` to the `Show` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "BookingSeat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bookingId" INTEGER NOT NULL,
    "seatNumber" TEXT NOT NULL,
    CONSTRAINT "BookingSeat_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bookingNumber" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "showId" INTEGER NOT NULL,
    "numberOfSeats" INTEGER NOT NULL,
    "remarks" TEXT,
    "status" TEXT NOT NULL DEFAULT 'CONFIRMED',
    "bookedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Booking_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Booking" ("bookedAt", "id", "showId", "userId") SELECT "bookedAt", "id", "showId", "userId" FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
CREATE UNIQUE INDEX "Booking_bookingNumber_key" ON "Booking"("bookingNumber");
CREATE TABLE "new_Show" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" INTEGER NOT NULL,
    "showDate" DATETIME NOT NULL,
    "showTime" TEXT NOT NULL,
    "totalSeats" INTEGER NOT NULL DEFAULT 174,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Show_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Show" ("createdAt", "id", "isActive", "movieId", "showDate", "totalSeats") SELECT "createdAt", "id", "isActive", "movieId", "showDate", "totalSeats" FROM "Show";
DROP TABLE "Show";
ALTER TABLE "new_Show" RENAME TO "Show";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
