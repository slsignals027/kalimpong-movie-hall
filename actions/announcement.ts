"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createAnnouncement(
  formData: FormData
) {
  await prisma.announcement.create({
    data: {
      title: formData.get("title") as string,
      message: formData.get("message") as string,
      isActive: formData.get("isActive") === "on",
    },
  });

  revalidatePath("/admin/announcements");
  revalidatePath("/");

  redirect("/admin/announcements");
}

export async function updateAnnouncement(
  id: number,
  formData: FormData
) {
  await prisma.announcement.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      message: formData.get("message") as string,
      isActive: formData.get("isActive") === "on",
    },
  });

  revalidatePath("/admin/announcements");
  revalidatePath("/");

  redirect("/admin/announcements");
}

export async function deleteAnnouncement(
  formData: FormData
) {
  const id = Number(formData.get("id"));

  await prisma.announcement.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/announcements");
  revalidatePath("/");
}

export async function toggleAnnouncement(
  formData: FormData
) {
  const id = Number(formData.get("id"));

  const announcement = await prisma.announcement.findUnique({
    where: {
      id,
    },
  });

  if (!announcement) return;

  await prisma.announcement.update({
    where: {
      id,
    },
    data: {
      isActive: !announcement.isActive,
    },
  });

  revalidatePath("/admin/announcements");
  revalidatePath("/");
}