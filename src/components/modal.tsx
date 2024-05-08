"use client";

import { type ElementRef, useEffect, useRef, type HTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import { cn } from "@/lib/utils";

export function Modal({
  children,
  className,
}: HTMLAttributes<HTMLDialogElement>) {
  const router = useRouter();
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
      <div className="max-h-[90vh] overflow-y-auto">{children}</div>
      <BiX
        onClick={onDismiss}
        className="absolute right-0 top-0 overflow-auto text-4xl text-destructive"
      />
    </dialog>,
    document.getElementById("modal-root")!,
  );
}