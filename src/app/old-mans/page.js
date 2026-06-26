import Logo from "@/components/Logo";
export default function OldMans() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

        <Logo />

      <div className="max-w-6xl mx-auto">


        <h1 className="text-5xl font-bold mt-6">
          Old Man's
        </h1>

        <div className="flex items-center gap-2 mt-4 mb-8">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-zinc-400">
            LIVE
          </span>
        </div>

        <div className="aspect-video bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-500">
          VIDEO STREAM
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">

          <div className="bg-zinc-900 rounded-xl p-4">
            <div className="text-zinc-500 text-sm">
              Wave Height
            </div>
            <div className="text-2xl mt-2">
              —
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl p-4">
            <div className="text-zinc-500 text-sm">
              Wind
            </div>
            <div className="text-2xl mt-2">
              —
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl p-4">
            <div className="text-zinc-500 text-sm">
              Tide
            </div>
            <div className="text-2xl mt-2">
              —
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}