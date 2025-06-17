import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  foodItems: [
    {
      foodItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
      foodName: {
        type: String,
        required: true,
      },
      image:{
        type:String,
        required:true
      }
      
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
