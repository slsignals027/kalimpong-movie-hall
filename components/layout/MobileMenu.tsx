"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LogoutButton from "@/components/auth/LogoutButton";

type Props = {
  isAdmin: boolean;
  loggedIn: boolean;
  userName?: string;
};

export default function MobileMenu({
  isAdmin,
  loggedIn,
  userName,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 md:hidden"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute left-0 top-20 w-full border-t border-white/20 bg-[#F8F5EF] shadow-lg md:hidden">

          <div className="flex flex-col p-6">
            {loggedIn && (
  <div className="mb-6 flex items-center gap-4 border-b pb-5">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B4332] text-lg font-bold text-white">
      {userName?.charAt(0).toUpperCase()}
    </div>

    <div>
      <p className="text-sm text-gray-500">
        Welcome
      </p>

      <p className="font-semibold text-[#1B4332]">
        {userName}
      </p>
    </div>

  </div>
)}

            {loggedIn && (
              <Link
                href="/my-bookings"
                onClick={() => setOpen(false)}
                className="py-3 text-lg"
              >
                My Bookings
              </Link>
            )}

            {isAdmin && (
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="py-3 text-lg"
              >
                Admin
              </Link>
            )}

            {!loggedIn ? (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-xl border border-[#1B4332] py-3 text-center"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-xl bg-[#1B4332] py-3 text-center text-white"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="mt-4">
                <LogoutButton />
              </div>
            )}
          </div>

        </div>
      )}
    </>
  );
}