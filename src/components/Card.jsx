import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Card = ({ id, name, image, price }) => {
  const handleClick = () => {
    toast.success("Added to cart");
  };

  return (
    <article key={id}>
      <Link to="/cakes">
        <div className="overflow-hidden">
          <img
            className="w-full aspect-square object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div className="my-3">
          <h3 className="text-2xl">{name}</h3>
        </div>
        <div className="flex items-center justify-between mr-4">
          <p className="text-primary-color font-semibold">$ {price}</p>

          <button
            onClick={handleClick}
            className="text-primary-color border border-primary-color py-2 px-6 font-semibold duration-150 hover:bg-primary-color hover:text-white"
          >
            Add To Cart
          </button>
        </div>
      </Link>
    </article>
  );
};

export default Card;
