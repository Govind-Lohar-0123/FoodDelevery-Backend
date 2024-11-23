import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mysql from "mysql"
import passport from "passport";
import connectDB from "./utils/db/connectDB.js";
import userRoute from "./routes/userRoute.js";
import foodRoute from "./routes/foodRoute.js";
import orderRoute from "./routes/orderRoute.js";
import sendEmail from "./utils/emailSend/sendEmail.js";
import myOrderRoute from "./routes/myOrderRoute.js"
import mysqlConnectDB from "./utils/db/mysqlConnectDB.js";
dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;
// const DATABASE_URL=process.env.DATABASE_URL;
const DATABASE_URL = process.env.MONGODB_URL;

//parse middleware
app.use(express.json());

//AUTHENTICATE USER
app.use(passport.initialize());

//CONNECT DATABASE
connectDB(DATABASE_URL);

//Load Routes

app.use("/", userRoute);
app.use("/foodApi", foodRoute);
app.use("/orderApi", orderRoute);
app.use("/", myOrderRoute);



app.post("/send-email", sendEmail);

/////////////////////MYSQL CONNECTION//////////////////////////////











//listening server

app.listen(PORT, () => {

})