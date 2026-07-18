"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryLightbox from "@/components/gallery/Gallery/GalleryLightbox";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
];

export default function GalleryPage() {
  const [current, setCurrent] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#F8F5EF]">

      <section className="py-24 text-center">

        <p className="font-semibold uppercase tracking-[0.4em] text-[#C9A24B]">
          Kalimpong Movie Hall
        </p>

        <h1 className="mt-4 text-6xl font-black text-[#1B4332]">
          Gallery
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Every movie night creates memories.
        </p>

      </section>

      <div className="mx-auto columns-1 gap-5 px-6 pb-20 sm:columns-2 lg:columns-3 xl:columns-4">

        {images.map((image, index) => (

          <div
            key={index}
            onClick={() => setCurrent(index)}
            className="group mb-5 cursor-pointer break-inside-avoid overflow-hidden rounded-3xl shadow-xl"
          >
            <Image
              src={image}
              alt=""
              width={700}
              height={900}
              className="w-full transition duration-500 group-hover:scale-105"
            />
          </div>

        ))}

      </div>

      {current !== null && (
        <GalleryLightbox
          images={images}
          current={current}
          onClose={() => setCurrent(null)}
          onNext={() =>
            setCurrent((current + 1) % images.length)
          }
          onPrev={() =>
            setCurrent(
              (current - 1 + images.length) % images.length
            )
          }
        />
      )}

    </main>
  );
}