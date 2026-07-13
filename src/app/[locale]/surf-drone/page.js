"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import Logo from "@/components/Logo";
export default function SurfDrone() {
  const t = useTranslations("surfDrone");
const locale = useLocale();
  return (
    <main className="min-h-screen text-white">

<Logo />

      <div className="max-w-6xl mx-auto px-8 py-16">


        <motion.h1
  className="text-5xl font-bold mt-14 mb-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  {t("title")}
</motion.h1>

<div className="max-w-lg mx-auto mt-12 space-y-8">

  <Link href={`/${locale}/surf-drone/about`} className="block">

  <motion.div
    className="
  block
  w-full
  rounded-3xl
  p-8
  bg-black/10
  backdrop-blur-xl
  border
  border-white/10
  hover:bg-black/40
  hover:border-white/20
  transition-[background-color,border-color]
  duration-300
"
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1.2,
      ease: "easeOut",
    }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
      {t("about")}
    </h2>

    <p className="text-zinc-400 text-base mb-6">
      {t("aboutDescription")}
    </p>

    <div className="text-sm text-white">
      {t("open")}
    </div>
  </motion.div>

</Link>

 <Link href={`/${locale}/surf-drone/portfolio`} className="block">

  <motion.div
    className="
  block
  w-full
  rounded-3xl
  p-8
  bg-black/10
  backdrop-blur-xl
  border
  border-white/10
  hover:bg-black/40
  hover:border-white/20
  transition-[background-color,border-color]
  duration-300
"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 1,
      delay: 1,
      ease: "easeOut",
    }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
      {t("portfolio")}
    </h2>

    <p className="text-zinc-400 text-base mb-6">
      {t("portfolioDescription")}
    </p>

    <div className="text-sm text-white">
      {t("open")}
    </div>
  </motion.div>

</Link>

  <Link href={`/${locale}/surf-drone/contact`} className="block">

  <motion.div
    className="
  block
  w-full
  rounded-3xl
  p-8
  bg-black/10
  backdrop-blur-xl
  border
  border-white/10
  hover:bg-black/40
  hover:border-white/20
  transition-[background-color,border-color]
  duration-300
"
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1.2,
      ease: "easeOut",
    }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
      {t("contact")}
    </h2>

    <p className="text-zinc-400 text-base mb-6">
      {t("contactDescription")}
    </p>

    <div className="text-sm text-white">
      {t("open")}
    </div>
  </motion.div>

</Link>

</div>

</div>

</main>
);
}