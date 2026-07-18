import { prisma } from "@/lib/prisma";

export default async function Announcements() {
  const announcements =
    await prisma.announcement.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  if (announcements.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#1B4332] py-10 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-8 text-3xl font-bold">
          📢 Announcements
        </h2>

        <div className="space-y-5">

          {announcements.map((announcement) => (

            <div
              key={announcement.id}
              className="rounded-xl bg-white/10 p-5"
            >

              <h3 className="text-xl font-semibold">
                {announcement.title}
              </h3>

              <p className="mt-2 text-gray-200">
                {announcement.message}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}