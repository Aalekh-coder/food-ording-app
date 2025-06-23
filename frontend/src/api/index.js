import axiosInstance from "./axiosInstance";

export async function addFoodItem(formData) {
  const { data } = await axiosInstance.post("/api/add", formData);

  return data;
}

export async function fetchAllFoodItems() {
  const { data } = await axiosInstance.get("/api/get");
  return data;
}

// cart

export const addItemToCart = async (foodItemId, quantity, image) => {
  try {
    const response = await axiosInstance.post("/api/cart", {
      foodItemId,
      quantity,
      image,
    });
    return response.data; // Return the response data (e.g., the updated cart)
  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw error; // Re-throw the error so the calling component can handle it
  }
};

export async function getItemOfCart() {
  const { data } = await axiosInstance.get("/api/cart");
  return data;
}

export async function editQuantityInCart() {
  const { data } = await axiosInstance.put("/api/cart");
  return data;
}

// customer deatils

export const addCustomerFullDetails = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "/api/customer/addFullDetails",
      formData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const isPaymentCheckService = async (id)=>{
  try {
    const response = await axiosInstance.put(`/api/customer/${id}/payment`);
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const getCustomerByIdAdminService = async (id)=>{
  try {
    const {data} = await axiosInstance.get(`/api/customer/${id}`);
    return data
  } catch (error) {
    console.log(error);
  }
}


// Payment
export const paymentCheckout = async (amount) => {
  const {
    data: { key },
  } = await axiosInstance.get("/api/getkey");

  const { data } = await axiosInstance.post("/api/payment/checkout", {
    amount,
  });

    const customerDetails = JSON.parse(localStorage.getItem("customerDetails"));

  
  const options = {
    key, 
    amount: data?.order?.amount,
    currency: "INR",
    name: customerDetails?.customerName,
    description: "Test Transaction learning payment",
    order_id: data?.order?.id,
    // backend url
    // callback_url: "http://localhost:3000/api/payment/paymentverification",
    callback_url: "https://food-ording-app.onrender.com/api/payment/paymentverification",
    prefill: {
      name: customerDetails?.customerName,
      email: customerDetails?.customerEmail,
      contact: customerDetails?.customerPhone,
    },
    theme: {
      color: "#F37254",
    },
  };



  const rzp = new window.Razorpay(options);
  rzp.open();

  return data;
};


// dashboard api

export const dashboardListService = async ()=>{
  try {
    const response = await axiosInstance.get("/api/customer/getAllDetails");
    return response.data
  } catch (error) {
    console.log(error);
  }
}