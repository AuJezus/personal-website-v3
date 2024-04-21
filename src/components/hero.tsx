import NoiseSvg from "@/components/noise-svg";
import { useCallback, useEffect, useState } from "react";
import ConctactList from "./contact-list";

function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);

  function addGlitchEffect() {
    setIsGlitching(true);
    const randomDelay = Math.random() * 200 + 50;
    setTimeout(() => {
      setIsGlitching(false);
      scheduleNextGlitch();
    }, randomDelay);
  }

  const scheduleNextGlitch = useCallback(() => {
    const randomDelay = Math.random() * 1500 + 500;
    return setTimeout(() => {
      addGlitchEffect();
    }, randomDelay);
  }, []);

  useEffect(() => {
    const timeout = scheduleNextGlitch(); // Initial glitch scheduling

    // Cleanup the timers when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [scheduleNextGlitch]);

  return (
    <div className="relative -z-40 h-screen w-screen bg-neutral-900">
      {/* Background effects */}
      <NoiseSvg />
      <div
        className={`hero-img absolute -z-30 h-full w-full ${isGlitching ? "noise" : ""}`}
      ></div>
      <div className="line-effect absolute -z-20 h-full w-full opacity-20"></div>
      <div className="absolute -z-10 h-screen w-screen bg-black/40"></div>

      {/* Content */}
      <div className="relative z-0 flex h-full w-full flex-col items-center justify-center text-neutral-100 opacity-90">
        <h1 className="text-9xl font-bold uppercase ">AuJezus</h1>
        <p className="flex gap-2 text-lg uppercase">
          <span>
            <span className="text-violet-400">{">"}</span> Augustas Vaivada
          </span>
          <span>|</span>
          <span>full-stack developer</span>
        </p>

        <ConctactList
          classes="absolute bottom-0 mb-8 md:mb-8 lg:mb-12"
          size="sm"
        />
      </div>
    </div>
  );
}

export default Hero;
