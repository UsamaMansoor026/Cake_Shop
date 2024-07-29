import React from "react";
import "../index.css";
import { galleryImages } from "../assets/assets";

const SmallBanner = ({ children }) => {
  return (
    <div
      style={{ background: `url(${galleryImages.Gallery1})` }}
      className="smallBanner md:h-[380px]"
    >
      {children}
    </div>
  );
};

export default SmallBanner;
