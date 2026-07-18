"use client";

import { changeUserRole } from "@/actions/users";
import { useRouter } from "next/navigation";
import type { User } from "@prisma/client";

export default function ChangeUserRoleButton({
  user,
}: {
  user: User;
}) {
  const router = useRouter();

  async function handleClick() {
    const result = await changeUserRole(
      user.id,
      user.role
    );

    if (result.success) {
      router.refresh();
    } else {
      alert("Failed to update role.");
    }
  }

  return (
    <button
      onClick={handleClick}
      className="text-blue-600 hover:text-blue-800"
    >
      {user.role === "ADMIN"
        ? "Make User"
        : "Make Admin"}
    </button>
  );
}