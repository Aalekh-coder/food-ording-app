import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Bike,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Star,
} from "lucide-react";

const Home = () => {
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
    <>
      <Navbar />
      {/* hero  */}
      <div className="md:flex md:px-10 md:justify-between">
        <div className="flex items-center justify-center ">
          <img
            src="./plait2.jfif"
            className="h-[50vh] md:h-[80vh] hidden lg:block lg:h-[50vh]"
          />
        </div>
        <div className="flex items-center flex-col mt-5 gap-3 md:gap-5 md:w-1/2 lg:gap-5 lg:mt-24 ">
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
            <Button className="rounded-full bg-red-500 px-3 py-2">
              Order Now
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src="./plait-removebg-preview.png"
            className="h-[50vh] md:h-[80vh]"
          />
        </div>
      </div>

      {/* second sections */}

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
              <img
                src="./16485210_5739256.jpg"
                className="lg:h-[42vh] lg:ml-5"
              />
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
                just open your door and enjoy your meal and give postive
                feedback.
              </p>
            </div>
          </div>
        </div>

      {/* third section  */}

      <div className=" w-full text-center ">
          <button className="px-4 py-2 bg-red-200 rounded-full font-medium text-red-400 mb-5 ">
            Our Menu
          </button>
          <div className="font-bold text-[#333333] text-2xl mb-8 md:text-3xl md:flex md:flex-col">
            Choose your favorite dish and Click to{" "}
            <span
              className="text-rose-500 text-2xl md:text-4xl"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Order Now
            </span>
          </div>

          <div className="flex flex-wrap my-4 gap-1 px-2 justify-center  md:mt-10">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:px-5 lg:grid-cols-4">
            {foodItems?.map((foodItem, index) => {
              return <FoodCard key={index} img={foodItem?.img} title={foodItem?.title} descibe={foodItem?.describe} rate={foodItem?.rate}/>
            })}
          </div>
        </div>

        {/* fouth section  */}

        <div className="h-[100vh] mx-3 bg-red-200 rounded-xl">

        </div>
      <Footer />
    </>
  );
};

export default Home;

const FoodCard = ({ img, title, descibe, rate }) => {
  return (
    <div className="mx-5 my-8 rounded-lg overflow-hidden border pb-5">
      <div>
        <span></span>
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
