import Image from "next/image";
import Link from "next/link";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A24B]">
            Memories
          </p>

          <h2 className="mt-3 text-5xl font-black text-[#1B4332]">
            Gallery
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Relive the best moments from our movie nights,
            screenings and events.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {images.map((image, index) => (

            <Link
              key={index}
              href="/gallery"
              className="group relative overflow-hidden rounded-3xl"
            >

              <Image
                src={image}
                alt="Gallery"
                width={600}
                height={600}
                className="aspect-square object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/40">

                <span className="translate-y-4 text-4xl text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    +
                </span>

              </div>

            </Link>

          ))}

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/gallery"
            className="rounded-xl bg-[#1B4332] px-8 py-4 font-semibold text-white transition hover:bg-[#143526]"
          >
            View Full Gallery
          </Link>

        </div>

      </div>
    </section>
  );
}