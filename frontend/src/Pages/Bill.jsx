import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Bill = () => {
  const storedData = JSON.parse(localStorage.getItem("cart"));
  console.log(storedData);
  return (
    <div>
      <DialogHeader>
        <DialogTitle
          className="text-center text-4xl text-rose-400"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Your Bill
        </DialogTitle>
        <DialogDescription>
          A bill is like a shopping list with prices, telling you exactly what
          you bought and how much you need to pay.
        </DialogDescription>
      </DialogHeader>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          🧾 Your Order Summary
        </h2>
        <div className="w-full h-[30vh] overflow-auto">
          {storedData?.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between mb-4 border-b pb-2"
            >
              <div className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt={item.foodName}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.foodName}</h3>
                  <p className="text-sm text-gray-500">
                    {item.foodDescription}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">Qty: {item.qty}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-base font-semibold text-green-600">
                  ₹{item.discountedPrice} x {item.qty}
                </p>
                <p className="text-sm text-gray-400 line-through">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4 pt-4 border-t font-bold text-lg">
          <span>Total</span>
          <span>
            ₹
            {storedData?.reduce(
              (total, item) => total + item.discountedPrice * item.qty,
              0
            )}
          </span>
        </div>
        <Button
          className="w-full my-5 bg-blue-500 text-white"
          variant="outline"
        >
          Pay
        </Button>
      </div>
    </div>
  );
};

export default Bill;
