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

export const addCustomerDetails = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "/api/customer/addDetail",
      formData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Payment

export const paymentCheckout = async (amount) => {
  const {
    data: { key },
  } = await axiosInstance.get("/api/getkey");

  const { data } = await axiosInstance.post("/api/payment/checkout", {
    amount,
  });

  const options = {
    key, // Replace with your Razorpay key_id
    amount: data?.order?.amount,
    currency: "INR",
    name: "Aalekh",
    description: "Test Transaction learning payment",
    order_id: data?.order?.id,
    callback_url: "http://localhost:3000/api/payment/paymentverification", // Your success URL
    prefill: {
      name: "Aalekh",
      email: "aalekh.kumar@example.com",
      contact: "8527713086",
    },
    theme: {
      color: "#F37254",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();

  return data;
};
