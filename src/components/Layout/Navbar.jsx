import { Minus, Plus, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { OrderContext } from "@/context/Order-context";
import { Link, useNavigate } from "react-router";

const Navbar = ({ orderItem }) => {
  const { order, setOrder, handleAddOrder } = useContext(OrderContext);

  

  return (
    <div className="w-full h-14 flex px-5 items-center justify-between md:px-14 md:mt-5">
      <div style={{ fontFamily: "'Caveat', cursive" }} className="text-3xl">
        Masala Story
      </div>

      <Sheet>
        <SheetTrigger>
          <div className="px-3 rounded-full py-3 bg-rose-500 relative">
            <span className="h-5 w-5 bg-rose-300 absolute top-0 -left-1 flex items-center justify-center rounded-full">
              {orderItem ? orderItem : 0}
            </span>
            <ShoppingCart />
          </div>
        </SheetTrigger>
        <SheetContent className="">
          <div className="mt-10">
            <p
              className="font-bold text-3xl text-[#333] mb-5 ml-5"
              style={{ fontFamily: '"Roboto", sans-serif' }}
            >
              Food Items
            </p>

            <div className="overflow-y-auto h-[65vh]">
              {order && order.length ? (
                order?.map((item, index) => {
                  return (
                    <FoodItem img={item?.img} title={item?.title} key={index} />
                  );
                })
              ) : (
                <div>Please put Order</div>
              )}
            </div>
          </div>

         {order && order?.length ? <Link to={"/payment"} className=" w-full  flex items-center justify-center">
            <button
              
              style={{ fontFamily: '"Roboto", sans-serif' }}
              className="bg-blue-800 font-bold text-white mx-4 px-14 py-2 rounded-full"
            >
              Pay ₹ {" "}
              {order.reduce((acc, curr) => {
                return acc + curr.price;
              }, 0)}
            </button>
          </Link>:null}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;

const FoodItem = ({ img, title, qty = 1 }) => {
  return (
    <div className="my-3 h-[13vh]  rounded-full flex items-center px-3 gap-3 pl-3 shadow-lg mx-2 md:mx-8 ">
      <div>
        <img
          src={
            img
              ? img
              : "https://www.livingsmartandhealthy.com/wp-content/uploads/2024/02/rajma-recipe.jpg"
          }
          className="h-14 w-14 rounded-full"
        />
      </div>
      <div>
        <p className="font-medium text-lg">{title ? title : "Rajma Chawal"}</p>
        <div className="flex items-center gap-5 px-2">
          <div className="border-green-400 border-2 rounded-full">
            <Plus />
          </div>
          <div className="font-medium text-2xl">{qty ? qty : "1"}</div>
          <div className="border-red-400 border-2 rounded-full">
            <Minus />
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <button  style={{ fontFamily: '"Roboto", sans-serif' }} className="bg-blue-500 font-bold text-white mx-4 px-5 py-2 rounded-full">Pay {order.reduce((acc, curr) => {
                return acc + curr.price;
              }, 0)}</button> */
}
