import userModel from "../config/models/userSchema.js";
import bcrypt from "bcrypt";
import { jwtAuthMiddleware, generateToken } from "../config/middleware/jwtAuthMiddleware.js";
import jwt from "jsonwebtoken";

class UserController {

    static Register = async (req, res) => {
        let isEmpty = false;
        for (let data in req.body) {
            if (req.body[data] == "") {
                isEmpty = true;
            }
        }
        if (isEmpty) { res.status(200).send({ msg: "Please Fill All Filed...!", status: false }); }
        else {
            const { email, password } = req.body;
            try {
                let result = await userModel.findOne({ email: email });
                if (result == null) {
                    
                    const newUser = userModel(req.body);
                    let result = await newUser.save();
                    let SECRET_KEY = process.env.JWT_SECRET_KEY;
                    let payload = { email: result.email };
                    let token = generateToken(SECRET_KEY, payload);
                    res.status(200).send({ msg: "User Registered...!", status: true, token });

                }
                else res.status(203).send({ msg: "Email is already exist...!", status: false });
            }
            catch (err) {
                res.status(203).send({ msg: "Failed " + err, status: false });
            }
        }
    }
    static Login = async (req, res) => {

        if (req.body.email == "" || req.body.password == "") res.status(203).send({ msg: "Please Fill All Filed...!", status: false });
        else {
            try {

                let user = await userModel.findOne({ email: req.body.email });

                if (user != null) {
                    let isMatchPass = await user.comparePassword(req.body.password);

                    if (isMatchPass) {

                        let SECRET_KEY = process.env.JWT_SECRET_KEY;
                        let payload = { email: user.email };
                        let token = generateToken(SECRET_KEY, payload);
                        res.status(200).send({ msg: "User is LoggedIn...!", status: true, token });
                    }
                    else { res.status(203).send({ msg: "Invalid Email or Password...!", status: false }); }
                }
                else {
                    res.status(203).send({ msg: "Email is not exixts...!", status: false });
                }
            }
            catch (err) {
                res.status(203).send({ msg: "" + err, status: false });
            }
        }
    }
    static getUser=(req,res)=>{
       
        res.status(200).send(req.user);
    }



}
export default UserController;