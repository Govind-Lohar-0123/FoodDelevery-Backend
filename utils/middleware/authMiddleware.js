import passport from "passport";
import LocalStrategy from "passport-local";
import userModel from "../models/userSchema.js";



    passport.use(new LocalStrategy(async (username,password,done)=>{
       
        try{
            const user=await userModel.findOne({username});
            if(user!=null){
                const isMatch=user.comparePassword(password);
                if(isMatch)return done(null,user);
                else return done(null,false,{msg:"Inccorect Password...!"});
            }
            else return done(null,false,{msg:"Inccorect Username...!"});
        }
        catch(err){

        }
        
    }))

const localAuthMiddleware=passport.authenticate("local",{session:false});
export default localAuthMiddleware;
