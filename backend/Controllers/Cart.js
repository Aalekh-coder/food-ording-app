import Cart from "../Models/Cart.js";
import Food from "../Models/Food.js";


export const getCart = async (req, res) => {
  try {
    // In a real application, you'd likely associate the cart with a user ID
    // const userId = req.user.id; // Assuming you have user authentication
    const cart = await Cart.findOne({}); //  Modify this to find the cart for the specific user

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ data: cart });
  } catch (error) {
    console.error("Error getting cart:", error);
    res
      .status(500)
      .json({ message: "Failed to get cart", error: error.message });
  }
};

// filepath: backend/Controllers/Cart.js
export const updateCartItem = async (req, res) => {
  try {
    const { foodItemId, quantity } = req.body;

    if (!foodItemId || !quantity) {
      return res
        .status(400)
        .json({ message: "foodItemId and quantity are required" });
    }

    const cart = await Cart.findOne({}); // Modify this to find the cart for the specific user

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const existingCartItemIndex = cart.foodItems.findIndex(
      (item) => item.foodItemId.toString() === foodItemId
    );

    if (existingCartItemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    cart.foodItems[existingCartItemIndex].quantity = quantity;

    await cart.save();

    res.status(200).json({ message: "Cart item updated", data: cart });
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({
      message: "Failed to update cart item",
      error: error.message,
    });
  }
};

// filepath: backend/Controllers/Cart.js
export const removeCartItem = async (req, res) => {
  try {
    const { foodItemId } = req.params; // Assuming you pass the item ID as a route parameter

    const cart = await Cart.findOne({}); // Modify this to find the cart for the specific user

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.foodItems = cart.foodItems.filter(
      (item) => item.foodItemId.toString() !== foodItemId
    );

    await cart.save();

    res.status(200).json({ message: "Cart item removed", data: cart });
  } catch (error) {
    console.error("Error removing cart item:", error);
    res.status(500).json({
      message: "Failed to remove cart item",
      error: error.message,
    });
  }
};

// export const addItemToCart = async (req, res) => {

//   try {
//     const { foodItemId, quantity,image } = req.body;

//     // Validate request body
//     if (!foodItemId) {
//       return res.status(400).json({ message: "foodItemId is required" });
//     }

//     // Check if the food item exists
//     const foodItem = await Food.findById(foodItemId);
//     if (!foodItem) {
//       return res.status(404).json({ message: "Food item not found" });
//     }

//     // Get the foodName from the foodItem
//     const foodName = foodItem.foodName;
//     const foodImage = foodItem.image;

//     // Create the cart item
//     const cartItem = {
//       foodItemId: foodItemId,
//       quantity: quantity || 1, // Default to 1 if quantity is not provided
//       foodName: foodName,
//       foodImage
//     };

//     // Create a new cart or add to an existing cart (you might want to associate carts with users in a real application)
//     let cart = await Cart.findOne({}); // Find the first cart (or however you want to identify the cart)

//     if (!cart) {
//       // Create a new cart if one doesn't exist
//       cart = new Cart({
//         foodItems: [cartItem],
//       });
//     } else {
//       // Check if the item already exists in the cart
//       const existingCartItemIndex = cart.foodItems.findIndex(
//         (item) => item.foodItemId.toString() === foodItemId
//       );

//       if (existingCartItemIndex > -1) {
//         // If the item exists, update the quantity
//         cart.foodItems[existingCartItemIndex].quantity += quantity || 1;
//       } else {
//         // If the item doesn't exist, add it to the cart
//         cart.foodItems.push(cartItem);
//       }
//     }

//     // Save the cart
//     await cart.save();

//     res.status(201).json({ message: "Item added to cart", data: cart });
//   } catch (error) {
//     console.error("Error adding item to cart:", error);
//     res
//       .status(500)
//       .json({ message: "Failed to add item to cart", error: error.message });
//   }
// };



export const addItemToCart = async (req, res) => {
  try {
    const { foodItemId, quantity, image } = req.body;

    // Validate request body
    if (!foodItemId) {
      return res.status(400).json({ message: "foodItemId is required" });
    }

    if (!image) {
      return res.status(400).json({ message: "image is required" });
    }

    // Check if the food item exists
    const foodItem = await Food.findById(foodItemId);
    if (!foodItem) {
      return res.status(404).json({ message: "Food item not found" });
    }

    // Get the foodName from the foodItem
    const foodName = foodItem.foodName;

    // Create the cart item
    const cartItem = {
      foodItemId: foodItemId,
      quantity: quantity || 1, // Default to 1 if quantity is not provided
      foodName: foodName,
      image, // Use the foodImage from the request body
    };

    // Create a new cart or add to an existing cart (you might want to associate carts with users in a real application)
    let cart = await Cart.findOne({}); // Find the first cart (or however you want to identify the cart)

    if (!cart) {
      // Create a new cart if one doesn't exist
      cart = new Cart({
        foodItems: [cartItem],
      });
    } else {
      // Check if the item already exists in the cart
      const existingCartItemIndex = cart.foodItems.findIndex(
        (item) => item.foodItemId.toString() === foodItemId
      );

      if (existingCartItemIndex > -1) {
        // If the item exists, update the quantity
        cart.foodItems[existingCartItemIndex].quantity += quantity || 1;
      } else {
        // If the item doesn't exist, add it to the cart
        cart.foodItems.push(cartItem);
      }
    }

    // Save the cart
    await cart.save();

    res.status(201).json({ message: "Item added to cart", data: cart });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res
      .status(500)
      .json({ message: "Failed to add item to cart", error: error.message });
  }
};