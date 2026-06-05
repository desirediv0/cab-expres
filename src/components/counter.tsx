"use client";

import { useState, useEffect } from "react";

interface CounterProps {
  value: string;
  duration?: number;
}

export function Counter({ value, duration = 1200 }: CounterProps) {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    if (isNaN(target)) return;
    let start = 0;
    const end = target;
    const totalSteps = 40;
    const increment = Math.ceil(end / totalSteps);
    const stepTime = Math.max(15, Math.floor(duration / totalSteps));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  if (isNaN(target)) {
    return <span>{value}</span>;
  }
  const suffix = value.replace(/[0-9]/g, "");
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
