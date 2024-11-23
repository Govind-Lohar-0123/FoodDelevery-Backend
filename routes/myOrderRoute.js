import express from "express";
const router = express.Router();
import MyOrderController from "../controllers/myOrderController.js";

router.post("/get-my-orders", MyOrderController.getMyOrders);
router.post("/add-my-orders", MyOrderController.addMyOrders);

export default router;

