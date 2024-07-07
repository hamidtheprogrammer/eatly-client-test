import React from "react";
import { navItems } from "../constants/Imports.tsx";
import { Link } from "react-router-dom";

interface NavProps {
  styles?: string; // Optional styles prop
}

const Nav: React.FC<NavProps> = ({ styles }) => {
  return (
    <ul className={`${styles}`}>
      {navItems.map((nav) => (
        <li className="list-style-none relative flxRowCenter" key={nav.name}>
          <Link to={nav.link} className="tracking-widest text-[0.9rem]">
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
