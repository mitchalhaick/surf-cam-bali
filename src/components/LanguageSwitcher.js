"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const isRu = pathname.startsWith("/ru");

  const ruPath = pathname.replace(/^\/en/, "/ru");
  const enPath = pathname.replace(/^\/ru/, "/en");

  return (
    <div className="flex items-center justify-center gap-2 py-5 text-sm tracking-[0.3em] uppercase">
      <Link
        href={ruPath}
        className={`transition-colors duration-200 ${
          isRu
            ? "text-white"
            : "text-zinc-500 hover:text-white"
        }`}
      >
        RU
      </Link>

      <span className="text-zinc-700">|</span>

      <Link
        href={enPath}
        className={`transition-colors duration-200 ${
          !isRu
            ? "text-white"
            : "text-zinc-500 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}