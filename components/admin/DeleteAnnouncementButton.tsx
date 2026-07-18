"use client";

import { deleteAnnouncement } from "@/actions/announcement";

export default function DeleteAnnouncementButton({
  id,
}: {
  id: number;
}) {
  return (
    <form action={deleteAnnouncement}>
      <input
        type="hidden"
        name="id"
        value={id}
      />

      <button
        className="text-red-600 hover:underline"
      >
        Delete
      </button>
    </form>
  );
}