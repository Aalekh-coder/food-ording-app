import { addItemToCart } from "@/api";
import { foodItems } from "@/config";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const OrderContext = createContext(null);

export default function OrderProvider({ children }) {
  const [foodItem, setfoodItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [foodItemsData, setfoodItemsData] = useState(foodItems);

  // async function handleAddOrder(foodItem) {
  //   toast.success(`${foodItem?.foodName} is add to your cart`)
  //   setCart(prev => [...prev, foodItem])
  // }

  async function handleAddOrder(foodItem) {
  const isAlreadyInCart = cart.some(item => item.foodName === foodItem.foodName);

  if (isAlreadyInCart) {
    toast.error(`${foodItem.foodName} is already in your cart.`);
  } else {
    toast.success(`${foodItem.foodName} is added to your cart`);
    setCart(prev => [...prev, foodItem]);
  }
}

 const increaseQty = (foodName) => {
  setCart(prev =>
    prev.map(item =>
      item.foodName === foodName
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  );
};

const decreaseQty = (foodName) => {
  setCart(prev =>
    prev.map(item =>
      item.foodName === foodName && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    )
  );
};


  return (
    <OrderContext.Provider
      value={{
       foodItemsData,
       setfoodItemsData,
        handleAddOrder,
        foodItem,
        setfoodItem,
        cart,
        setCart,
        increaseQty,
        decreaseQty
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
