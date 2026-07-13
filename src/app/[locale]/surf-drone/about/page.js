"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useTranslations} from "next-intl";
import Logo from "@/components/Logo";

export default function About() {
  const t = useTranslations("about");
    const [openSection, setOpenSection] = useState(null);
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


  <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.35,
    delay: 0.35,
    ease: "easeOut",
  }}
>

  <div className="border-b border-zinc-800">

    <motion.button
      onClick={() =>
        setOpenSection(openSection === "how" ? null : "how")
      }
      className="group w-full py-6 flex items-center gap-4 transition-colors duration-200"
    >
      <motion.span
        animate={{
          rotate: openSection === "how" ? 90 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="text-zinc-600 group-hover:text-zinc-300 text-2xl transition-colors duration-200"
      >
        ›
      </motion.span>

      <span className="text-2xl font-medium text-zinc-400 group-hover:text-white transition-colors duration-200">
        {t("howItWorks")}
      </span>

    </motion.button>

    <AnimatePresence>

      {openSection === "how" && (

  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="overflow-hidden"
  >

    <div className="pb-6 pl-10 text-zinc-400 space-y-6">

      <p>
        {t("howText1")}
      </p>

      <p>
        {t("howText2")}
      </p>

      <p>
        {t("howText3")}
      </p>

      <p>
        {t("howText4")}
      </p>

    </div>

  </motion.div>

)}

</AnimatePresence>

</div>

</motion.div>

<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.35,
    delay: 0.45,
    ease: "easeOut",
  }}
>

  <div className="border-b border-zinc-800">

  <motion.button
    onClick={() =>
      setOpenSection(openSection === "pricing" ? null : "pricing")
    }
    className="group w-full py-6 flex items-center gap-4 transition-colors duration-200"
  >
    <motion.span
      animate={{
        rotate: openSection === "pricing" ? 90 : 0,
      }}
      transition={{ duration: 0.2 }}
      className="text-zinc-600 group-hover:text-zinc-300 text-2xl transition-colors duration-200"
    >
      ›
    </motion.span>

    <span className="text-2xl font-medium text-zinc-400 group-hover:text-white transition-colors duration-200">
      {t("pricing")}
    </span>

  </motion.button>

  <AnimatePresence>

    {openSection === "pricing" && (

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >

        <div className="pb-6 pl-10 text-zinc-400">

          <div className="pb-6 pl-10 text-zinc-400 space-y-8">
  <p>
  {t("pricingIntro")}
</p>

<div className="space-y-5">

  <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
    <span>
      {t("beginner")}
    </span>

    <span>
      1,000,000 IDR
    </span>
  </div>

  <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
    <span>
      {t("intermediate")}
    </span>

    <span>
      1,500,000 IDR
    </span>
  </div>

  <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
    <span>
      {t("advanced")}
    </span>

    <span>
      2,000,000 IDR
    </span>
  </div>

</div>

<p>
  {t("sessionDuration")}
</p>

<p>
  {t("customOption")}
</p>

<p>
  {t("discount")}
</p>

</div>

                    </div>

        </motion.div>

      )}

    </AnimatePresence>

  </div>

</motion.div>

<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.35,
    delay: 0.55,
    ease: "easeOut",
  }}
>

  <div className="border-b border-zinc-800">

    <motion.button
      onClick={() =>
        setOpenSection(openSection === "book" ? null : "book")
      }
      className="group w-full py-6 flex items-center gap-4 transition-colors duration-200"
    >
      <motion.span
        animate={{
          rotate: openSection === "book" ? 90 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="text-zinc-600 group-hover:text-zinc-300 text-2xl transition-colors duration-200"
      >
        ›
      </motion.span>

      <span className="text-2xl font-medium text-zinc-400 group-hover:text-white transition-colors duration-200">
        {t("bookSession")}
      </span>

    </motion.button>

    <AnimatePresence>

      {openSection === "book" && (

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >

          <div className="pb-6 pl-10 text-zinc-400">

  <div className="pb-6 pl-10 text-zinc-400 space-y-6">

    <p>
      {t("bookIntro")}
    </p>

    <p>
      {t("bookText1")}
      <br />
      {t("bookText2")}
    </p>

    <div className="space-y-3">

      <a
        href="https://www.instagram.com/junkie.surf"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-lg text-zinc-300 hover:text-white transition-colors duration-200"
      >
        Instagram
      </a>

      <a
        href="https://wa.me/6281215611429"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-lg text-zinc-300 hover:text-white transition-colors duration-200"
      >
        WhatsApp
      </a>

    <a
  href="https://t.me/surfhunters"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-lg text-zinc-300 hover:text-white transition-colors duration-200"
>
  Telegram
</a>

</div>

</div>

</div>

</motion.div>

)}

</AnimatePresence>

</div>

</motion.div>

</div>

</main>
);
}