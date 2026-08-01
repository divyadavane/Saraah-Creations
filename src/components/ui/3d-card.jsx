"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const Card3D = React.forwardRef(({ children, className, max = 10, style }, ref) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [`${max}deg`, `-${max}deg`]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [`-${max}deg`, `${max}deg`]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const { width, height, left, top } = rect;
    const mouseXVal = e.clientX - left;
    const mouseYVal = e.clientY - top;
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        ...style
      }}
      className={cn(
        "will-change-transform",
        className
      )}
    >
      <div
        style={{
          transform: "translateZ(30px)",
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
});

Card3D.displayName = "Card3D";
