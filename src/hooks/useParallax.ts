import { useEffect, useState } from "react";

interface UseParallaxOptions {
  multiplier?: number;
}

interface UseParallaxResult {
  offsetY: number;
}

const useParallax = (options?: UseParallaxOptions): UseParallaxResult => {
  const multiplier = options?.multiplier ?? 0.25;
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let ticking = false;

    const handleScroll = (): void => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY * multiplier);
          ticking = false;
        });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [multiplier]);

  return { offsetY };
};

export default useParallax;

