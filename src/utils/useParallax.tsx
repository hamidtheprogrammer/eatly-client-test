import { useEffect } from "react";

interface UseParallaxProps {
  start: number;
  stop: number;
  observedEl: string;
  animatedEl: string;
}

const useParallax = ({
  start,
  stop,
  observedEl,
  animatedEl,
}: UseParallaxProps) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 101 }, (_, i) => i * 0.01), // Create an array of thresholds from 0 to 1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const { boundingClientRect, rootBounds } = entry;
        const elementHeight = boundingClientRect.height;
        const viewportHeight = rootBounds
          ? rootBounds.height
          : window.innerHeight;
        const intersectionRatio =
          (viewportHeight - boundingClientRect.top) /
          (viewportHeight + elementHeight);

        if (intersectionRatio >= start && intersectionRatio <= stop) {
          const percentage = (intersectionRatio - start) / (stop - start);
          const translateY = 100 * percentage; // Example calculation, adjust as needed

          document.querySelectorAll(animatedEl).forEach((el) => {
            (el as HTMLElement).style.transform = `translateY(${translateY}px)`;
          });
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    document.querySelectorAll(observedEl).forEach((el) => {
      observer.observe(el as Element);
    });

    return () => {
      observer.disconnect();
    };
  }, [start, stop, observedEl, animatedEl]);
};

export default useParallax;
