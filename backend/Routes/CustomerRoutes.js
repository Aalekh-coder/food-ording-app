import { Router } from "express";
import {
  createCustomerNew,
  getCustomers,
  updatePaymentStatusById,
} from "../Controllers/CustomerController.js"; 

const router = Router();

router.post("/addFullDetails",createCustomerNew)
router.put('/:customerId/payment', updatePaymentStatusById);
router.get("/getAllDetails", getCustomers);

export default router;