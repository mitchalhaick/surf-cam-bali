"use client";
import { useState } from "react";
export default function SurfDrone() {
  const [openVideo, setOpenVideo] = useState(null);
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">

        <a
          href="/"
          className="text-zinc-500 hover:text-white"
        >
          ← Back
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-8">
          Surf Drone
        </h1>

        <div className="flex gap-8 mb-16 text-zinc-400">
          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#portfolio" className="hover:text-white">
            Portfolio
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <section id="about" className="mb-24">

  <div className="bg-zinc-900 rounded-3xl p-10">

    <div className="text-center text-zinc-500 text-sm tracking-[0.3em] mb-8">
      ABOUT
    </div>

    <p className="text-zinc-400 max-w-3xl mx-auto">
      Professional surf drone filming and photography in Bali.
      Capturing surfers from the air with cinematic footage and
      high-quality photography.
    </p>

  </div>

</section>

        <section id="portfolio" className="mb-24">
  <div className="bg-zinc-900 rounded-3xl p-10">

    <div className="text-center text-zinc-500 text-sm tracking-[0.3em] mb-8">
      PORTFOLIO
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-1">

  <div
  onClick={() => setOpenVideo("/videos/video1.mov")}
  className="aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl transition duration-300 hover:scale-105 hover:shadow-2xl"
>
  <img
    src="/images/video1.jpg"
    alt="Video 1"
    className="block w-full h-full object-cover rounded-3xl"
  />
</div>

  <div
  onClick={() => setOpenVideo("/videos/video2.mov")}
  className="aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl transition duration-300 hover:scale-105 hover:shadow-2xl"
>
  <img
    src="/images/video2.jpg"
    alt="Video 2"
    className="block w-full h-full object-cover rounded-3xl"
  />
</div>

  <div
  onClick={() => setOpenVideo("/videos/video3.mov")}
  className="aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl transition duration-300 hover:scale-105 hover:shadow-2xl"
>
  <img
    src="/images/video3.jpg"
    alt="Video 3"
    className="w-full h-full object-cover rounded-3xl"
  />
</div>

  <div
  onClick={() => setOpenVideo("/videos/video4.mov")}
  className="aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl transition duration-300 hover:scale-105 hover:shadow-2xl"
>
  <img
    src="/images/video4.jpg"
    alt="Video 4"
    className="block w-full h-full object-cover rounded-3xl"
  />
</div>

  <div
  onClick={() => setOpenVideo("/videos/video5.mov")}
  className="aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl transition duration-300 hover:scale-105 hover:shadow-2xl"
>
  <img
    src="/images/video5.jpg"
    alt="Video 5"
    className="w-full h-full object-cover rounded-3xl"
  />
</div>

  <div
  onClick={() => setOpenVideo("/videos/video6.mov")}
  className="aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl transition duration-300 hover:scale-105 hover:shadow-2xl"
>
  <img
    src="/images/video6.jpg"
    alt="Video 6"
    className="w-full h-full object-cover rounded-3xl"
  />
</div>

</div></div>
        </section>

        <section id="contact">
          <div className="bg-zinc-900 rounded-3xl p-10">

  <div className="text-center text-zinc-500 text-sm tracking-[0.3em] mb-8">
    CONTACT
  </div>

  <div className="flex justify-center gap-12">

    <a
      href="https://www.instagram.com/junkie.surf"
      target="_blank"
      className="opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
    >
      <img
        src="https://cdn.simpleicons.org/instagram/white"
        alt="Instagram"
        className="w-12 h-12"
      />
    </a>

    <a
      href="https://wa.me/6281215611429"
      target="_blank"
      className="opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
    >
      <img
        src="https://cdn.simpleicons.org/whatsapp/white"
        alt="WhatsApp"
        className="w-12 h-12"
      />
    </a>

    <a
      href="https://t.me/monitorchatov"
      target="_blank"
      className="opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
    >
      <img
        src="https://cdn.simpleicons.org/telegram/white"
        alt="Telegram"
        className="w-12 h-12"
      />
    </a>

  </div>

</div>
        </section>

      </div>
    {openVideo && (
  <div
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    onClick={() => setOpenVideo(null)}
  >

    <button
      onClick={() => setOpenVideo(null)}
      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 text-white text-3xl flex items-center justify-center z-50"
    >
      ×
    </button>

    <video
      controls
      autoPlay
      className="max-h-[90vh] max-w-[90vw] rounded-3xl"
      onClick={(e) => e.stopPropagation()}
    >
      <source src={openVideo} type="video/mp4" />
    </video>

  </div>
)}
    </main>
  );
}