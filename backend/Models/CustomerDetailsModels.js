import mongoose from "mongoose";

const customerDetailsSchema = new mongoose.Schema(
  {
    customerName: String,
    customerPhone: Number,
    customerLocation: String,
    customerEmail: String,
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerDetailsSchema);

export default Customer;
