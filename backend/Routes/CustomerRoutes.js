import { Router } from "express";
import {
  createCustomer,
  getCustomers,
} from "../Controllers/CustomerController.js"; 

const router = Router();

router.post("/addDetail", createCustomer);
router.get("/getAllDetails", getCustomers);

export default router;