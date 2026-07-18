import Link from "next/link";
import { prisma } from "@/lib/prisma";

import DeleteAnnouncementButton from "@/components/admin/DeleteAnnouncementButton";
import ToggleAnnouncementButton from "@/components/admin/ToggleAnnouncementButton";

export default async function AnnouncementsPage() {
  const announcements = await prisma.announcement.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-7xl p-10">

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Announcement Management
        </h1>

        <Link
          href="/admin/announcements/new"
          className="rounded bg-green-600 px-5 py-2 text-white"
        >
          + Add Announcement
        </Link>

      </div>

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>

            <th className="border p-3">
              Title
            </th>

            <th className="border p-3">
              Message
            </th>

            <th className="border p-3">
              Status
            </th>

            <th className="border p-3">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {announcements.map((announcement) => (

            <tr key={announcement.id}>

              <td className="border p-3 font-semibold">
                {announcement.title}
              </td>

              <td className="border p-3">
                {announcement.message}
              </td>

              <td className="border p-3">

                <ToggleAnnouncementButton
                  id={announcement.id}
                  active={announcement.isActive}
                />

              </td>

              <td className="border p-3 space-x-4">

                <Link
                  href={`/admin/announcements/${announcement.id}/edit`}
                  className="text-blue-600"
                >
                  Edit
                </Link>

                <DeleteAnnouncementButton
                  id={announcement.id}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>
  );
}