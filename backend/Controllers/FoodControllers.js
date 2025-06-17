import Food from "../Models/Food.js";

export const addFood = async (req, res) => {
  try {
    const { foodName, foodDescription, image, rate, price, discountedPrice } =
      req.body;

    const newFoodItem = new Food({
      foodName,
      foodDescription,
      image,
      rate,
      price,
      discountedPrice,
    });

    await newFoodItem.save();
    res.status(201).json({
      success: true,
      data: newFoodItem,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error occured while add food items",
    });
  }
};


export const addBulkFoodItems = async (req, res) => {
  try {
    const foodItems = req.body; // Assuming req.body is an array of food item objects

    if (!Array.isArray(foodItems)) {
      return res.status(400).json({ message: "Invalid request body.  Expected an array of food items." });
    }

    if (foodItems.length === 0) {
      return res.status(400).json({ message: "No food items provided in the request body." });
    }

    // Validate each food item (optional, but recommended)
    for (const item of foodItems) {
      if (!item.foodName || !item.foodDescription || !item.image || !item.rate || !item.price || !item.discountedPrice) {
        return res.status(400).json({ message: "Missing required fields in one or more food items." });
      }
    }


    const createdFoodItems = await Food.insertMany(foodItems);

    res.status(201).json({
      message: "Food items added successfully",
      data: createdFoodItems,
    });
  } catch (error) {
    console.error("Error adding bulk food items:", error);
    res.status(500).json({ message: "Failed to add food items", error: error.message });
  }
};

export const allFoodItem = async (req,res) => {
    try {
        const listOfFoodItem = await Food.find();

        res.status(200).json({
            success:true,
            data:listOfFoodItem
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error occured while fetch food items"
        })
    }
}