export default function Footer() {
  return (
    <footer className="bg-[#1B4332] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-8 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">
            KALIMPONG MOVIE HALL
          </h2>

          <p className="mt-3 text-gray-300">
            Community Cinema for Society Residents
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <ul className="mt-3 space-y-2 text-gray-300">
            <li>Home</li>
            <li>Shows</li>
            <li>Gallery</li>
            <li>My Bookings</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>

          <p className="mt-3 text-gray-300">
            moviehall@society.com
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        © 2026 Kalimpong Movie Hall. All Rights Reserved.
      </div>
    </footer>
  );
}