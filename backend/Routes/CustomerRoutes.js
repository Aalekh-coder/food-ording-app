import { Router } from "express";
import {
  createCustomerNew,
  getCompletedOrder,
  getCustomerById,
  getCustomers,
  markAsDelivered,
  updatePaymentStatusById,
} from "../Controllers/CustomerController.js"; 

const router = Router();

router.post("/addFullDetails",createCustomerNew)
router.put('/:customerId/payment', updatePaymentStatusById);
router.get("/getAllDetails", getCustomers);
router.get("/getAllCompletedOrders", getCompletedOrder);
router.get("/:customerId", getCustomerById);
router.put("/:customerId/delivered", markAsDelivered);

export default router;