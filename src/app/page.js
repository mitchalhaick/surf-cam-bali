export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">

        <h1 className="text-6xl font-bold mb-4">
          Surf Cam Bali
        </h1>

        <p className="text-zinc-400 text-xl mb-12">
          Live surf conditions from Bali's best breaks
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href="/kuta-reef"
            className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition"
          >
            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-semibold">
                Kuta Reef
              </h2>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-zinc-400">
                  LIVE
                </span>
              </div>

            </div>

            <div className="aspect-video bg-zinc-800 rounded-2xl mb-6 flex items-center justify-center text-zinc-500">
              Camera Preview
            </div>

            <div className="text-zinc-400">
              Watch camera →
            </div>
          </a>

          <a
            href="/old-mans"
            className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition"
          >
            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-semibold">
                Old Man's
              </h2>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-zinc-400">
                  LIVE
                </span>
              </div>

            </div>

            <div className="aspect-video bg-zinc-800 rounded-2xl mb-6 flex items-center justify-center text-zinc-500">
              Camera Preview
            </div>

            <div className="text-zinc-400">
              Watch camera →
            </div>
          </a>

        </div>

      </div>
    </main>
  );
}