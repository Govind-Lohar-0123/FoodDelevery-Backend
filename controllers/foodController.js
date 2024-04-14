import foodModel from "../config/models/foodSchema.js";
import foodCatModel from "../config/models/foodCategory.js";
class FoodController{
    static getFood=async(req,res)=>{
        try{
            const foodData=await foodModel.find({});
           const foodCat=await foodCatModel.find({});
       
            res.status(200).send({foodData,foodCat,status:true});
        }
        catch(err){
            res.status(200).send({SearverError :err+"",status:false});
        }
       
    }
}
export default FoodController;