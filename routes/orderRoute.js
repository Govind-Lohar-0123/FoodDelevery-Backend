import express from "express";
const router = express.Router();
import OrderController from "../controllers/orderController.js";
router.post("/add-order", OrderController.addOrders);
router.post("/get-orders", OrderController.getOrders);


export default router;

