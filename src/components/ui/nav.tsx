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

          <div className="flex max-w-64 items-center gap-2">
            <BiMusic className="shrink-0 text-red-500" /> Last:
            <div className="linear flex overflow-clip [mask:linear-gradient(to_right,transparent_0,black_15%,black_85%,transparent_100%)]">
              <p className="animate-infinite-scroll text-nowrap pr-12">
                Tiktai Muzika (Live&apos;93) - Foje
              </p>
              <p
                className="animate-infinite-scroll text-nowrap pr-12"
                aria-hidden="true"
              >
                Tiktai Muzika (Live&apos;93) - Foje
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
