import express from "express";
const router=express.Router();
import FoodController from "../controllers/foodController.js";

router.get("/get",FoodController.getFood);

export default router;

