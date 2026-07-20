export default function Screen() {
  return (
    <div className="mb-10 w-full">

      {/* Glow */}

      <div className="mx-auto h-4 w-full rounded-full bg-white/50 blur-2xl" />

      {/* Screen */}

      <div
        className="
          mx-auto
          flex
          h-12
          w-full
          items-center
          justify-center
          rounded-t-[100px]
          border
          border-gray-300
          bg-gradient-to-b
          from-white
          to-gray-300
          shadow-[0_15px_50px_rgba(255,255,255,0.45)]
        "
      >
        <span className="text-sm font-bold tracking-[0.45em] text-gray-700">
          SCREEN
        </span>
      </div>

      <p className="mt-3 text-center text-xs uppercase tracking-[0.25em] text-gray-400">
        All Eyes This Way
      </p>

    </div>
  );
}