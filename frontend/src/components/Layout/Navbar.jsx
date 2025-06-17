import { Minus, Plus, ShoppingCart, Vault } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { OrderContext } from "@/context/Order-context";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { getItemOfCart } from "@/api";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const Navbar = ({ orderItem }) => {
  const { order, cart, setCart,handleAddQty } = useContext(OrderContext);

 

  useEffect(() => {
    const getItemOfCartData = async () => {
      try {
        const { data } = await getItemOfCart();
        console.log(data);
        setCart(data?.foodItems);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    getItemOfCartData();
  }, []);

  return (
    <div className="w-full h-14 flex px-5 items-center justify-between md:px-14 md:pt-5 lg:py-5  fixed top-0 z-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: 2,
        }}
        style={{ fontFamily: "'Caveat', cursive" }}
        className="text-3xl "
      >
        <Link to={"/"}>Masala Story</Link>
      </motion.div>

      <Sheet>
        <SheetTrigger>
          <div className="px-3 rounded-full py-3 bg-rose-500 relative">
            <span className="h-5 w-5 bg-rose-300 absolute top-0 -left-1 flex items-center justify-center rounded-full">
              {cart ? cart?.length : 0}
            </span>
            <ShoppingCart />
          </div>
        </SheetTrigger>
        <SheetContent className="">
          <VisuallyHidden.Root>
            <SheetHeader>
              <SheetTitle>nav</SheetTitle>
              <SheetDescription>dfsdfsd</SheetDescription>
            </SheetHeader>
          </VisuallyHidden.Root>

          <div className="mt-10">
            <p
              className="font-bold text-3xl text-[#333] mb-5 ml-5"
              style={{ fontFamily: '"Roboto", sans-serif' }}
            >
              Food Items
            </p>

            <div className="overflow-y-auto h-[65vh]">
              {cart && cart.length ? (
                cart?.map((item, index) => {
                  return (
                    <FoodItem
                      img={item?.img || item?.image}
                      title={item?.title || item?.foodName}
                      key={index}
                      qty={item?.qty || item?.quantity}
                      // functiuon={() => handleItemIndex(order[index])}
                    />
                  );
                })
              ) : (
                <div className="px-5 ">
                  <img
                    src="./food-order-gif.gif"
                    alt="chife"
                    className="rounded-xl"
                  />

                  <p
                    className="font-bold text-3xl text-rose-500"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    Please Put Some meals to your Cart
                  </p>
                </div>
              )}
            </div>
          </div>

          {order && order?.length ? (
            <Link
              to={"/payment"}
              className=" w-full  flex items-center justify-center"
            >
              <button
                style={{ fontFamily: '"Roboto", sans-serif' }}
                className="bg-blue-800 font-bold text-white mx-4 px-14 py-2 rounded-full"
              >
                Pay ₹{" "}
                {order.reduce((acc, curr) => {
                  return acc + curr.price;
                }, 0)}
              </button>
            </Link>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;

const FoodItem = ({ img, title, qty, functiuon }) => {
  const { order,handleAddQty } = useContext(OrderContext);

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
          <div
            className="border-green-400 border-2 rounded-full"
            onClick={() => handleAddQty(qty)}
          >
            <Plus />
          </div>
          <div className="font-medium text-2xl">{qty}</div>
          <div className="border-red-400 border-2 rounded-full">
            <Minus />
          </div>
        </div>
      </div>
    </div>
  );
};
