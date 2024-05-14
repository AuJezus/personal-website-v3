"use client";

import useScrollUp from "@/lib/hooks/use-scroll-up";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { isHeroInViewAtom } from "../home/hero-section";
import { isHeroInViewHalfAtom } from "../home/hero-section";
import { NavColumn, NavLinks, NavLogo } from "./nav-components";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import { BiMenu } from "react-icons/bi";
import { usePathname } from "next/navigation";

export function NavWrapper(props: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isScrollUp = useScrollUp();
  const [isHeroInView] = useAtom(isHeroInViewAtom);
  const [isHeroInViewHalf] = useAtom(isHeroInViewHalfAtom);
  const isHome = pathname === "/";

  const isDekstop = useMediaQuery("(min-width: 1024px)");

  if (isDekstop)
    return (
      <nav
        className={cn(
          "fixed left-0 top-0 z-20 flex w-full items-baseline justify-center px-12 py-3 transition-transform hover:translate-y-0",
          isScrollUp ? "translate-y-0" : "-translate-y-full",
          !isHome && "sticky",
        )}
      >
        <NavLogo
          className={isHome && !isHeroInView ? "opacity-0" : undefined}
        />

        <NavLinks isBorder={!isHeroInViewHalf || !isHome} />

        <NavColumn
          className={isHome && !isHeroInView ? "opacity-0" : undefined}
        >
          {props.children}
        </NavColumn>
      </nav>
    );

  return (
    <nav className="fixed top-0 z-20">
      <Drawer direction="right">
        <DrawerTrigger className="flex w-screen justify-end p-2 sm:p-4">
          <div
            className={cn(
              "rounded-full border-2 border-transparent p-1 transition-all",
              (!isHeroInView || !isHome) && "border-border bg-background p-1",
            )}
          >
            <BiMenu className="text-4xl sm:text-5xl" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="!text-center">
            <NavLogo />
            <DrawerDescription className="text-base">
              <p>Augustas Vaivada</p>
              <p>Full-stack developer</p>
            </DrawerDescription>
          </DrawerHeader>

          <div className="mx-auto my-auto">
            <p className="mb-3 text-primary">{"// links"}</p>
            <NavLinks isDesktop={false} />
          </div>

          <DrawerFooter>
            <div className="flex flex-wrap justify-center gap-4">
              {props.children}
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
