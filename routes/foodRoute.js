import express from "express";
const router=express.Router();
import FoodController from "../controllers/foodController.js";

router.get("/get-all-foods",FoodController.getFoods);

export default router;

