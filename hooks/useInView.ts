"use client";
import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
