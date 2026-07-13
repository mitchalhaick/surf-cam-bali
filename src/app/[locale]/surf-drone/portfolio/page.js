"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import {useTranslations} from "next-intl";
import Logo from "@/components/Logo";

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const [openVideo, setOpenVideo] = useState(null);

  return (

    <main className="min-h-screen text-white">

      <Logo />

      <div className="max-w-5xl mx-auto px-8 py-16">

        <motion.h1
          className="text-5xl font-bold mt-14 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {t("title")}
        </motion.h1>

        <motion.p
          className="text-zinc-400 mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t("description")}
        </motion.p>


        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">

          {/* Video 1 */}
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
  duration: 1.5,
  delay: 0.30,
  ease: "linear",
}}
>
            <div
  onClick={() => setOpenVideo("/videos/video1.mov")}
  className="
    group
    relative
    aspect-[9/16]
    cursor-pointer
    overflow-hidden
    rounded-xl
    hover:scale-[1.02]
    transition-all
    duration-200
  "
>

  <img
    src="/images/video1.jpg"
    alt="Video 1"
    className="
      w-full
      h-full
      object-cover
      transition-all
      duration-200
    "
  />

  <div
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-200
    "
  >
    <span className="text-5xl text-white">
      ▶
    </span>
  </div>

</div>
          </motion.div>

          {/* Video 2 */}
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
  duration: 1.5,
  delay: 0.40,
  ease: "linear",
}}
>
            <div
  onClick={() => setOpenVideo("/videos/video2.mov")}
  className="
    group
    relative
    aspect-[9/16]
    cursor-pointer
    overflow-hidden
    rounded-3xl
    hover:scale-[1.02]
    transition-all
    duration-200
  "
>

  <img
    src="/images/video2.jpg"
    alt="Video 2"
    className="
      w-full
      h-full
      object-cover
      transition-all
      duration-200
    "
  />

  <div
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-200
    "
  >
    <span className="text-5xl text-white">
      ▶
    </span>
  </div>

</div>
          </motion.div>

          {/* Video 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
  duration: 1.5,
  delay: 0.50,
  ease: "linear",
}}
          >
            <div
  onClick={() => setOpenVideo("/videos/video3.mov")}
  className="
    group
    relative
    aspect-[9/16]
    cursor-pointer
    overflow-hidden
    rounded-3xl
    hover:scale-[1.02]
    transition-all
    duration-200
  "
>

  <img
    src="/images/video3.jpg"
    alt="Video 3"
    className="
      w-full
      h-full
      object-cover
      transition-all
      duration-200
    "
  />

  <div
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-200
    "
  >
    <span className="text-5xl text-white">
      ▶
    </span>
  </div>

</div>
          </motion.div>

          {/* Video 4 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
  duration: 1.5,
  delay: 0.50,
  ease: "linear",
}}
          >
            <div
  onClick={() => setOpenVideo("/videos/video4.mov")}
  className="
    group
    relative
    aspect-[9/16]
    cursor-pointer
    overflow-hidden
    rounded-3xl
    hover:scale-[1.02]
    transition-all
    duration-200
  "
>

  <img
    src="/images/video4.jpg"
    alt="Video 4"
    className="
      w-full
      h-full
      object-cover
      transition-all
      duration-200
    "
  />

  <div
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-200
    "
  >
    <span className="text-5xl text-white">
      ▶
    </span>
  </div>

</div>
          </motion.div>

          {/* Video 5 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
  duration: 1.5,
  delay: 0.40,
  ease: "linear",
}}
          >
            <div
  onClick={() => setOpenVideo("/videos/video5.mov")}
  className="
    group
    relative
    aspect-[9/16]
    cursor-pointer
    overflow-hidden
    rounded-3xl
    hover:scale-[1.02]
    transition-all
    duration-200
  "
>

  <img
    src="/images/video5.jpg"
    alt="Video 5"
    className="
      w-full
      h-full
      object-cover
      transition-all
      duration-200
    "
  />

  <div
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-200
    "
  >
    <span className="text-5xl text-white">
      ▶
    </span>
  </div>

</div>
          </motion.div>

          {/* Video 6 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
  duration: 1.5,
  delay: 0.30,
  ease: "linear",
}}
          >
            <div
  onClick={() => setOpenVideo("/videos/video6.mov")}
  className="
    group
    relative
    aspect-[9/16]
    cursor-pointer
    overflow-hidden
    rounded-3xl
    hover:scale-[1.02]
    transition-all
    duration-200
  "
>

  <img
    src="/images/video6.jpg"
    alt="Video 6"
    className="
      w-full
      h-full
      object-cover
      transition-all
      duration-200
    "
  />

  <div
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-200
    "
  >
    <span className="text-5xl text-white">
      ▶
    </span>
  </div>

</div>
          </motion.div>

        </div>

<motion.div
  className="text-center mt-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.6,
    delay: 0.9,
  }}
>

  <p className="text-zinc-500">
  {t("moreVideos")}{" "}

  <a
    href="https://www.instagram.com/junkie.surf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-300 hover:text-white transition-colors duration-200"
  >
    Instagram
  </a>

  .
</p>

</motion.div>

      </div>


      {openVideo && (

        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setOpenVideo(null)}
        >

          <button
            onClick={() => setOpenVideo(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 text-white text-3xl flex items-center justify-center"
          >
            ×
          </button>

          <video
            controls
            autoPlay
            className="max-w-[90vw] max-h-[90vh] rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <source src={openVideo} type="video/mp4" />
          </video>

        </div>

      )}

    </main>

  );

}