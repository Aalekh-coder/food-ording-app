import { Router } from "express";
import { addBulkFoodItems, addFood, allFoodItem } from "../Controllers/FoodControllers.js";

const router = Router();


router.post("/add",addFood);
router.post("/addbulk",addBulkFoodItems);
router.get("/get",allFoodItem);


export default router;
