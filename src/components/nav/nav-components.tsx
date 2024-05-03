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
      className={cn("w-full text-2xl transition-all duration-500", className)}
      {...props}
    >
      MANO LOGO
    </p>
  );
}

export function NavLinks({
  isBorder = false,
  links,
}: {
  isBorder?: boolean;
  links: { name: string; url: string }[];
}) {
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
}

export function NavColumn({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-end gap-6 transition-opacity duration-500",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
