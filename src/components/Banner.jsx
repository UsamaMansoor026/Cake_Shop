import React from "react";
import { galleryImages } from "../assets/assets";

const Banner = ({ children }) => {
  return (
    <div
      style={{ background: `url(${galleryImages.Gallery1})` }}
      className="bg-cover bg-no-repeat bg-center"
    >
      {children}
    </div>
  );
};

export default Banner;
