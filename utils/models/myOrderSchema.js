import mongoose from "mongoose";

const myOrderSchema = new mongoose.Schema({
    foodName: { type: String, required: true },
    foodQty: { type: Number, required: true },
    foodSize: { type: String, require: true },
    foodImg: { type: String, required: true },
    foodPrice: { type: Number, required: true },
    user_email: { type: String, required: true },

})

const myOrderModel = mongoose.model("myOrder", myOrderSchema);
export default myOrderModel;