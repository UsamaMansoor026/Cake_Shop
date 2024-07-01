import React from "react";
import "../index.css";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { galleryImages } from "../assets/assets";

const Home = () => {
  return (
    <div>
      <Banner>
        <div className="container flex gap-8 pl-24 py-36 flex-col">
          <h1 className="text-6xl font-extralight leading-[1.2] opacity-85">
            Healthy Made <br />
            Delicious Cake
          </h1>
          <Button border={true} bgColor={true}>
            Order Now
          </Button>
        </div>
      </Banner>

      <section className="py-20">
        <h1 className="w-[40%] text-center mx-auto text-[40px] leading-[1.3]">
          This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
        </h1>
        <div className="mx-auto w-[90px] h-[2px] mt-6 mb-10 bg-primary-color" />
        {/* ==== */}
        <div className="grid grid-cols-2 gap-6 items-center pl-[145px]">
          {/* ===Left Portion=== */}
          <div className="flex flex-col gap-3">
            <h3 className="w-[70%] text-2xl text-primary-color">
              This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit
              in voluptate velit esse cillum.
            </p>
            <p className="text-white">
              Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercita tion ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute dolor in reprehen derit in voluptate velit
              esse cillum.
            </p>
          </div>

          {/* ===Right Portion=== */}
          <div>
            <img src={galleryImages.Gallery2} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
