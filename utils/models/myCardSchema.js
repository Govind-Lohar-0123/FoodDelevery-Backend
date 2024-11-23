import mongoose from "mongoose";

const myCardSchema = new mongoose.Schema({
    foodName: { type: String, required: true },
    foodQty: { type: Number, required: true },
    foodShape: { type: String, require: true },
    foodImg: { type: String, required: true },
    foodPrice: { type: Number, required: true }

})

const myCardModel = mongoose.model("myCard", myCardSchema);
export default myCardModel;