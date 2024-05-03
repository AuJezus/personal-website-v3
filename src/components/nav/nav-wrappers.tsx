"use client";

import useScrollUp from "@/lib/useScrollUp";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { isHeroInViewAtom } from "../home/hero-section";
import { isHeroInViewHalfAtom } from "../home/hero-section";
import { NavColumn, NavLinks, NavLogo, links } from "./nav-components";

export function NavHome(props: { children: React.ReactNode }) {
  const isScrollUp = useScrollUp();
  const [isHeroInView] = useAtom(isHeroInViewAtom);
  const [isHeroInViewHalf] = useAtom(isHeroInViewHalfAtom);

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-20 flex w-full items-center justify-center px-12 py-3 transition-transform",
        isScrollUp ? "translate-y-0" : "-translate-y-full",
        "hover:translate-y-0",
      )}
    >
      <NavLogo className={!isHeroInView ? "opacity-0" : undefined} />

      <NavLinks links={links} isBorder={!isHeroInViewHalf} />

      <NavColumn className={!isHeroInView ? "opacity-0" : undefined}>
        {props.children}
      </NavColumn>
    </nav>
  );
}

export function NavOther({ children }: { children: React.ReactNode }) {
  const isScrollUp = useScrollUp();

  return (
    <nav
      className={cn(
        "sticky left-0 top-0 z-20 flex w-full items-center justify-center px-12 py-3 transition-transform",
        isScrollUp ? "translate-y-0" : "-translate-y-full",
        "hover:translate-y-0",
      )}
    >
      {children}
    </nav>
  );
}
