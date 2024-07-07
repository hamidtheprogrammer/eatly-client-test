import React, { useState } from "react";
import { Link } from "react-router-dom";
import useProximityHover from "../../utils/useProximityHover";
import Button from "../UI/Button";

interface SpecialItemProps {
  name: string;
  img: string;
  details: string;
  top: string;
}

const PopularProducts: React.FC = () => {
  useProximityHover({
    containerSelector: ".btn-container",
    innerElSelector: "button",
  });

  const [special] = useState<SpecialItemProps[]>([
    {
      name: "Cheese Burger",
      img: "https://images.unsplash.com/photo-1508736793122-f516e3ba5569?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "Was brean shed moveth day yielding tree yielding day were female and",
      top: "top-[10%]",
    },
    {
      name: "Pizza",
      img: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "Was brean shed moveth day yielding tree yielding day were female and",
      top: "top-[ 0%]",
    },
    {
      name: "Sushi",
      img: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:
        "Was brean shed moveth day yielding tree yielding day were female and",
      top: "top-[10%]",
    },
  ]);
  return (
    <section className="relative z-0">
      <header className="flxBtw items-center">
        <div>
          <h1 className="tiny-heading text-black uppercase tracking-widest">
            Popular Dishes
          </h1>
          <h2 className="text-[2.6rem] font-[600] mt-3 max-w-[19rem]">
            Our Exclusive Items.
          </h2>
        </div>
        <Link to={""}>
          <Button styles={"uppercase scale-[110%]"} name={"view full menu"} />
        </Link>
      </header>
      <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-7">
        {special.map((itm, idx) => (
          <li
            key={idx}
            className="h-[24rem] max-md:h-fit cursor-pointer text-white "
          >
            <div
              className={`special-card  ${itm.top} group max-md:aspect-[16/9]`}
            >
              <div className="absolute h-full w-full bg-black/20 z-1"></div>
              <h1 className="absolute uppercase top-[5%] w-full -translate-x-1/2 left-1/2 text-3xl font-bold text-center z-[999px]">
                {itm.name}
              </h1>
              <img
                className="w-full h-full object-cover"
                src={itm.img}
                alt=""
              />
              <div className="absolute top-1/2 w-full -translate-y-1/2 z-[999px]">
                <div className="btn-container special-card-button-container">
                  <button className="special-card-button">
                    <p className="w-1/2 text-center">Learn more</p>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PopularProducts;
