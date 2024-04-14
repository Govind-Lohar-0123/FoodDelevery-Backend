import express from "express";
const router=express.Router();
import OrderController from "../controllers/orderController.js";
router.post("/addorder",OrderController.addOrder);
router.post("/getorder",OrderController.getOrder);


export default router;

