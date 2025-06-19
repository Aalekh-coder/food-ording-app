import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="px-5 md:flex md:justify-between md:px-10 lg:mb-8 lg:px-20">
      <div>
      <div className="flex flex-col gap-5 mb-5 ">
        <p style={{ fontFamily: "'Caveat', cursive" }} className="hover:text-rose-500 duration-300 ease-in-out font-bold text-3xl hover:skew-y-6">
          Masala Story
        </p>
        <p className="font-semibold text-[#333333] ">
          Our job to give you amazing taste with less then 10 mins
        </p>
        <div className="flex items-center gap-5">
          <Instagram className="text-rose-600" />
          <Facebook className="text-rose-600" />
          <Twitter className="text-rose-600" />
        </div>
      </div>

      </div>

      <div className="md:flex md:gap-7">
        <div className="flex flex-col gap-2 mb-5">
          <p className="font-medium text-xl ">About</p>
          <p className="font-semibold text-[#333333]">Menu</p>
          <p className="font-semibold text-[#333333]">How it works?</p>
          <p className="font-semibold text-[#333333]">Testimonials</p>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <p className="font-medium text-xl ">Legal</p>
          <p className="font-semibold text-[#333333]">Privacy</p>
          <p className="font-semibold text-[#333333]">Terms and Conditions</p>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <p className="font-medium text-xl ">Contact</p>
          <p className="font-semibold text-[#333333]">Phone No. xxxxxxxx</p>
          <p className="font-semibold text-[#333333]">
            Address: ABCEFDFDF fdv vf
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
