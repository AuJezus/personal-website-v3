"use client";

import Image from "next/image";
import { BiCircle, BiMap } from "react-icons/bi";
import AboutParagraph from "./about-paragraph";
import GlowEffect from "../glow-effect";
import { links } from "@/lib/site";
import TerminalHeading from "../terminal-heading";

function AboutSection() {
  return (
    <section id="about" className="mx-auto mb-44 max-w-[1200px]">
      <TerminalHeading>about-me</TerminalHeading>

      <GlowEffect className="glow-primary">
        <div className=" flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-4 bg-secondary/10 p-10 shadow-lg shadow-black/80 backdrop-blur-md glow:border-glow glow:bg-glow/[.15] md:flex-row md:items-start md:justify-between">
          <div className="order-2 flex-1 md:order-1">
            <h3 className="mb-3 text-4xl font-bold glow:text-glow/[.15]">
              Hey there!
            </h3>
            <AboutParagraph className="mb-6" />

            <div className="flex gap-4">
              <a
                href={links.city}
                target="_blank"
                className="group flex items-center gap-2 rounded-full border px-2 py-1 text-sm glow:border-glow"
              >
                <BiMap className="text-base opacity-60 transition-colors group-hover:animate-bounce glow:opacity-0" />
                <p className="text-muted-foreground">Lithuania, Vilnius</p>
              </a>

              <div className="flex items-center gap-2 rounded-full border px-2 py-1 text-sm glow:border-glow">
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
            className="glow order-1 h-40 w-40 max-w-sm rounded-full border-4 object-cover shadow-inner glow:border-glow/[.5] md:order-2"
          />
        </div>
      </GlowEffect>
    </section>
  );
}

export default AboutSection;
