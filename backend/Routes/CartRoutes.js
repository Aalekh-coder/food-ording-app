// filepath: backend/routes/cartRoutes.js
import express from "express";
import { addItemToCart, getCart, removeCartItem, updateCartItem } from "../Controllers/Cart.js"; // Corrected import path

const router = express.Router();

router.post("/", addItemToCart);
router.get("/", getCart);
router.put("/", updateCartItem); // or router.patch depending on your preference
router.delete("/:foodItemId", removeCartItem);

export default router;