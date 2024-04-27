"use client";

import useScrollUp from "@/lib/useScrollUp";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { BiCircle, BiMusic } from "react-icons/bi";
import { isHeroInViewAtom } from "../home/hero-section";
import { isHeroInViewHalfAtom } from "../home/hero-section";

const links = [
  {
    name: "about-me",
    url: "#about",
  },
  {
    name: "skills",
    url: "#skills",
  },
  {
    name: "projects",
    url: "#projects",
  },
  {
    name: "contacts",
    url: "#contacts",
  },
  {
    name: "blog",
    url: "/blogs/aujezus",
  },
];

function Nav() {
  const isScrollUp = useScrollUp();
  const [isHeroInView] = useAtom(isHeroInViewAtom);
  const [isHeroInViewHalf] = useAtom(isHeroInViewHalfAtom);

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-20 flex w-full items-center justify-center px-12 py-3 transition-transform",
        isScrollUp ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <p
        className={cn(
          "w-full text-2xl transition-opacity duration-500",
          !isHeroInView && "opacity-0",
        )}
      >
        MANO LOGO
      </p>

      <ul
        className={cn(
          "mx-auto flex w-fit justify-center gap-6 rounded-md border-2 border-transparent px-3 py-2 transition-all",
          !isHeroInViewHalf && "bg-background border-secondary",
        )}
      >
        {links.map((link) => (
          <li className="group relative text-nowrap indent-2" key={link.name}>
            <a href={link.url}>{link.name}</a>
            <div className="bg-foreground absolute bottom-[17%] h-[1.5px] w-[8px] transition-all duration-300 group-hover:w-full "></div>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          "flex w-full justify-end transition-opacity duration-500",
          !isHeroInView && "opacity-0",
        )}
      >
        <div className="flex w-fit gap-6 rounded-md text-sm">
          <p className="flex items-center gap-2">
            <BiCircle className="text-green-500" /> ONLINE
          </p>

          <div className="flex max-w-52 items-center gap-2 overflow-clip">
            <BiMusic className="shrink-0 text-red-500" />
            <p className="text-nowrap">Tiktai Muzika (Live&apos;93) - Foje</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
