import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const movieCount = await prisma.movie.count();

  const pollCount = await prisma.poll.count();

  const showCount = await prisma.show.count();

  const userCount = await prisma.user.count();

  const announcementCount =
    await prisma.announcement.count();

  return (
    <main className="mx-auto max-w-6xl p-10">

      <h1 className="mb-10 text-4xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* Movies */}

        <div className="rounded-lg border p-6 shadow">

          <h2 className="text-2xl font-semibold">
            🎬 Movies
          </h2>

          <p className="mt-3 text-gray-600">
            {movieCount} movies available
          </p>

          <Link
            href="/admin/movies"
            className="mt-5 inline-block rounded bg-green-600 px-5 py-2 text-white"
          >
            Manage Movies
          </Link>

        </div>

        {/* Polls */}

        <div className="rounded-lg border p-6 shadow">

          <h2 className="text-2xl font-semibold">
            🗳 Polls
          </h2>

          <p className="mt-3 text-gray-600">
            {pollCount} polls created
          </p>

          <Link
            href="/admin/polls"
            className="mt-5 inline-block rounded bg-green-600 px-5 py-2 text-white"
          >
            Manage Polls
          </Link>

        </div>

        {/* Shows */}

        <div className="rounded-lg border p-6 shadow">

          <h2 className="text-2xl font-semibold">
            🎟 Shows
          </h2>

          <p className="mt-3 text-gray-600">
            {showCount} shows scheduled
          </p>

          <Link
            href="/admin/shows"
            className="mt-5 inline-block rounded bg-green-600 px-5 py-2 text-white"
          >
            Manage Shows
          </Link>

        </div>

        {/* Announcements */}

        <div className="rounded-lg border p-6 shadow">

          <h2 className="text-2xl font-semibold">
            📢 Announcements
          </h2>

          <p className="mt-3 text-gray-600">
            {announcementCount} announcements
          </p>

          <Link
            href="/admin/announcements"
            className="mt-5 inline-block rounded bg-green-600 px-5 py-2 text-white"
          >
            Manage Announcements
          </Link>

        </div>

        {/* Users */}

        <div className="rounded-lg border p-6 shadow">

          <h2 className="text-2xl font-semibold">
            👥 Users
          </h2>

          <p className="mt-3 text-gray-600">
            {userCount} registered users
          </p>

          <Link
            href="/admin/users"
            className="mt-5 inline-block rounded bg-green-600 px-5 py-2 text-white"
          >
            Manage Users
          </Link>

        </div>

      </div>

    </main>
  );
}