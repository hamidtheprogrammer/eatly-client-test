import React, { useState } from "react";
import { Button, Nav, useScrollPosition } from "../constants/Imports.tsx";
import { Link } from "react-router-dom";
import { MobileNav } from "../constants/Imports.tsx";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <header className="relative w-full lg:top-0 max-lg:bg-[#ffe6e6] z-[99]">
      <nav className="relative wrapper flxBtw items-center py-5 max-lg:bg-[#ffe6e6]">
        <Link className="sm:order-2 lg:order-1" to={"/"}>
          <h1 className=" max-sm:w-40 sm:w-44 grid w-fit grid-cols-3 grid-rows-1">
            <div className="row-start-1 row-end-2 mr-1">
              <img
                className="select-none aspect-square"
                src="../../public/ramen.png"
                alt=""
              />
            </div>
            <div className="flxColStart">
              <span className="text-[1.4rem] sm:text-[1.9rem] font-[550] tracking-widest col-start-2 col-end-3">
                Eatly
              </span>
              <span className="text-[0.5rem] tracking-wider sm:text-[0.7rem] text-nowrap font-[400] -translate-y-1/2 sm:font-[480] text-black/80">
                See You Tomorrow
              </span>
            </div>
          </h1>
        </Link>
        <Nav styles={"wide-nav flxRowCenter lg:order-2 max-lg:hidden gap-10"} />
        <button
          onClick={() => {
            setIsNavOpen((prev) => !prev);
          }}
          className={` sm:order-1 mr-20 max-sm:mr-0 ${
            scrollPosition > 121
              ? "fixed bg-white w-40 z-20 flxBtw items-center px-5 py-4 "
              : "lg:hidden"
          }`}
        >
          <span
            className={`${
              scrollPosition < 121 && "hidden"
            } text-[1.3rem] font-[550] tracking-widest`}
          >
            Eatly
          </span>
          <i className="relative left-0 text-2xl fa-solid fa-bars "></i>
        </button>
        <MobileNav isOpen={isNavOpen} />
        <Button
          name={"Book a table"}
          styles={"order-3 max-sm:hidden text-nowrap"}
        />
      </nav>
    </header>
  );
};

export default Header;
