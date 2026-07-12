"use client";

import {useState} from "react";
import Link from "next/link";
import {useLocale} from "next-intl";
import {Marck_Script} from "next/font/google";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const marck = Marck_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Logo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();

  return (
    <div className="absolute top-[-5px] left-[-15px] right-[10px] z-50 flex justify-between items-center">

      <Link href={`/${locale}`} className="flex items-center gap-0">
        <img
          src="/logo.png"
          alt="Surf Hunters"
          className="h-26 w-auto"
        />

        <span
          className={`${marck.className} text-[40px] ml-[-42px] text-white/80`}
        >
          Surf Hunters
        </span>
      </Link>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="flex items-center gap-5">
        <LanguageSwitcher />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-12 h-12 flex items-center justify-center text-white/80 hover:text-white transition"
        >
          ☰
        </button>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          absolute
          top-16
          right-2
          z-50
          w-64
          overflow-hidden
          transition-all
          duration-[1000ms]
          ease-in-out
          ${
            menuOpen
              ? "max-h-60 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <Link href={`/${locale}/cameras`}
          className="block py-4 text-sm tracking-[0.35em] uppercase text-zinc-400 hover:text-white border-b border-zinc-800">
          Surf Cam
        </Link>

        <Link href={`/${locale}/surf-drone`}
          className="block py-4 text-sm tracking-[0.35em] uppercase text-zinc-400 hover:text-white border-b border-zinc-800">
          Surf Drone
        </Link>

        <Link href={`/${locale}/surf-drone/contact`}
          className="block py-4 text-sm tracking-[0.35em] uppercase text-zinc-400 hover:text-white border-b border-zinc-800">
          Contact
        </Link>
      </div>

    </div>
  );
}