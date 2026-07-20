export default function Screen() {
  return (
    <div className="mb-12 flex flex-col items-center">

      {/* Glow */}

      <div className="h-4 w-[92%] rounded-full bg-white/50 blur-2xl" />

      {/* Screen */}

      <div
        className="
          flex
          h-12
          w-[92%]
          items-center
          justify-center
          rounded-t-full
          border
          border-gray-300
          bg-gradient-to-b
          from-white
          to-gray-300
          shadow-[0_15px_50px_rgba(255,255,255,0.45)]
        "
      >
        <span className="text-sm font-bold tracking-[0.5em] text-gray-700">
          SCREEN
        </span>
      </div>

      <p className="mt-3 text-xs tracking-[0.25em] text-gray-500 uppercase">
        All eyes this way
      </p>

    </div>
  );
}