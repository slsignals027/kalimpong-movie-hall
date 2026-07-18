import Image from "next/image";

type MovieCardProps = {
  title: string;
  poster: string;
  genre: string;
  rating: string;
  children?: React.ReactNode;
};

export default function MovieCard({
  title,
  poster,
  genre,
  rating,
  children,
}: MovieCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-96 overflow-hidden">
        <Image
          src={poster}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="mt-2 text-gray-600">
          ⭐ {rating} • {genre}
        </p>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}