import React from "react";
import SmallBanner from "../components/SmallBanner";
import { galleryImages } from "../assets/assets";
import Testimonial from "../components/Testimonial";

const About = () => {
  return (
    <div>
      <SmallBanner>
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full bg-black/40"></div>
        <div className="container flex gap-8 pl-24 py-36 flex-col">
          <h1 className="animated text-5xl md:text-[55px] lg:text-[65px] font-extralight leading-[1.2] opacity-85">
            About Us
          </h1>
        </div>
      </SmallBanner>

      <section id="about" className="py-20">
        <h1 className="w-[70%] lg:w-[40%] text-center mx-auto text-[26px] md:text-[30px] lg:text-[40px] leading-[1.3]">
          This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
        </h1>
        <div className="mx-auto w-[90px] h-[2px] mt-6 mb-10 bg-primary-color" />
        {/* ==== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center md:justify-start items-center px-[50px] md:pl-[110px] lg:pl-[145px]">
          {/* ===Left Portion=== */}
          <div className="flex flex-col w-full md:w-[60%] lg:w-full gap-3">
            <h3 className="w-[100%] lg:w-[70%] text-2xl text-primary-color">
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

      <Testimonial />
    </div>
  );
};

export default About;
