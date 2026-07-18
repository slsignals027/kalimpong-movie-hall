"use client";

import { deleteShow } from "@/actions/show";
import { useRouter } from "next/navigation";

export default function DeleteShowButton({
  showId,
}: {
  showId: number;
}) {
  const router = useRouter();

  async function handleDelete() {
    const ok = confirm(
      "Delete this show?"
    );

    if (!ok) return;

    const result = await deleteShow(showId);

    if (result.success) {
      router.refresh();
    } else {
      alert("Failed to delete show.");
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