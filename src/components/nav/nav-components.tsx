import { cn } from "@/lib/utils";
import Link from "next/link";
import type { HTMLAttributes } from "react";

export const links = [
  {
    name: "projects",
    url: "/#projects",
  },
  {
    name: "about-me",
    url: "/#about",
  },
  {
    name: "skills",
    url: "/#skills",
  },
  {
    name: "contact",
    url: "/#contact",
  },
  {
    name: "blog",
    url: "/blog",
  },
];

export function NavLogo({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text h-full w-full text-nowrap text-5xl font-semibold transition-all duration-500 lg:text-2xl",
        className,
      )}
      {...props}
    >
      AUJEZUS
    </p>
  );
}

export function NavLinks({
  isBorder = false,
  isDesktop = true,
  onClick,
}: {
  isBorder?: boolean;
  isDesktop?: boolean;
  onClick?: () => void;
}) {
  if (isDesktop)
    return (
      <ul
        className={cn(
          "flex w-fit justify-center gap-6 rounded-md border-2 border-transparent px-3 py-2 transition-all",
          isBorder && "border-secondary bg-background",
        )}
      >
        {links.map((link) => (
          <li className="relative text-nowrap indent-2" key={link.name}>
            <Link className="group" href={link.url}>
              {link.name}
              <div className="absolute bottom-[17%] h-[1.5px] w-[8px] bg-foreground transition-all duration-300 group-hover:w-full "></div>
            </Link>
          </li>
        ))}
      </ul>
    );

  return (
    <ul className="flex flex-col gap-8">
      {links.map((link) => (
        <li
          onClick={onClick}
          className="relative indent-2 text-2xl"
          key={link.name}
        >
          <Link className="group" href={link.url}>
            {link.name}
            <div className="absolute bottom-[10%] h-[3px] w-[8px] bg-foreground transition-all duration-300 group-hover:w-full "></div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function NavColumn({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-start gap-6 transition-opacity duration-500 lg:flex-wrap-reverse lg:justify-end 2xl:flex-wrap",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
