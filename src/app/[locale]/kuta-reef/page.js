import Logo from "@/components/Logo";
import Image from "next/image";
import {getTranslations} from "next-intl/server";

export default async function KutaReef() {
  const t = await getTranslations("kutaReef");
  return (
    <main className="min-h-screen text-white">

  <Logo />

  <div className="max-w-6xl mx-auto px-8 py-16">


        <div className="flex items-center justify-between mt-14 mb-4">

  <h1 className="text-5xl font-bold">
    Kuta Reef
  </h1>

  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>

    <span className="text-xs tracking-[0.3em] uppercase text-zinc-400">
      LIVE
    </span>
  </div>

</div>

        <div
  className="
aspect-video
rounded-3xl
bg-black/10
backdrop-blur-xl
border
border-white/10
flex
flex-col
items-center
justify-center
"
>

  <div className="text-6xl mb-4">
    📷
  </div>

  <div className="text-2xl font-semibold text-white">
    {t("liveCamera")}
  </div>

  <div className="text-zinc-500 mt-2">
    {t("comingSoon")}
  </div>

</div>

<div className="grid grid-cols-3 gap-4 mt-8">

  <div className="
bg-black/10
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-4
">
    <div className="text-zinc-500 text-sm">
      {t("waveHeight")}
    </div>
    <div className="text-2xl mt-2">
      --
    </div>
  </div>

  <div className="
bg-black/10
backdrop-blur-xl
border
border-white/10
rounded-xl
p-4
">
    <div className="text-zinc-500 text-sm">
      {t("wind")}
    </div>
    <div className="text-2xl mt-2">
      --
    </div>
  </div>

  <div className="
bg-black/10
backdrop-blur-xl
border
border-white/10
rounded-xl
p-4
">
    <div className="text-zinc-500 text-sm">
      {t("tide")}
    </div>
    <div className="text-2xl mt-2">
      --
    </div>
  </div>

</div>

</div>
</main>
);
}