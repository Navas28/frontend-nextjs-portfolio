"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-white dark:text-black leading-none cursor-none peer-disabled:opacity-70",
      className
    )}
    {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
