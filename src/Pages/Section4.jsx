import { ShoppingBag, ShoppingCart, Star } from "lucide-react";
import React from "react";

const Section4 = () => {
  const foodItems = [
    {
      img: "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
      title: "Rajma Chawal",
      describe: "light, nutritious and quick-to-make Breakfast",
      rate: 4.5,
    },
    {
      img: "https://www.whiskaffair.com/wp-content/uploads/2020/06/Aloo-Paratha-2-3.jpg",
      title: "Aloo Paratha",
      describe: "Wholesome and delicious breakfast option",
      rate: 4.2,
    },
    {
      img: "https://www.mrishtanna.com/wp-content/uploads/2018/04/poha-indian-breakfast-recipe.jpg",
      title: "Poha",
      describe: "A light and flavorful breakfast dish",
      rate: 4.0,
    },
    {
      img: "https://vegecravings.com/wp-content/uploads/2017/03/Aloo-Samosa-Recipe-Step-By-Step-Instructions.jpg",
      title: "Samosa",
      describe: "A popular and savory snack",
      rate: 4.3,
    },
  ];
  return (
    <div className="text-center ">
      <button className="px-4 py-2 bg-red-200 rounded-full font-medium text-red-400 mb-5 md:scale-110">
        Our Menu
      </button>
      <div className="font-bold text-[#333333] text-2xl mb-8 md:text-3xl md:flex md:flex-col lg:text-4xl">
        Choose your favorite dish and Click to{" "}
        <span
          className="text-rose-500 text-2xl md:text-4xl"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Order Now
        </span>
      </div>

      <div className="flex flex-wrap my-4 gap-1 px-2 justify-center md:scale-125 md:mt-10 lg:scale-100">
        <button className=" text-sm px-4 py-1 bg-rose-500 rounded-full font-medium text-white ">
          All
        </button>
        <button className=" text-sm px-4 py-1 bg-rose-200 rounded-full font-medium text-red-500">
          Breakfast
        </button>
        <button className=" text-sm px-4 py-1 bg-rose-200 rounded-full font-medium text-red-500">
          Lunch
        </button>
        <button className=" text-sm px-4 py-1 bg-rose-200 rounded-full font-medium text-red-500">
          Dinner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:px-5 lg:grid-cols-4">
        {foodItems?.map((foodItem, index) => {
          return (
            <FoodCard
              key={index}
              img={foodItem?.img}
              title={foodItem?.title}
              descibe={foodItem?.describe}
              rate={foodItem?.rate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section4;

const FoodCard = ({img, title, descibe, rate}) => {
  return (
    <div className="mx-5 my-8 rounded-lg overflow-hidden border pb-5">
      <div>
        <span></span>
        <img src={img} className="h-[13rem] w-full md:h-[14rem]"/>
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
        <button className="flex items-center px-5 py-2 bg-red-500 rounded-full text-white gap-2 font-semibold">
          <ShoppingBag size={20} /> Order Now
        </button>

        <div className="bg-red-300 p-2 rounded-full text-rose-500">
          <ShoppingCart className="" />
        </div>
      </div>
    </div>
  );
};