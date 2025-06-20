import mongoose from "mongoose";

const customerDetailsSchema = new mongoose.Schema(
  {
    customerName: String,
    customerPhone: Number,
    customerLocation: String,
    customerEmail: {
      type: String,
      required: true,
      unique: true,
    },
    paymentStatus: {
      type: Boolean,
      default: false,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    dilivered: {
      type: Boolean,
      default: false,
    },
    foodItems: [
      {
        quantity: {
          type: Number,
          default: 1,
          min: 1,
        },
        foodName: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerDetailsSchema);

export default Customer;
