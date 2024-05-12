import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

function Section({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "mx-auto mb-20 max-w-[1200px] px-4 sm:mb-44 xl:p-0",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
