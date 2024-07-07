import { useEffect, useState } from "react";

const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
};

export default useScrollPosition;
