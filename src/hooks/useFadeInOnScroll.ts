import { useEffect, useRef, useState } from "react";
import type React from "react";

interface UseFadeInOnScrollOptions {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
}

interface UseFadeInOnScrollResult {
  ref: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

const useFadeInOnScroll = (
  options: UseFadeInOnScrollOptions = {},
): UseFadeInOnScrollResult => {
  const { rootMargin = "0px", threshold = 0.2, once = true } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [rootMargin, threshold, once]);

  return { ref, isVisible };
};

export default useFadeInOnScroll;

