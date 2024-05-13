"use client";

import { type ElementRef, useEffect, useRef, type HTMLAttributes } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function Modal({
  children,
  className,
}: HTMLAttributes<HTMLDialogElement>) {
  const router = useRouter();
  const pathname = usePathname();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className={cn(
        "fixed left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 bg-background text-foreground backdrop:bg-background/90",
        className,
      )}
      onClose={onDismiss}
    >
      <BiX
        onClick={onDismiss}
        className="absolute right-0 top-0 overflow-auto text-4xl text-destructive"
      />
      <Button
        asChild
        variant="link"
        className="absolute -left-2 -top-2 text-sm sm:-top-1 sm:left-0 sm:text-lg"
      >
        <a href={pathname}>View full page</a>
      </Button>

      <div className="m-4 mt-6 max-h-[85vh] max-w-[85vw] overflow-y-auto sm:m-8 sm:mt-8">
        {children}
      </div>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
