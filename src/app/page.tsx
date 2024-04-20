"use client";

import NoiseSvg from "@/components/noise-svg";
import { useEffect, useState } from "react";
// import ConctactList from "./ConctactList";

export default function HomePage() {
  const [isGlitching, setIsGlitching] = useState(false);

  function addGlitchEffect() {
    setIsGlitching(true);
    const randomDelay = Math.random() * 200 + 50;
    setTimeout(() => {
      setIsGlitching(false);
      scheduleNextGlitch();
    }, randomDelay);
  }

  function scheduleNextGlitch() {
    const randomDelay = Math.random() * 1500 + 500;
    return setTimeout(() => {
      addGlitchEffect();
    }, randomDelay);
  }

  useEffect(() => {
    const timeout = scheduleNextGlitch(); // Initial glitch scheduling

    // Cleanup the timers when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <NoiseSvg />
      <div className="mb-12 w-full bg-neutral-900 md:mb-28">
        <div className="relative h-[70vh] w-full bg-violet-800/20 md:h-screen">
          <div className={`hero-img ${isGlitching ? "noise" : ""}`}></div>
          <div className="hero-overlay"></div>

          <div className="relative z-20 flex h-full w-full flex-col items-center justify-center ">
            <h1 className="lg:text-10xl text-7xl font-bold uppercase text-neutral-100 opacity-90 md:text-9xl">
              AuJezus
            </h1>
            <p className="text-sm uppercase text-neutral-100 opacity-90 md:text-lg lg:text-xl">
              <span className="text-violet-400">{">"}</span> augustas vaivada{" "}
              {"//"} full-stack developer
            </p>
            {/* <ConctactList
              classes="absolute bottom-0 mb-8 md:mb-8 lg:mb-12"
              size="sm"
              effect={false}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
