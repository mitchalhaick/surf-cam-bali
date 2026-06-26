import Logo from "@/components/Logo";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

<Logo />
<div className="fixed top-32 left-2 z-[9999] text-red-500">
  TEST
</div>

  <div className="max-w-6xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <a
            href="/cameras"
            className="bg-zinc-900 rounded-3xl p-10 hover:bg-zinc-800 transition"
          >
            <h2 className="text-4xl font-semibold mb-4">
              Surf Cam
            </h2>

            <p className="text-zinc-400 mb-8">
              Live surf conditions and surf cameras.
            </p>

            <div className="text-white">
              Open →
            </div>

          </a>

          <a
            href="/surf-drone"
            className="bg-zinc-900 rounded-3xl p-10 hover:bg-zinc-800 transition"
          >
            <h2 className="text-4xl font-semibold mb-4">
              Surf Drone
            </h2>

            <p className="text-zinc-400 mb-8">
              Professional drone filming and surf photography.
            </p>

            <div className="text-white">
              Open →
            </div>

          </a>

        </div>

      </div>

    </main>
  );
}