import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        centered && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 text-sm font-medium mb-3",
          centered && "justify-center w-full",
          light ? "text-yellow-300" : "text-yellow-600"
        )}
      >
        <span className="w-6 h-0.5 bg-current rounded-full" />
        <span>CabExpress</span>
        <span className="w-6 h-0.5 bg-current rounded-full" />
      </div>
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold font-heading",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-yellow-400",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}