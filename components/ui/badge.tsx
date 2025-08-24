"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[var(--sargam-radius)] border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-white focus-visible:ring-white/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden bg-gradient-to-r from-black to-gray-800 text-white border-gray-700",
  {
    variants: {
      variant: {
        default: "border-gray-700 bg-black text-white [a&]:hover:bg-gray-900",
        secondary:
          "border-gray-600 bg-gray-800 text-gray-300 [a&]:hover:bg-gray-700",
        destructive:
          "border-gray-800 bg-gray-900 text-white [a&]:hover:bg-gray-800 focus-visible:ring-white/20 dark:focus-visible:ring-white/40 dark:bg-gray-900/60",
        outline:
          "text-gray-300 [a&]:hover:bg-gray-800 [a&]:hover:text-white border-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
