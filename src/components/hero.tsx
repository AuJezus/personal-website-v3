"use client";

import NoiseSvg from "@/components/noise-svg";
import { useCallback, useEffect, useState } from "react";
import ConctactList from "./contact-list";

function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);

  const addGlitchEffect = useCallback(() => {
    setIsGlitching(true);
    const randomDelay = Math.random() * 200 + 50;
    setTimeout(() => {
      setIsGlitching(false);
    }, randomDelay);
  }, [setIsGlitching]);

  useEffect(() => {
    if (isGlitching) return;

    const randomDelay = Math.random() * 1500 + 700;
    const timeout = setTimeout(() => {
      addGlitchEffect();
    }, randomDelay);

    // Cleanup the timers when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [isGlitching, addGlitchEffect]);

  return (
    <div className="relative mb-28 h-screen">
      {/* Background effects */}
      <NoiseSvg />
      <div
        className={`hero-img absolute -z-30 h-full w-full ${isGlitching ? "noise" : ""}`}
      ></div>
      <div className="line-effect absolute -z-20 h-full w-full opacity-20"></div>
      <div className="absolute right-0 top-0 -z-10 h-full w-full bg-black/40"></div>

      {/* Content */}
      <div className="relative flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-9xl font-bold uppercase ">AuJezus</h1>
        <p className="flex items-center gap-3 text-lg capitalize">
          <span className="text-primary">{">"}</span>
          <span>Augustas Vaivada</span>
          <span>|</span>
          <span>full-stack developer</span>
        </p>

        <ConctactList className="absolute bottom-0 z-10 mb-8 md:mb-8 lg:mb-12" />
      </div>
    </div>
  );
}

export default Hero;
