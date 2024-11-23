import foodModel from "../utils/models/foodSchema.js";
import foodCatModel from "../utils/models/foodCategory.js";
class FoodController {
    static getFoods = async (req, res) => {
        try {
            
            const foodData = await foodModel.find({});
            const foodCategory = await foodCatModel.find({});

            res.status(200).send({ foodData, foodCategory, status: true });
        }
        catch (err) {
            res.status(200).send({ msg: "Server Error", status: false });
        }

    }
}
export default FoodController;