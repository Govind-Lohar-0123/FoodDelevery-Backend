import mongoose from "mongoose";

const foodCatSchema=new mongoose.Schema({
    categoryName:{type:String,required:true},
    
   
    
})

const foodCatModel=mongoose.model("foodCategory",foodCatSchema);
export default foodCatModel;