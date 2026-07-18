"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export async function changeUserRole(
  userId: number,
  currentRole: string
) {
  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role:
          currentRole === "ADMIN"
            ? "USER"
            : "ADMIN",
      },
    });

    revalidatePath("/admin/users");

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
    };
  }
}

export async function deleteUser(userId: number) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        message: "Unauthorized.",
      };
    }

    // Prevent deleting yourself
    if (Number(session.user.id) === userId) {
      return {
        success: false,
        message: "You cannot delete your own account.",
      };
    }

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    revalidatePath("/admin/users");

    return {
      success: true,
      message: "User deleted successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to delete user.",
    };
  }
}