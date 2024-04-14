import express from "express";
const router=express.Router();
import localAuthMiddleware from "../config/middleware/authMiddleware.js";
import UserController from "../controllers/userController.js";
import { jwtAuthMiddleware } from "../config/middleware/jwtAuthMiddleware.js";

router.post("/signup",UserController.Register);
router.get("/getuser",jwtAuthMiddleware,UserController.getUser);
router.post("/login",UserController.Login);

//  FOOD  Api//


export default router;

