import mongoose from "mongoose";
const DB_OPTION={
    dbName:"foodDelevery",
}
const connectDB= async(DATABASE_URL)=>{
    try{
        await mongoose.connect(DATABASE_URL)
       
    }
    catch(err){
       
    }
}
export default connectDB;