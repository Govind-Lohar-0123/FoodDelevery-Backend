import mysqlConnectDB from "../utils/db/mysqlConnectDB.js";

const db = mysqlConnectDB();

class MyOrderController {
    static getMyOrders = async (req, res) => {
        let { user_email } = req.body;
       
        try {

            let query = "SELECT * FROM myorders WHERE user_email= ? ";
            db.query(query, [user_email], (err, result) => {
                console.log(result)
                if (err) res.status(200).send({ status: false, myOrders: [] });
                else res.status(200).send({ status: true, myOrders: result });
            })

        }
        catch (err) {
            res.status(200).send({ msg: "Server Error", status: false, myOrders: [] });
        }

    }
    static addMyOrders = async (req, res) => {

        let { myOrders, user_email } = req.body;
        try {
            myOrders.forEach((order) => {
                let { foodSize, foodQty, foodPrice, foodName, foodImg } = order;
                let myOrder = { foodQty, foodSize, foodPrice, foodName, foodImg, user_email };
                const columns = Object.keys(myOrder).join(', ');
                const placeholders = Object.keys(myOrder).map(() => '?').join(', ');
                const values = Object.values(myOrder);
                let query = `INSERT INTO myOrders (${columns}) VALUES (${placeholders}) `;

                db.query(query, values);
            })


            res.status(200).send({ status: true, msg: "MyOrders Added" });
        }
        catch (err) {
            console.log("Server Error" + err);
        }





    }
}
export default MyOrderController;