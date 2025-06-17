import { addItemToCart } from "@/api";
import { createContext, useState } from "react";

export const OrderContext = createContext(null);

export default function OrderProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [foodItem, setfoodItem] = useState(null);
  const [cart, setCart] = useState(null);

  async function handleAddOrder(foodItemId, quantity,image) {
    const response = await addItemToCart(foodItemId, quantity,image);
    console.log(response);
  }

const handleAddQty=(value)=>{
  console.log("plus",value);
 }

 const handleSubQty=(value)=>{
  console.log("minus",value-1);
 }

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        handleAddOrder,
        foodItem,
        setfoodItem,
        cart,
        setCart,
        handleAddQty
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
