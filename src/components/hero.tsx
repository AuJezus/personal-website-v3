"use client";

import NoiseSvg from "@/components/noise-svg";
import { useCallback, useEffect, useState } from "react";
import ConctactList from "./contact-list";
import { Button } from "./ui/button";

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
      <div className="bg-background/40 absolute right-0 top-0 -z-10 h-full w-full"></div>

      {/* Content */}
      <div className="relative flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-9xl font-bold uppercase ">AuJezus</h1>
        <p className="flex items-center gap-3 text-lg capitalize">
          <span className="text-primary">{">"}</span>
          <span>Augustas Vaivada</span>
          <span>|</span>
          <span>full-stack developer</span>
        </p>

        <div className="absolute bottom-12 z-10 flex flex-col items-center gap-4">
          <ConctactList />
          <a href="" className="text-sm font-medium hover:underline">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
