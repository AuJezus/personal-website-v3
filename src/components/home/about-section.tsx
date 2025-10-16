"use client";

import Image from "next/image";
import { BiCircle, BiMap } from "react-icons/bi";
import AboutParagraph from "./about-paragraph";
import GlowEffect from "../glow-effect";
import { links } from "@/lib/site";
import TerminalHeading from "../terminal-heading";
import Section from "./section";

import profileImage from "../../../public/profile.jpg";

function AboutSection() {
  return (
    <Section id="about">
      <TerminalHeading>about-me</TerminalHeading>

      <GlowEffect className="glow-primary-dark">
        <div className=" flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-4 bg-secondary/10 p-3 shadow-lg shadow-black/80 backdrop-blur-md glow:border-glow glow:bg-glow/[.15] sm:p-10 md:flex-row md:items-start md:justify-between">
          <div className="order-2 flex-1 md:order-1">
            <h3 className="mb-3 text-4xl font-bold">Hey there!</h3>
            <AboutParagraph className="mb-6 text-sm sm:text-base" />

            <div className="flex flex-wrap gap-4">
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
            src={profileImage}
            alt="Picture of me"
            width={320}
            height={564}
            className="glow order-1 h-40 w-40 max-w-sm rounded-full border-4 object-cover shadow-inner glow:border-glow/[.5] md:order-2"
          />
        </div>
      </GlowEffect>
    </Section>
  );
}

export default AboutSection;
