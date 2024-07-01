import React from "react";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div>
      <Banner>
        <div className="container flex gap-8 pl-24 py-28 flex-col">
          <h1 className="text-6xl font-extralight leading-[1.2] opacity-85">
            About Us
          </h1>
        </div>
      </Banner>
    </div>
  );
};

export default About;
