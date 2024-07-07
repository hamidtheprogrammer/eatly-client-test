import React from "react";
import { Hero, OurStory, PopularProducts } from "../constants/Imports";

const Home: React.FC = () => {
  return (
    <main className="relative">
      <div className="relative w-full max-lg:bg-[#ffe6e6] lg:pt- ">
        <div className="wrapper relative">
          <Hero />
        </div>
      </div>
      <div className="wrapper relative mt-20">
        <PopularProducts />
        <OurStory />
      </div>
      <div className="h-[200vh]"></div>
    </main>
  );
};

export default Home;
