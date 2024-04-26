"use client";

import Image from "next/image";
import { BiCircle, BiMap } from "react-icons/bi";
import AboutParagraph from "./about-paragraph";
import GlowEffect from "../glow-effect";

function AboutSection() {
  return (
    <section className="mx-auto mb-44 max-w-[1200px]">
      <div className="text-muted-foreground mb-10 flex items-baseline gap-4">
        <span>
          <span className="text-primary">~</span> W:\AuJezus{">"}
        </span>
        <h2 className="text-primary text-lg">
          about-me<span className="animate-blink">_</span>
        </h2>
      </div>

      <GlowEffect className="glow-primary">
        <div className=" glow:border-glow glow:bg-glow/[.15] bg-secondary/10 flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-4 p-10 shadow-lg shadow-black/80 backdrop-blur-md md:flex-row md:items-start md:justify-between">
          <div className="order-2 flex-1 md:order-1">
            <h3 className="glow:text-glow/[.15] mb-3 text-4xl font-bold">
              Hey there!
            </h3>
            <AboutParagraph className="mb-6" />

            <div className="flex gap-4">
              <a
                href="https://maps.app.goo.gl/jvffeShXNG4a2Ji59"
                target="_blank"
                className="glow:border-glow group flex items-center gap-2 rounded-full border px-2 py-1 text-sm"
              >
                <BiMap className="glow:opacity-0 text-base opacity-60 transition-colors group-hover:animate-bounce" />
                <p className="text-muted-foreground">Lithuania, Vilnius</p>
              </a>

              <div className="glow:border-glow flex items-center gap-2 rounded-full border px-2 py-1 text-sm">
                <BiCircle className="animate-pulse text-base text-green-400" />
                <p className="text-muted-foreground">Available for work</p>
              </div>
            </div>
          </div>

          <Image
            src="/aujezus-play.webp"
            alt="Banana Wrasse"
            width={100}
            height={100}
            className="glow glow:border-glow/[.5] order-1 h-40 w-40 max-w-sm rounded-full border-4 object-cover shadow-inner md:order-2"
          />
        </div>
      </GlowEffect>
    </section>
  );
}

export default AboutSection;
