"use client";

import useScrollUp from "@/lib/useScrollUp";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { isHeroInViewAtom } from "../home/hero-section";
import { isHeroInViewHalfAtom } from "../home/hero-section";
import Link from "next/link";

const links = [
  {
    name: "projects",
    url: "#projects",
  },
  {
    name: "about-me",
    url: "#about",
  },
  {
    name: "skills",
    url: "#skills",
  },
  {
    name: "contact",
    url: "#contact",
  },
  {
    name: "blog",
    url: "/blog",
  },
];

function Nav(props: { children: React.ReactNode }) {
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
          "flex w-fit justify-center gap-6 rounded-md border-2 border-transparent px-3 py-2 transition-all",
          !isHeroInViewHalf && "bg-background border-secondary",
        )}
      >
        {links.map((link) => (
          <li className="relative text-nowrap indent-2" key={link.name}>
            {link.url.startsWith("#") && (
              <a className="group" href={link.url}>
                {link.name}
                <div className="bg-foreground absolute bottom-[17%] h-[1.5px] w-[8px] transition-all duration-300 group-hover:w-full "></div>
              </a>
            )}
            {!link.url.startsWith("#") && (
              <Link className="group" href={link.url}>
                {link.name}
                <div className="bg-foreground absolute bottom-[17%] h-[1.5px] w-[8px] transition-all duration-300 group-hover:w-full "></div>
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div
        className={cn(
          "flex w-full justify-end transition-opacity duration-500",
          !isHeroInView && "opacity-0",
        )}
      >
        <div className="flex items-center gap-6">{props.children}</div>
      </div>
    </nav>
  );
}

export default Nav;
