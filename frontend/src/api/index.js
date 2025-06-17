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

export const addCustomerDetails = async (formData)=>{
  try {
    const response = await axiosInstance.post("/api/customer/addDetail",formData);
    return response.data
  } catch (error) {
    console.log(error);

  }
}
