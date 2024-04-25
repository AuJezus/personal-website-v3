"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import type { MouseEvent } from "react";

function GlowEffect({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const captureRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!captureRef.current || !overlayRef.current) return;

    const x = e.pageX - captureRef.current.offsetLeft;
    const y = e.pageY - captureRef.current.offsetTop;

    overlayRef.current.style.setProperty("--glow-x", `${x}px`);
    overlayRef.current.style.setProperty("--glow-y", `${y}px`);
    overlayRef.current.style.setProperty("--glow-opacity", `1`);
  }

  function handleMouseLeave() {
    if (!overlayRef.current) return;
    overlayRef.current.style.setProperty("--glow-opacity", "0");
  }

  return (
    <div
      className={cn(
        "glow-capture relative",
        className,
        !className?.includes("glow-") && "glow-primary",
      )}
      ref={captureRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        ref={overlayRef}
        className="glow-overlay glow transition-opacity duration-500"
      >
        {children}
      </div>
    </div>
  );
}

export default GlowEffect;
