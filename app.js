import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import connectDB from "./config/db/connectDB.js";
import UserRoute from "./routes/userRoute.js";
import FoodRoute from "./routes/foodRoute.js";
import OrderRoute from "./routes/orderRoute.js";

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;
// const DATABASE_URL=process.env.DATABASE_URL;
const DATABASE_URL =process.env.MONGODB_URL;

//parse middleware
app.use(express.json());

//AUTHENTICATE USER
app.use(passport.initialize());

//CONNECT DATABASE
connectDB(DATABASE_URL);

//Load Routes

app.use("/api", UserRoute);
app.use("/foodApi", FoodRoute);
app.use("/orderApi",OrderRoute);

app.get("/", (req, res) => (res.send("HelloWolrd")))









//listening server

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
})