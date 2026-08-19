import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
};

export default function PageHeader({ title }: Props) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-[#1B4332] sm:text-4xl">
        {title}
      </h1>

      {/* Home Button */}
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
          font-medium
          text-[#1B4332]
          shadow-sm
          transition
          hover:bg-[#1B4332]
          hover:text-white
        "
      >
        <ArrowLeft size={18} />
        Home
      </Link>

    </div>
  );
}