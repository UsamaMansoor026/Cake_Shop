import React from "react";
import { cartItems } from "../assets/assets";
import Card from "../components/Card";
import SmallBanner from "../components/SmallBanner";

const Cakes = () => {
  return (
    <div>
      <SmallBanner>
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full bg-black/40"></div>
        <div className="container flex gap-8 pl-24 py-36 flex-col">
          <h1 className="animated text-5xl md:text-[55px] lg:text-[65px] font-extralight leading-[1.2] opacity-85">
            Delicious Cakes
          </h1>
        </div>
      </SmallBanner>

      {/* all Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 m-6 md:m-16">
        {cartItems.map((item, index) => (
          <div key={index}>
            <Card
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cakes;
