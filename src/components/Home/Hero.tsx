import React from "react";
import { Button } from "../../constants/Imports";

const Hero: React.FC = () => {
  return (
    <section className="flxBtw pt-16 pb-40 ">
      <main className="lg:w-[48%] max-lg:text-center max-lg:flxColCenter flxColStart gap-7">
        <p className="tiny-heading">EATLY RESTAURANT</p>
        <h1 className="text-5xl font-bold max-lg:text-4xl md:max-w-[30rem] max-sm:text-3xl">
          Savor the Extraordinary at Eatly
        </h1>
        <p className="details-text">
          Enjoy a refined dining experience, where attention to detail and a
          commitment to quality are at the heart of every meal we serve.
        </p>

        <Button
          name={"Reservation"}
          styles={`mt-5 uppercase py-[1.1rem] px-10`}
        />
      </main>
      <aside className="relative right-[20%] translate-y-[70%] h-[20rem] w-[20rem] max-lg:hidden">
        <img
          className="max-lg:hidden absolute h-[20rem] w-[20rem]"
          src="./heroImage1.png"
          alt=""
        />
      </aside>
    </section>
  );
};

export default Hero;
