import mongoose from "mongoose";

const customerDetailsSchema = new mongoose.Schema(
  {
    customerName: String,
    customerPhone: Number,
    customerLocation: String,
    customerEmail: {
      type:String,
      required:true,
      unique:true
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerDetailsSchema);

export default Customer;
