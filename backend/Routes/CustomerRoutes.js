import { Router } from "express";
import {
  createCustomer,
  createCustomerNew,
  getCustomers,
} from "../Controllers/CustomerController.js"; 

const router = Router();

router.post("/addDetail", createCustomer);
router.post("/addFullDetails",createCustomerNew)
router.get("/getAllDetails", getCustomers);

export default router;