export default function Cameras() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">

        <a
          href="/"
          className="text-zinc-500 hover:text-white"
        >
          ← Back
        </a>

        <h1 className="text-5xl font-bold mt-6 mb-4">
          Surf Cameras
        </h1>

        <p className="text-zinc-400 mb-12">
          Live surf conditions from Bali's surf breaks.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href="/kuta-reef"
            className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Kuta Reef
            </h2>

            <div className="aspect-video bg-zinc-800 rounded-2xl mb-6 flex flex-col items-center justify-center text-zinc-500">
              <div>Camera Preview</div>
              <div className="text-sm mt-2">
                Coming Soon
              </div>
            </div>

            <div className="text-zinc-400">
              Watch camera →
            </div>

          </a>

          <a
            href="/old-mans"
            className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Old Man's
            </h2>

            <div className="aspect-video bg-zinc-800 rounded-2xl mb-6 flex flex-col items-center justify-center text-zinc-500">
              <div>Camera Preview</div>
              <div className="text-sm mt-2">
                Coming Soon
              </div>
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