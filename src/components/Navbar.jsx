import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <header className="px-16 lg:px-7 py-7 relative">
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
          <div className="hidden lg:block">
            <Button
              text="Call Us: +92 334 5137178"
              bgColor="transparent"
              border="true"
            />
          </div>
        </div>

        {/* Links */}
        <ul
          className={`${
            mobileNav ? "active" : "inactive"
          } navList hidden lg:flex items-center justify-center gap-6 mt-10 mb-5`}
        >
          <li className="link afterLine">Home</li>
          <li className="link afterLine">cakes</li>
          <li className="link afterLine">about</li>
          <li className="link afterLine">blog</li>
          <li className="link afterLine">contact</li>
        </ul>
      </header>

      {/* Hamburger Menu */}
      <div className="flex justify-end lg:hidden bg-nav-link-bg py-3 ">
        <div className="flex items-center gap-1 mr-3 bg-light-black px-2 py-0.5 rounded-[2px]">
          <strong className="uppercase">Menu</strong>
          <span
            onClick={handleNav}
            className="flex justify-center items-center text-xl"
          >
            <ion-icon name="menu"></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
