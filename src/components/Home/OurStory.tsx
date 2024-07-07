import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const OurStory: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const storyBg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      if (storyBg.current) {
        const elementHeight = elementRef.current.offsetHeight;
        const parentHeight = storyBg.current.offsetHeight;

        gsap.to(elementRef.current, {
          top: parentHeight - (parentHeight / 100) * 10 - elementHeight, // Move the element to the bottom of the parent
          ease: "power1.inOut", // Apply easing
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 80%", // Start the animation when the top of the element is at 80% of the viewport height
            end: "top -100%", // End the animation when the bottom of the element reaches the top of the viewport
            scrub: 1, // Smooth scrubbing
            // markers: true, // Show markers for debugging
            // onUpdate: (self) => {
            //   const progress = self.progress;
            //   if (storyBg.current) {
            //     storyBg.current.style.backgroundPositionY = `${
            //       100 - progress * 100
            //     }%`;
            //   }
            // },
          },
        });
      }
    }
  }, []);

  return (
    <section
      ref={storyBg}
      className="story-bg text-white relative h-[50rem] max-md:mt-14"
    >
      <div
        ref={elementRef}
        className="story-content relative z-50 top-[5%] flxColStart gap-7 pl-5"
      >
        <p className="">OUR STORY</p>
        <h1 className="text-5xl font-semibold">
          Join us and indulge in the perfect blend of tradition and innovation,
          served with passion and care.
        </h1>
        <p>
          Our restaurant offers a delightful fusion of flavors crafted from the
          freshest local ingredients. Whether you're savoring a romantic dinner,
          enjoying a family gathering, or celebrating a special occasion, our
          inviting atmosphere and attentive service promise a memorable dining
          experience.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
