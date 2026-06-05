"use client";

import { motion, Variants } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  className?: string;
}

interface HeroSectionProps {
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
  description?: string;
  actions?: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection = ({
  badge,
  title,
  subtitle,
  description,
  actions = [],
  stats,
  images,
  className,
}: HeroSectionProps) => {
  return (
    <section className={cn("w-full overflow-hidden bg-black text-white py-14 md:py-16 relative", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,193,7,0.03),transparent)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {badge && (
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs font-extrabold text-yellow-400 uppercase tracking-widest border border-yellow-400/20 bg-yellow-400/5 px-4 py-1.5 rounded-full">
                {badge}
              </span>
            </motion.div>
          )}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-white leading-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p className="mt-4 max-w-md text-sm md:text-base text-gray-400 leading-relaxed font-medium" variants={itemVariants}>
            {subtitle}
          </motion.p>
          {description && (
            <motion.p className="mt-2 max-w-md text-xs text-gray-500 font-medium" variants={itemVariants}>
              {description}
            </motion.p>
          )}
          {actions.length > 0 && (
            <motion.div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.onClick}
                  variant={action.variant}
                  size="lg"
                  className={cn(
                    action.variant === "default"
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold rounded-full"
                      : "border border-white/20 hover:border-yellow-400 text-white hover:text-yellow-400 font-bold rounded-full",
                    action.className
                  )}
                >
                  {action.text}
                </Button>
              ))}
            </motion.div>
          )}
          <motion.div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start" variants={itemVariants}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 min-w-[130px] sm:min-w-[150px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-yellow-400 flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-black text-yellow-400 font-heading leading-tight">{stat.value}</p>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-bold tracking-tight">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[320px] w-[85%] mx-auto sm:w-full sm:h-[420px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-4 left-1/4 h-12 w-12 rounded-full bg-yellow-400/10 pointer-events-none"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-4 right-1/4 h-10 w-10 rounded-lg bg-yellow-400/5 pointer-events-none"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "0.5s" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-4 h-6 w-6 rounded-full bg-yellow-400/10 pointer-events-none"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "1s" }}
          />

          {/* Images */}
          <motion.div
            className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-2xl bg-neutral-900 p-2.5 shadow-xl sm:h-52 sm:w-52 border border-neutral-800"
            style={{ transformOrigin: "bottom center" }}
            variants={imageVariants}
          >
            <img src={images[0]} alt="Premium Cabs Fleet" className="h-full w-full rounded-xl object-cover" />
          </motion.div>
          <motion.div
            className="absolute right-0 top-1/4 h-32 w-32 rounded-2xl bg-neutral-900 p-2.5 shadow-xl sm:h-44 sm:w-44 border border-neutral-800"
            style={{ transformOrigin: "left center" }}
            variants={imageVariants}
          >
            <img src={images[1]} alt="Chauffeur Service" className="h-full w-full rounded-xl object-cover" />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-28 w-28 rounded-2xl bg-neutral-900 p-2.5 shadow-xl sm:h-38 sm:w-38 border border-neutral-800"
            style={{ transformOrigin: "top right" }}
            variants={imageVariants}
          >
            <img src={images[2]} alt="Beautiful Destinations" className="h-full w-full rounded-xl object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
