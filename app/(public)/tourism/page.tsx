import Link from "next/link";

const destinations = [
  {
    name: "Gurudongmar Lake",
    description:
      "A spectacular high-altitude lake surrounded by snow-covered mountains.",
  },
  {
    name: "Yumthang Valley",
    description:
      "The Valley of Flowers, famous for colourful blooms and mountain views.",
  },
  {
    name: "Zero Point – Yumesamdong",
    description:
      "A dramatic destination near the Indo-China border with beautiful snow scenery.",
  },
  {
    name: "Lachung",
    description:
      "A peaceful mountain village and gateway to Yumthang Valley.",
  },
  {
    name: "Lachen",
    description:
      "A scenic village commonly used as the base for visiting Gurudongmar Lake.",
  },
  {
    name: "Namchi",
    description:
      "A South Sikkim town known for monasteries, gardens and mountain views.",
  },
];

export default function TourismPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Discover Sikkim
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Explore North Sikkim
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Discover beautiful lakes, valleys, villages and snow-covered
          landscapes across Sikkim.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-emerald-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Back to Movie Booking
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <article
            key={destination.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-bold">{destination.name}</h2>

            <p className="mt-3 leading-7 text-slate-300">
              {destination.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}