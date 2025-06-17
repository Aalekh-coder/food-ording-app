import { ShoppingBag, ShoppingCart, Star } from "lucide-react";
import React, { useState } from "react";

const FoodCard = ({
  img,
  title,
  descibe,
  rate,
  addOrder,
  price,
  discountedPrice,
  qty,
}) => {
  return (
    <div className="mx-5 my-8 rounded-lg overflow-hidden border pb-5">
      <div className="relative">
        <span className="bg-red-500 absolute flex items-center text-white px-4 py-3 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 gap-2 rounded-ee-full">
          <p className="text-sm line-through">₹{price ? price : "200"}</p>
          <p>₹{discountedPrice ? discountedPrice : "200"}/Plate</p>
        </span>
        <img src={img} className="h-[13rem] w-full md:h-[14rem]" />
      </div>

      <div className="flex items-center justify-between px-2 md:px-4">
        <div
          className="font-medium my-3 text-lg"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          {title}
        </div>
        <div
          className="flex gap-2 items-center font-bold text-[#333333]"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          <Star fill="#fcfc28" className="text-[#fcfc28]" />
          {rate}
        </div>
      </div>

      <p className="text-left px-2 mb-3 font-semibold md:px-4">{descibe}</p>
      <div className="flex items-center justify-between px-3">
        <button
          onClick={addOrder}
          className="flex items-center px-5 py-2 bg-red-500 rounded-full text-white gap-2 font-semibold"
        >
          <ShoppingBag size={20} /> Order Now
        </button>

        <div className="bg-red-300 p-2 rounded-full text-rose-500">
          {<ShoppingCart className="" /> || qty}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
