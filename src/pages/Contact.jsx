import React from "react";
import SmallBanner from "../components/SmallBanner";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <SmallBanner>
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full bg-black/40"></div>
        <div className="container flex gap-8 pl-24 py-36 flex-col">
          <h1 className="animated text-5xl md:text-[55px] lg:text-[65px] font-extralight leading-[1.2] opacity-85">
            Contact Us
          </h1>
        </div>
      </SmallBanner>

      <ContactForm />
    </div>
  );
};

export default Contact;
