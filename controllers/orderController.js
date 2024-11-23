import orderModel from "../utils/models/orderSchema.js";


class OrderController {

    static getOrders = async (req, res) => {

        try {
            const result = await orderModel.findOne({ email: req.body.email });
            if(result==null)res.status(200).send({ status: false });
            else res.status(200).send({ order_data: result.order_data, status: true });
        }
        catch (err) {
            res.send({ failed: err+"", status: false });
        }

    }
    static addOrders = async (req, res) => {
        try {
            let result=null;
            result = await orderModel.find({ email: req.body.email });
           
            if (result=="") {
               
                 result = await orderModel.insertMany([{email:req.body.email,order_data:[req.body.order_data]}]);
            
            }

            else {
              
                 result = await orderModel.findOneAndUpdate({email:req.body.email},{$push:{order_data:req.body.order_data}});
                
            }
            res.status(200).send({ status: true });
        }

        catch (err) { res.send({ failed: err + "" }) }




    }



}
export default OrderController;