"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: "left" | "right" | "top" | "bottom";
  }
>(({ className = "", side = "right", ...props }, ref) => {
  let sideClasses = "";

  if (side === "left") sideClasses = "left-0 top-0 h-full w-60";
  else if (side === "right") sideClasses = "right-0 top-0 h-full w-64";
  else if (side === "top") sideClasses = "top-0 left-0 w-full h-64";
  else if (side === "bottom") sideClasses = "bottom-0 left-0 w-full h-64";/* les else if ne sont pas necessaires mais j'ai pris cette version de sheet de l'autre projet c'est pourquoi il y'a qques lignes de code inutiles*/

  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 bg-black/40 z-40" />
      <SheetPrimitive.Content
        ref={ref}
        className={`fixed z-50 bg-white p-8 shadow-lg transition-all ease-in-out ${sideClasses} ${className}`}
        {...props}
      />
    </SheetPrimitive.Portal>
  );
});

SheetContent.displayName = "SheetContent";

export { Sheet, SheetTrigger, SheetContent, SheetClose };
