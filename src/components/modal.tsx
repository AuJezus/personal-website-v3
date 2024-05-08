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
        "fixed left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 bg-background p-8 text-foreground backdrop:bg-background/90",
        className,
      )}
      onClose={onDismiss}
    >
      <BiX
        onClick={onDismiss}
        className="absolute right-0 top-0 overflow-auto text-4xl text-destructive"
      />
      <Button asChild variant="link" className="absolute left-0 top-0">
        <a href={pathname}>View full page</a>
      </Button>

      <div className="max-h-[90vh] overflow-y-auto">{children}</div>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
