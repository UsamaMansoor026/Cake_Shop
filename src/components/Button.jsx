import React from "react";

const Button = ({ text, bgColor, border }) => {
  return (
    <div>
      <button
        className={`${bgColor} ${
          border === "true" ? "border border-primary-color" : "border-none"
        } py-2 px-6 text-primary-color font-bold hover:bg-primary-color hover:text-white duration-300 `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
