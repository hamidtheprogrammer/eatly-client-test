import { useEffect } from "react";

interface ProximityHoverProps {
  containerSelector: string;
  innerElSelector: string;
}

const useProximityHover = ({
  containerSelector,
  innerElSelector,
}: ProximityHoverProps): void => {
  useEffect(() => {
    const containerEls = document.querySelectorAll(containerSelector);

    const animate = (
      event: MouseEvent,
      containerEl: HTMLElement,
      innerEl: HTMLElement
    ) => {
      const rect = containerEl.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
      const distance = Math.min(20, Math.hypot(mouseX - eyeX, mouseY - eyeY));

      const moveX = Math.cos(angle) * distance;
      const moveY = Math.sin(angle) * distance;

      innerEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    containerEls.forEach((containerEl) => {
      const innerEl = containerEl.querySelector(innerElSelector) as HTMLElement;
      if (!innerEl) {
        console.error(`Inner element not found: ${innerElSelector}`);
        return;
      }

      const handleMouseMove = (event: MouseEvent) =>
        animate(event, containerEl as HTMLElement, innerEl);
      containerEl.addEventListener(
        "mousemove",
        handleMouseMove as EventListener
      );

      const handleMouseLeave = () => {
        innerEl.style.transform = `translate(${0}px, ${0}px)`;
      };
      containerEl.addEventListener("mouseleave", handleMouseLeave);
      // Cleanup function to remove the event listeners
      return () => {
        containerEl.removeEventListener(
          "mousemove",
          handleMouseMove as EventListener
        );
        containerEl.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [containerSelector, innerElSelector]);
};

export default useProximityHover;
