"use client";;
import { cn } from "../../lib/utils";
import { motion, useScroll } from "framer-motion";
import React from "react";

export const ScrollProgress = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed h-1 inset-x-0 top-0 z-50 origin-left bg-white",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props} />
  );
});

ScrollProgress.displayName = "ScrollProgress";
