/*
  Warnings:

  - Added the required column `updatedAt` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "backdrop" TEXT NOT NULL,
    "trailerUrl" TEXT,
    "genre" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "imdbRating" REAL NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Movie" ("backdrop", "description", "duration", "genre", "id", "imdbRating", "isActive", "language", "poster", "releaseYear", "title", "trailerUrl") SELECT "backdrop", "description", "duration", "genre", "id", "imdbRating", "isActive", "language", "poster", "releaseYear", "title", "trailerUrl" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
