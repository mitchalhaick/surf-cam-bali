"use client";

import { motion } from "framer-motion";
import {useTranslations} from "next-intl";
import Logo from "@/components/Logo";

export default function Home() {
  const t = useTranslations("navigation");

  return (
    <main className="min-h-screen text-white">

<Logo />


  <div className="max-w-6xl mx-auto px-8 py-16">

        <div className="max-w-lg mx-auto mt-32 space-y-8">

          <motion.a
  href="/cameras"
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
  hover:-translate-y-1
  transition-[background-color,border-color,box-shadow]
duration-300
"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.3,
    ease: "easeOut",
  }}
>
  <h2 className="text-2xl md:text-3xl font-semibold mb-3">
  {t("surfCam")}
</h2>

  <p className="text-zinc-400 text-base mb-6">
  {t("liveConditions")}
</p>

  <div className="text-sm text-white">
    {t("open")}
  </div>
</motion.a>

          <motion.a
  href="/surf-drone"
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
  hover:-translate-y-1
  transition-[background-color,border-color,box-shadow]
duration-300
"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 0.55,
    ease: "easeOut",
  }}
>
  <h2 className="text-2xl md:text-3xl font-semibold mb-3">
  {t("surfDrone")}
</h2>

  <p className="text-zinc-400 text-base mb-6">
  {t("droneDescription")}
</p>

  <div className="text-sm text-white">
    {t("open")}
  </div>
</motion.a>

        </div>

      </div>

    </main>
  );
}