"use client";

import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import Logo from "@/components/Logo";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <main className="min-h-screen bg-black text-white">

      <Logo />

      <div className="max-w-5xl mx-auto px-8 py-16">

        <motion.h1
          className="text-5xl font-bold mt-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t("title")}
        </motion.h1>

        <motion.p
  className="text-zinc-400 text-lg max-w-2xl mb-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.7,
    delay: 0.2,
  }}
>
  {t("description1")}
  <br />
  <br />
  {t("description2")}
</motion.p>

<motion.div
  className="flex justify-center gap-16"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.5,
  }}
>

  <a
    href="https://www.instagram.com/junkie.surf"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
  >
    <img
      src="https://cdn.simpleicons.org/instagram/white"
      alt="Instagram"
      className="w-14 h-14"
    />
  </a>

  <a
    href="https://wa.me/6281215611429"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
  >
    <img
      src="https://cdn.simpleicons.org/whatsapp/white"
      alt="WhatsApp"
      className="w-14 h-14"
    />
  </a>

  <a
    href="https://t.me/monitorchatov"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
  >
    <img
      src="https://cdn.simpleicons.org/telegram/white"
      alt="Telegram"
      className="w-14 h-14"
    />
  </a>

</motion.div>

        <motion.p
  className="text-center text-zinc-500 mt-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.6,
    delay: 0.8,
  }}
>
  {t("footer")}
</motion.p>

      </div>

    </main>
  );
}