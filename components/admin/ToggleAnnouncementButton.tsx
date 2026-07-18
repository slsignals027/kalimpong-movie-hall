"use client";

import { toggleAnnouncement } from "@/actions/announcement";

export default function ToggleAnnouncementButton({
  id,
  active,
}: {
  id: number;
  active: boolean;
}) {
  return (
    <form action={toggleAnnouncement}>
      <input
        type="hidden"
        name="id"
        value={id}
      />

      <button
        className={`rounded px-3 py-1 text-white ${
          active
            ? "bg-green-600"
            : "bg-gray-500"
        }`}
      >
        {active ? "Active" : "Inactive"}
      </button>
    </form>
  );
}