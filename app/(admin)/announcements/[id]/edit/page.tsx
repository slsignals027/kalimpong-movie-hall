import { prisma } from "@/lib/prisma";
import AnnouncementForm from "@/components/admin/AnnouncementForm";

export default async function EditAnnouncementPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const announcement =
    await prisma.announcement.findUnique({
      where: {
        id: Number(id),
      },
    });

  if (!announcement) {
    return (
      <h1 className="p-10 text-3xl">
        Announcement not found
      </h1>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-10">

      <h1 className="mb-8 text-3xl font-bold">
        Edit Announcement
      </h1>

      <AnnouncementForm
        announcement={announcement}
      />

    </main>
  );
}