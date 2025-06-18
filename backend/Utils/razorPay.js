import Razorpay from "razorpay"
import { RAZOR_PAY_API_KEY, RAZOR_PAY_API_SECRET_KEY } from "../Config/env.js"

export const razorpayInstance = new Razorpay({
    key_id: RAZOR_PAY_API_KEY,
    key_secret: RAZOR_PAY_API_SECRET_KEY
})