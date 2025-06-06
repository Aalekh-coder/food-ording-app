import { Button } from "@/components/ui/button";
import { Bike } from "lucide-react";

const Section1 = () => {
  return (
    <div className="flex items-center flex-col mt-14 gap-3 md:gap-5">
      <p className="flex items-center justify-center gap-2 bg-red-200 rounded-full w-[12rem] px-3 py-3 font-medium text-red-500">
        Within 10 Mins <Bike />
      </p>
      <p
        className="font-bold text-2xl text-[#333333] text-center md:text-4xl"
        style={{ fontFamily: '"Roboto", sans-serif' }}
      >
        Food made from starch
      </p>
      <p
        style={{ fontFamily: "'Caveat', cursive" }}
        className="text-red-500 text-4xl"
      >
        just for your
      </p>
      <p
        style={{ fontFamily: '"Roboto", sans-serif' }}
        className="text-center text-lg font-semibold text-[#333333] px-5"
      >
        Our job is give you amazing taste with less then 10 mins
      </p>

      <div className="border rounded-full px-1 py-1 shadow-lg shadow-rose-300">
        <input
          type="text"
          placeholder="Enter your delivery location"
          className="placeholder:text-gray-400 placeholder:text-[14px] px-4 "
        />
        <Button className="rounded-full bg-red-500 px-3 py-2">Order Now</Button>
      </div>
    </div>
  );
};

export default Section1;
