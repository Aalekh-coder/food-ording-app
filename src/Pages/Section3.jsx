import React from "react";

const Section3 = () => {
  return (
    <div className="border-t mt-10 border-b pb-10 mb-10">
      <p
        style={{ fontFamily: '"Roboto", sans-serif' }}
        className="font-bold text-xl text-[#333333] text-center px-4 mt-8 md:text-3xl"
      >
        Your Favorite Food in your door step in
      </p>
      <p
        style={{ fontFamily: "'Caveat', cursive" }}
        className="text-red-500 text-3xl text-center md:text-4xl"
      >
        just 3 steps
      </p>

      <div className="lg:grid grid-cols-3 lg:px-10">
        <div className="my-5">
          <img src="./16485210_5739256.jpg" className="lg:h-[42vh] lg:ml-5" />
          <p
            className="font-bold text-2xl text-center text-[#333333]"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Step 1: Easy To Order
          </p>
          <p className="text-center px-2">
            Enter you location and select your favorite food
          </p>
        </div>
        <div className="my-5">
          <img src="./6982750_3333449.jpg" alt="" />
          <p
            className="font-bold text-2xl text-center text-[#333333]"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Step 2: Fastest Delivery
          </p>
          <p className="text-center px-2">
            Delivery that is always on time even faster
          </p>
        </div>
        <div className="my-5">
          <img src="./5841882_2968304.jpg" alt="" />
          <p
            className="font-bold text-2xl text-center text-[#333333]"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Step 3: Open your door
          </p>
          <p className="text-center px-2">
            just open your door and enjoy your meal and give postive feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
