-- CreateTable
CREATE TABLE "PollMovie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pollId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    CONSTRAINT "PollMovie_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Poll" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PollMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PollMovie_pollId_movieId_key" ON "PollMovie"("pollId", "movieId");
