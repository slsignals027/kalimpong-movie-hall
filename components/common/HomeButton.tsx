import Link from "next/link";
import { Home } from "lucide-react";

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-[#1B4332]
        bg-white
        px-4
        py-2
        text-sm
        font-semibold
        text-[#1B4332]
        shadow-sm
        transition
        hover:bg-[#1B4332]
        hover:text-white
      "
    >
      <Home size={18} />
      Home
    </Link>
  );
}