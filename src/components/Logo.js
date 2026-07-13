"use client";

import {useState} from "react";
import Link from "next/link";
import {Menu} from "lucide-react";
import localFont from "next/font/local";
import {useLocale, useTranslations} from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const tamera = localFont({
  src: "../fonts/Tamera Signature.ttf",
});

export default function Logo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("navigation");

  return (
    <div className="absolute top-[-5px] left-[-15px] right-[10px] z-50 flex justify-between items-center">

      <Link
  href={`/${locale}`}
  className="flex items-center gap-3"
>
  <img
    src="/logo.png"
    alt="Surf Hunters"
    className="h-[100px] w-auto shrink-0 relative left-[20px] top-[3px]"
  />

  <span
  className={`${tamera.className} text-[40px] text-white whitespace-nowrap relative top-[18px]`}
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

      <div>
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="w-12 h-12 flex items-center justify-center cursor-pointer text-white/80 hover:text-white transition"
  >
    <Menu size={30} strokeWidth={2} />
  </button>
</div>

      <div
        className={`
  absolute
  top-16
  right-2
  z-50
  w-64
  overflow-hidden

  rounded-3xl
  border border-white/5

  bg-white/[0.02]
  backdrop-blur-[24px]
  shadow-[0_8px_32px_rgba(0,0,0,0.25)]

  transition-all
  duration-[700ms]
  ease-out

  ${
    menuOpen
      ? "max-h-60 opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2"
  }
`}
      >
        <Link href={`/${locale}/cameras`}
          className="
block
px-6
py-5
text-sm
tracking-[0.35em]
uppercase
text-zinc-300
hover:text-white
transition-colors
border-b
border-white/5
">
          {t("surfCam")}
        </Link>

        <Link href={`/${locale}/surf-drone`}
          className="
block
px-6
py-5
text-sm
tracking-[0.35em]
uppercase
text-zinc-300
hover:text-white
transition-colors
border-b
border-white/5
">
          {t("surfDrone")}
        </Link>

        <Link href={`/${locale}/surf-drone/contact`}
          className="
block
px-6
py-5
text-sm
tracking-[0.35em]
uppercase
text-zinc-300
hover:text-white
transition-colors
border-b
border-white/5
">
          {t("contact")}
        </Link>

        <div className="border-t border-white/5">
  <LanguageSwitcher />
</div>

      </div>

    </div>
  );
}