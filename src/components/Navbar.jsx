import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="px-7 py-7">
      <div className="flex items-center justify-between">
        {/* Social Links */}
        <ul className="flex items-center gap-5">
          <li className="icon text-xl duration-300 hover:text-primary-color">
            <a href="/">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="icon text-xl duration-300 hover:text-primary-color">
            <a href="/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li className="icon text-xl duration-300 hover:text-primary-color">
            <a href="/">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
        <h1 className="shopName text-6xl italic text-primary-color cursor-pointer">
          Maan Cakes
        </h1>
        <Button
          text="Call Us: +92 334 5137178"
          bgColor="transparent"
          border="true"
        />
      </div>

      {/* Links */}
      <ul>
        <li>Home</li>
        <li>cakes</li>
        <li>about</li>
        <li>blog</li>
        <li>contact</li>
      </ul>
    </header>
  );
};

export default Navbar;
