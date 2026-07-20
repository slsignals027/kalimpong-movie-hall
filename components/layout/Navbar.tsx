import Link from "next/link";
import { Mountain } from "lucide-react";
import { auth } from "@/auth";
import LogoutButton from "@/components/auth/LogoutButton";
import MobileMenu from "./MobileMenu";

export default async function Navbar() {
  const session = await auth();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#F8F5EF]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-[#1B4332] p-2 text-white">
            <Mountain size={26} />
          </div>

          <div>
            <h1 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold tracking-wide text-[#1B4332]">
              KALIMPONG
            </h1>

            <p className="-mt-1 text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-600">
              Movie Hall
            </p>
          </div>
        </Link>

        {/* Navigation */}

<nav className="hidden items-center gap-10 md:flex">

  <Link
    href="/my-bookings"
    className="transition hover:text-[#C9A24B]"
  >
    My Bookings
  </Link>


  {session?.user?.role === "ADMIN" && (
    <Link
      href="/admin"
      className="font-semibold text-[#1B4332] transition hover:text-[#C9A24B]"
    >
      Admin
    </Link>
  )}

</nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">

  {!session ? (
    <>
      <Link
        href="/login"
        className="rounded-xl border border-[#1B4332] px-6 py-3 text-[#1B4332] transition hover:bg-[#1B4332] hover:text-white"
      >
        Login
      </Link>

      <Link
        href="/signup"
        className="rounded-xl bg-[#1B4332] px-6 py-3 text-white transition hover:bg-[#143526]"
      >
        Sign Up
      </Link>
    </>
  ) : (
    <div className="flex items-center gap-4">

  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1B4332] text-lg font-bold text-white">
    {session.user?.name?.charAt(0).toUpperCase()}
  </div>

<div className="hidden lg:flex flex-col">

    <span className="text-xs sm:text-sm text-gray-500">
      Welcome
    </span>

    <span className="font-semibold text-[#1B4332]">
      {session.user?.name}
    </span>

  </div>

  <LogoutButton />
  
</div>


  )}

</div>
 <div className="md:hidden">
  <div className="md:hidden">
  <MobileMenu
    loggedIn={!!session}
    isAdmin={session?.user?.role === "ADMIN"}
    userName={session?.user?.name ?? ""}
  />
</div>
</div>
</div>

      </div>
    </header>
  );
}