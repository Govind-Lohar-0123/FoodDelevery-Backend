import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
   email:{type:String,required:true},
   order_data:{type:Array,required:true}
   
})

const orderModel=mongoose.model("order",orderSchema);
export default orderModel;