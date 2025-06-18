import { RAZOR_PAY_API_SECRET_KEY } from "../Config/env.js";
import { razorpayInstance } from "../Utils/razorPay.js";
import crypto from "crypto";

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body?.amount * 100),
    currency: "INR",
  };
  const order = await razorpayInstance.orders.create(options);

  console.log(order);

  return res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", RAZOR_PAY_API_SECRET_KEY)
    .update(body.toString())
    .digest("hex");

  console.log("sig received ", razorpay_signature);
  console.log("sig generated ", expectedSignature);

  if (razorpay_signature === expectedSignature) {
    console.log("aalekh jeet baat");
  } else {
    return res.status(300).json({
      success: false,
    });
  }

  return res.status(200).json({
    success: true,
  });
};
