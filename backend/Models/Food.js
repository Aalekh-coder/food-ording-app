import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foodName:String,
    foodDescription:String,
    image:String,
    rate:Number,
    price:Number,
    discountedPrice:Number
},{timestamps:true})

const Food = mongoose.model("Food",foodSchema);

export default Food;