import { createContext,  useState } from "react";
import toast from "react-hot-toast";

export const OrderContext = createContext(null);

export default function OrderProvider({children}){
    const [order, setOrder] = useState([]);

    function handleAddOrder(item) {
       toast.success(`Your ${item?.title} add to cart`);
       setOrder([item,...order])
    }

    return (
        <OrderContext.Provider value={{order, setOrder,handleAddOrder}}>{children}</OrderContext.Provider>
    )
}