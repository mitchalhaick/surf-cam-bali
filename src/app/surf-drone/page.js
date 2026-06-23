export default function SurfDrone() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">

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
          <h2 className="text-3xl font-semibold mb-6">
            About
          </h2>

          <p className="text-zinc-400 max-w-3xl">
            Professional surf drone filming and photography in Bali.
            Capturing surfers from the air with cinematic footage and
            high-quality photography.
          </p>
        </section>

        <section id="portfolio" className="mb-24">
          <h2 className="text-3xl font-semibold mb-6">
            Portfolio
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

  <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full rounded-2xl hover:scale-105 transition duration-300"
>
  <source src="/videos/video1.mov" type="video/quicktime" />
</video>

  <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full rounded-2xl hover:scale-105 transition duration-300"
>
  <source src="/videos/video2.mov" type="video/quicktime" />
</video>

  <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full rounded-2xl hover:scale-105 transition duration-300"
>
  <source src="/videos/video3.mov" type="video/quicktime" />
</video>

  <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full rounded-2xl hover:scale-105 transition duration-300"
>
  <source src="/videos/video4.mov" type="video/quicktime" />
</video>

  <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full rounded-2xl hover:scale-105 transition duration-300"
>
  <source src="/videos/video5.mov" type="video/quicktime" />
</video>

  <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full rounded-2xl hover:scale-105 transition duration-300"
>
  <source src="/videos/video6.mov" type="video/quicktime" />
</video>

</div>
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
    </main>
  );
}