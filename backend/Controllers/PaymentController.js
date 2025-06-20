import { FRONTEND_URL, RAZOR_PAY_API_SECRET_KEY } from "../Config/env.js";
import { razorpayInstance } from "../Utils/razorPay.js";
import crypto from "crypto";
import Payment from "../Models/PaymentModel.js";

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body?.amount * 100),
    currency: "INR",
  };
  const order = await razorpayInstance.orders.create(options);


  return res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", RAZOR_PAY_API_SECRET_KEY)
    .update(body.toString())
    .digest("hex");

  if (razorpay_signature === expectedSignature) {

    // Save payment info
    await Payment.create({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    });

    return res.redirect(
      `https://food-ording-frontend.onrender.com/paymentsuccess?reference=${razorpay_payment_id}`
      // `${FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    return res.status(400).json({
      success: false,
      message: 'Invalid signature',
    });
  }
};

