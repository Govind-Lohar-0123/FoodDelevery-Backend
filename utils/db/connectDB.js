import mongoose from "mongoose";
const DB_OPTION={
    dbName:"foodDelevery",
}
const connectDB= async(DATABASE_URL)=>{
    try{
        await mongoose.connect(DATABASE_URL)
        console.log("Connection  Successfull...!");
    }
    catch(err){
        console.log("Connection Failed...!"+err);
    }
}
export default connectDB;