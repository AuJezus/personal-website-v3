"use client";

import Image from "next/image";
import GlowEffect from "../glow-effect";

function AboutSection() {
  return (
    <GlowEffect className="glow-red-900 mx-auto max-w-[1200px]">
      <div className="glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-4 border-white/5 bg-zinc-900/50 p-10 shadow-lg shadow-black/80 backdrop-blur-md md:flex-row md:items-start md:justify-between">
        <div className="order-2 flex-1 md:order-1">
          <p className="opacity-50">Tropical fish</p>
          <h2 className="glow:text-glow/[.15] mb-3 text-4xl font-bold tracking-tighter">
            Banana Wrasse
          </h2>
          <div className="md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
            <p>
              The Banana Wrasse is known for its vibrant yellow color and
              elongated body, resembling a banana.
            </p>
            <p>
              This active and playful fish thrives in tropical reef
              environments, often seen darting among corals and rocks.
            </p>
          </div>

          <button className="glow:ring-1 glow:border-glow glow:ring-glow mt-6 rounded-xl border-2 border-white/10 bg-zinc-950/50 px-6 py-3 font-semibold text-white/90 backdrop-blur-md">
            Learn more
          </button>
        </div>

        <Image
          src="/aujezus-play.webp"
          alt="Banana Wrasse"
          width={100}
          height={100}
          className="glow glow:ring-1 glow:border-glow/[.5] glow:ring-glow order-1 h-40 w-40 max-w-sm rounded-full border-4 border-white/5 object-cover shadow-inner md:order-2"
        />
      </div>
    </GlowEffect>
  );
}

export default AboutSection;
