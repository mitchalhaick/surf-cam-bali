"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import Logo from "@/components/Logo";

export default function Cameras() {
  const t = useTranslations("cameras");
  const locale = useLocale();

  return (
    <main className="min-h-screen text-white">

<Logo />

      <div className="max-w-6xl mx-auto px-8 py-16">

        

        <motion.h1
  className="text-5xl font-bold mt-14 mb-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  {t("title")}
</motion.h1>

<motion.p
  className="text-zinc-400 mb-12"
  initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.7, delay: 0.2 }}
>
  {t("description")}
</motion.p>

<div className="grid md:grid-cols-2 gap-6">

  <motion.div
  className="
  block
  rounded-3xl
  p-8
  bg-black/10
  backdrop-blur-xl
  border
  border-white/10
  hover:bg-black/40
  hover:border-white/20
  hover:scale-[1.02]
  hover:-translate-y-1
  transition-[background-color,border-color,box-shadow]
  duration-300
"
initial={{ opacity: 0, scale: 0.98 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.7,
  delay: 0.35,
  ease: "easeOut",
}}
>
  <Link href={`/${locale}/kuta-reef`} className="block">

    <div className="flex items-start justify-between mb-4">

      <h2 className="text-3xl font-semibold">
        Kuta Reef
      </h2>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>

        <span className="text-xs tracking-[0.25em] text-zinc-400">
          {t("live")}
        </span>
      </div>

    </div>

    <div className="
  aspect-video
  bg-black/20
  backdrop-blur-md
  border
  border-white/10
  rounded-2xl
  mb-6
  flex
  flex-col
  items-center
  justify-center
  text-zinc-400
">
      <div>{t("preview")}</div>

      <div className="text-sm mt-2">
        {t("comingSoon")}
      </div>
    </div>

    <div className="text-zinc-400">
      {t("watch")}
    </div>

  </Link>

</motion.div>

<motion.div
className="
  block
  rounded-3xl
  p-8
  bg-black/10
  backdrop-blur-xl
  border
  border-white/10
  hover:bg-black/40
  hover:border-white/20
  hover:scale-[1.02]
  hover:-translate-y-1
  transition-[background-color,border-color,box-shadow]
  duration-300
"
initial={{ opacity: 0, scale: 0.98 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 0.7,
  delay: 0.35,
  ease: "easeOut",
}}
>
  <Link href={`/${locale}/old-mans`} className="block">

    <div className="flex items-start justify-between mb-4">

      <h2 className="text-3xl font-semibold">
        Old Man's
      </h2>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>

        <span className="text-xs tracking-[0.25em] text-zinc-400">
          {t("live")}
        </span>
      </div>

    </div>

    <div className="
  aspect-video
  bg-black/20
  backdrop-blur-md
  border
  border-white/10
  rounded-2xl
  mb-6
  flex
  flex-col
  items-center
  justify-center
  text-zinc-400
">
      <div>{t("preview")}</div>

      <div className="text-sm mt-2">
        {t("comingSoon")}
      </div>
    </div>

    <div className="text-zinc-400">
      {t("watch")}
    </div>

  </Link>

</motion.div>

        </div>

      </div>
    </main>
  );
}