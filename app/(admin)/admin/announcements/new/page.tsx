import AnnouncementForm from "@/components/admin/AnnouncementForm";

export default function NewAnnouncementPage() {
  return (
    <main className="mx-auto max-w-3xl p-10">

      <h1 className="mb-8 text-3xl font-bold">
        New Announcement
      </h1>

      <AnnouncementForm />

    </main>
  );
}