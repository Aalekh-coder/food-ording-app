import { Star } from 'lucide-react';
import React from 'react'

const TestimonialCard = ({ img, name, descibe }) => {
  return (
    <div className="border mx-3 my-8 rounded-xl p-4 bg-gradient-to-b to-rose-400 from-rose-100">
      <img
        className="h-20 w-20 rounded-full"
        src={
          img
            ? img
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DCs0RF4l146RPy1fxiLnhtAd411t4Ptv6A&s"
        }
        alt="profile image"
      />
      <p
        className="font-medium text-rose-500 text-2xl my-2"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        {name ? name : "Neha, Project"}
      </p>
      <p
        style={{ fontFamily: '"Roboto", sans-serif' }}
        className="text-white font-bold"
      >
        {descibe
          ? descibe
          : "Fantastic Service! The Food was amazing, delivery boy was very king and services was very fast, Highly recommed!"}
      </p>
      <div className="flex items-center gap-2 my-2">
        <Star fill="#ffee00" className="text-[#ffee00]" />
        <Star fill="#ffee00" className="text-[#ffee00]" />
        <Star fill="#ffee00" className="text-[#ffee00]" />
        <Star fill="#ffee00" className="text-[#ffee00]" />
        <Star fill="#ffee00" className="text-[#ffee00]" />
      </div>
    </div>
  );
};

export default TestimonialCard