"use client";

import NoiseSvg from "@/components/home/noise-svg";
import { useCallback, useEffect, useRef, useState } from "react";
import ConctactList from "../contact-list";
import { atom, useAtom } from "jotai";
import { links } from "@/lib/site";

export const isHeroInViewAtom = atom(true);
export const isHeroInViewHalfAtom = atom(true);

function HeroSection() {
  const [isGlitching, setIsGlitching] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsHeroInView] = useAtom(isHeroInViewAtom);
  const [, setIsHeroInViewHalf] = useAtom(isHeroInViewHalfAtom);

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

  useEffect(() => {
    if (!containerRef.current) return;
    const containerEl = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => setIsHeroInView(entries[0]?.isIntersecting ?? false),
      {
        root: null,
        rootMargin: `0px`,
        threshold: 0.01,
      },
    );
    observer.observe(containerEl);

    const observerHalf = new IntersectionObserver(
      (entries) => setIsHeroInViewHalf(entries[0]?.isIntersecting ?? false),
      {
        root: null,
        rootMargin: `0px`,
        threshold: 0.6,
      },
    );
    observerHalf.observe(containerEl);

    return () => {
      if (containerEl) {
        observer.unobserve(containerEl);
        observerHalf.unobserve(containerEl);
      }
    };
  }, [containerRef, setIsHeroInView, setIsHeroInViewHalf]);

  return (
    <div ref={containerRef} className="relative mb-28 h-screen">
      {/* Background effects */}
      <NoiseSvg />
      <div
        className={`hero-img absolute -z-30 h-full w-full ${isGlitching ? "noise" : ""}`}
      ></div>
      <div className="line-effect absolute -z-20 h-full w-full opacity-20"></div>
      <div className="absolute right-0 top-0 -z-10 h-full w-full bg-background/40"></div>

      {/* Content */}
      <div className="relative flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-7xl font-bold uppercase sm:text-8xl">AuJezus</h1>
        <p className="flex flex-wrap items-center justify-center gap-3 text-nowrap text-sm capitalize">
          <span className="text-primary">{">"}</span>
          <span>Augustas Vaivada</span>
          <span>|</span>
          <span>full-stack developer</span>
        </p>

        <div className="absolute bottom-8 z-10 flex flex-col items-center gap-8">
          <ConctactList />
          <a
            href={links.resumeDownload}
            target="_blank"
            className="font text-sm hover:underline"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
