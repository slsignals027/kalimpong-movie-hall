-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Show" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" INTEGER NOT NULL,
    "showDate" DATETIME NOT NULL,
    "showTime" TEXT NOT NULL,
    "totalSeats" INTEGER NOT NULL DEFAULT 174,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "bookingOpen" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Show_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Show" ("createdAt", "id", "isActive", "movieId", "showDate", "showTime", "totalSeats") SELECT "createdAt", "id", "isActive", "movieId", "showDate", "showTime", "totalSeats" FROM "Show";
DROP TABLE "Show";
ALTER TABLE "new_Show" RENAME TO "Show";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
