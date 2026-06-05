"use client";

import { motion, useInView } from "framer-motion";
import React, { ElementType, ReactNode, useRef } from "react";

interface TimelineContentProps {
  children?: ReactNode;
  as?: ElementType;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: any;
  className?: string;
  [key: string]: any;
}

export function TimelineContent({
  children,
  as = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  ...props
}: TimelineContentProps) {
  const localRef = useRef(null);
  const triggerRef = timelineRef || localRef;
  const isInView = useInView(triggerRef, { once: true, margin: "-80px 0px" });

  const MotionComponent = motion(as as any);

  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: animationNum * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <MotionComponent
      ref={localRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
