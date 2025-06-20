import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { Button } from "@/components/ui/button";
import { foodItems, testimonials } from "@/config";
import { OrderContext } from "@/context/Order-context";
import {
  ArrowRight,
  Bike,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { easeInOut, motion } from "motion/react";
import { fetchAllFoodItems } from "@/api";
import FoodCard from "@/components/subcomponents/FoodCard";
import TestimonialCard from "@/components/subcomponents/TestimonialCard";


const Home = () => {
  const { handleAddOrder,foodItemsData} =
    useContext(OrderContext);

  return (
    <>
      <Navbar orderItem={5} />
      {/* hero  */}
      <div className="mt-20 md:flex md:px-10 md:justify-between overflow-hidden lg:mt-20">
        <motion.div
          className="flex items-center justify-center "
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          whileHover={{
            rotate: 5,
            scale: 1.05,
          }}
        >
          <img
            src="./butterchick-removebg-preview.png"
            className="h-[50vh] md:h-[80vh] hidden lg:block lg:h-[45vh]"
          />
        </motion.div>
        <motion.div
          className="flex items-center flex-col mt-5 gap-3 md:gap-5 md:w-1/2 lg:gap-5 lg:mt-24"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
        >
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

          <div className="border rounded-full px-1 py-1 shadow-lg shadow-rose-300 hover:shadow-rose-500 duration-200">
            <input
              type="text"
              placeholder="Enter your delivery location"
              className="placeholder:text-gray-400 placeholder:text-[14px] px-4 border-none focus:outline-none font-semibold text-rose-700"
            />
            <Button className="rounded-full bg-red-500 px-3 py-2">
              Order Now
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          whileHover={{
            rotate: 5,
            scale: 1.05,
          }}
        >
          <img src="./rajma.png" className="h-[50vh] md:h-[80vh] lg:h-[70vh]" />
        </motion.div>
      </div>

      {/* second sections */}

      <div className="border-t mt-10 border-b pb-10 mb-10 overflow-hidden">
        <motion.p
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontFamily: '"Roboto", sans-serif' }}
          className="font-bold text-xl text-[#333333] text-center px-4 mt-8 md:text-3xl"
        >
          Your Favorite Food in your door step in
        </motion.p>
        <motion.p
          style={{ fontFamily: "'Caveat', cursive" }}
          className="text-red-500 text-3xl text-center md:text-4xl"
          initial={{ y: -30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          just 3 steps
        </motion.p>

        <motion.div
          className="lg:grid grid-cols-3 lg:px-10"
          initial={{ x: -30 }}
          whileInView={{
            x: 0,
          }}
          transition={{
            duration: 0.2,
            ease: easeInOut,
          }}
        >
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
        </motion.div>
      </div>

      {/* third section  */}

      <div className=" w-full text-center border-b lg:pb-14 overflow-hidden">
        <motion.button
          className="px-4 py-2 bg-red-200 rounded-full font-medium text-red-400 mb-5"
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Our Menu
        </motion.button>
        <motion.div
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.2 }}
          className="font-bold text-[#333333] text-2xl mb-8 md:text-3xl md:flex md:flex-col"
        >
          Choose your favorite dish and Click to{" "}
          <span
            className="text-rose-500 text-2xl md:text-4xl"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Order Now
          </span>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap my-4 gap-1 px-2 justify-center  md:mt-10"
        >
          <button className=" text-sm px-4 py-1 bg-rose-500 rounded-full font-medium text-white md:text-lg md:px-6 md:py-2">
            All
          </button>
          <button className=" text-sm px-4 py-1 bg-rose-200 rounded-full font-medium text-red-500 md:text-lg md:px-6 md:py-2">
            Breakfast
          </button>
          <button className=" text-sm px-4 py-1 bg-rose-200 rounded-full font-medium text-red-500 md:text-lg md:px-6 md:py-2">
            Lunch
          </button>
          <button className=" text-sm px-4 py-1 bg-rose-200 rounded-full font-medium text-red-500 md:text-lg md:px-6 md:py-2">
            Dinner
          </button>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 md:px-5 lg:grid-cols-4"
        >
          {foodItemsData && foodItemsData?.length ? (
            foodItemsData?.map((foodItem, index) => {
              return (
                <FoodCard
                  key={index}
                  img={foodItem?.image}
                  title={foodItem?.foodName}
                  descibe={foodItem?.foodDescription}
                  rate={foodItem?.rate}
                  addOrder={() => handleAddOrder(foodItem)}
                  price={foodItem?.price}
                  discountedPrice={foodItem?.discountedPrice}
                  qty={foodItem?.qty}
                />
              );
            })
          ) : (
            <div>Error while fetching...</div>
          )}
        </motion.div>
      </div>

      {/* fouth section  */}

      <div className="lg:my-20 mx-3 bg-red-200 rounded-xl px-4 py-5 my-10 lg:flex lg:items-center lg:mx-14 lg:py-8 lg:px-20 overflow-hidden">
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p
            className="font-bold text-3xl text-red-500 lg:text-5xl lg:my-5"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            The Masala Story
          </p>
          <p className="font-semibold text-[#333] lg:text-lg">
            Our values at The Masala Story are simple: we're passionate about
            bringing you the most authentic and flavorful Indian dishes. We
            believe in using only the freshest, highest-quality ingredients,
            prepared with traditional techniques and a touch of culinary
            innovation. We're committed to creating a warm, inviting atmosphere
            where every meal is a celebration of India's rich culinary heritage.
            Your satisfaction and a memorable dining experience are at the heart
            of everything we do.
          </p>
          <button className="flex items-center gap-3 bg-rose-500 px-4 py-2 rounded-full font-medium text-white my-5">
            Try Now <ArrowRight />
          </button>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-rose-500 rounded-tl-full rounded-lg flex items-center justify-center lg:w-1/2 lg:bg-transparent"
        >
          <img
            src="./chef.png"
            alt="chef"
            className="lg:h-[50vh] lg:bg-rose-500 lg:rounded-tl-full lg:pl-24"
          />
        </motion.div>
      </div>

      {/* five section  */}

      <div className="border-t py-10">
        <motion.div
          className="text-center"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button className="px-3 py-2 bg-red-200 text-red-500 font-medium rounded-full my-3 md:text-xl md:px-5 ">
            Testimonials
          </button>

          <p
            className="font-bold text-2xl text-[#333] mb-1 md:text-3xl lg:text-4xl"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            What Our Customers Say
          </p>
          <p
            className="font-bold text-3xl text-red-500 lg:text-5xl lg:my-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            About Us
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-5 lg:px-10 border-b lg:pb-10"
        >
          {testimonials?.map((item, index) => {
            return (
              <TestimonialCard
                descibe={item?.descibe}
                img={item?.img}
                name={item?.name}
                key={index}
              />
            );
          })}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
