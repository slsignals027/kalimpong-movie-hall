"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function GalleryLightbox({
  images,
  current,
  onClose,
  onNext,
  onPrev,
}: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();

      if (e.key === "ArrowRight") onNext();

      if (e.key === "ArrowLeft") onPrev();
    }

    window.addEventListener("keydown", handleKey);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <ChevronLeft size={34} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <ChevronRight size={34} />
      </button>

      <div
        className="relative h-[90vh] w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current]}
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-8 text-lg text-white">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}