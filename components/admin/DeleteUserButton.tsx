"use client";

import { deleteUser } from "@/actions/users";
import { useRouter } from "next/navigation";

export default function DeleteUserButton({
  userId,
}: {
  userId: number;
}) {
  const router = useRouter();

 async function handleDelete() {
  const ok = confirm("Delete this user?");

  if (!ok) return;

  const result = await deleteUser(userId);

  if (result.success) {
    router.refresh();
  } else {
    alert(result.message);
  }
}

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-800"
    >
      Delete
    </button>
  );
}