import React from "react";

interface buttonProps {
  onClick?: () => void;
  name: String;
  styles?: String;
}

const Button: React.FC<buttonProps> = ({ onClick, name, styles }) => {
  return (
    <button
      onClick={onClick}
      className={`button-animation hover:scale-95 transition duration-700 text-white/90 font-light tracking-[0.1rem] text-[0.7rem] bg-black rounded-full py-[0.85rem] px-7 ${styles}`}
    >
      <p>{name}</p>
    </button>
  );
};

export default Button;
