"use client";

import { createAnnouncement, updateAnnouncement } from "@/actions/announcement";

type Announcement = {
  id: number;
  title: string;
  message: string;
  isActive: boolean;
};

export default function AnnouncementForm({
  announcement,
}: {
  announcement?: Announcement;
}) {
  const action = announcement
    ? updateAnnouncement.bind(null, announcement.id)
    : createAnnouncement;

  return (
    <form
      action={action}
      className="space-y-6 rounded-lg border bg-white p-6 shadow"
    >
      <div>
        <label className="mb-2 block font-medium">
          Title
        </label>

        <input
          type="text"
          name="title"
          defaultValue={announcement?.title}
          required
          className="w-full rounded border p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Message
        </label>

        <textarea
          name="message"
          rows={5}
          defaultValue={announcement?.message}
          required
          className="w-full rounded border p-3"
        />
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          name="isActive"
          defaultChecked={announcement?.isActive ?? true}
        />

        Active
      </label>

      <button
        type="submit"
        className="rounded bg-green-600 px-8 py-3 text-white"
      >
        {announcement ? "Update" : "Create"} Announcement
      </button>
    </form>
  );
}