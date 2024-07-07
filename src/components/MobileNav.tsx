import React from "react";
import Nav from "./Nav";

interface MobileNavProps {
  isOpen: Boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen }) => {
  return (
    <Nav
      styles={`${
        isOpen ? "" : "scale-y-0"
      }  origin-top fixed top-20 mx-auto shadow-xl p-5 bg-white z-10 w-[70vw] max-sm:right-10 wide-nav flxColStart gap-8 transition duration-500`}
    />
  );
};

export default MobileNav;
