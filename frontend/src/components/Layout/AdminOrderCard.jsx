import { useState } from "react";

const OrderCard = ({ customer }) => {
  const [deliveryStatus, setDeliveryStatus] = useState(
    customer?.dilivered ? "In Process":"Delivered"
  );

  const handleStatusChange = (e) => {
    setDeliveryStatus(e.target.value);
  };


  return (
    <>
      {customer ? (
        <div className="bg-white border shadow-xl rounded-xl p-6 max-w-3xl mx-auto space-y-6">
          <div className="flex justify-between items-center border-b pb-4">
            <div>
              <h2 className="text-xl font-semibold">{customer.customerName}</h2>
              <p className="text-sm text-gray-500">{customer.customerEmail}</p>
            </div>
            <div>
              {!customer.paymentStatus ? (
                <span className="text-green-600 font-semibold">Paid</span>
              ) : (
                <span className="text-red-500 font-semibold">Not Paid</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium">Phone</p>
              <p>{customer.customerPhone}</p>
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p>{customer.customerLocation}</p>
            </div>
            <div>
              <p className="font-medium">Total Amount</p>
              <p>₹{customer.totalAmount}</p>
            </div>
            <div>
              <p className="font-medium">Delivery Status</p>
              <select
                value={deliveryStatus}
                onChange={handleStatusChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm"
              >
                <option>In Process</option>
                <option>Delivered</option>
                <option>Rejected</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Ordered Items</h3>
            <ul className="divide-y divide-gray-200">
              {customer.foodItems.map((item, index) => (
                <li key={index} className="py-2 flex justify-between">
                  <span>{item.foodName}</span>
                  <span className="text-gray-500">Qty: {item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 border shadow-lg w-[20rem] h-[30em] rounded-xl animate-pulse"></div>
      )}
    </>
  );
};

export default OrderCard;
