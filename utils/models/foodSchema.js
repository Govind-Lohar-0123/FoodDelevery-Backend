import mongoose from "mongoose";

const foodSchema=new mongoose.Schema({
    categoryName:{type:String,required:true},
    title:{type:String,required:true},
    option:{type:Array},
    foodImg:{type:String,required:true}
    
})

const foodModel=mongoose.model("food",foodSchema);
export default foodModel;