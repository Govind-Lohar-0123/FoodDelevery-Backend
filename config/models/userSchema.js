import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema=new mongoose.Schema({
    user:{type:String,trim:true},
   
    email:{type:String , required:true,unique:true,trim:true},
    password:{type:String,required:true,trim:true},
    mob:{type:Number}
})

//  ---------- PRE MIDDLEWARE TO HASH PASSWORD----------------------//
userSchema.pre("save",async function(next){
    let user=this;
    if(!user.isModified("password"))return next();
    try{
        let salt=await bcrypt.genSalt(10);
        let hash_pass=await bcrypt.hash(user.password,salt);
        user.password=hash_pass;
    }
    catch(err){
        return next(err);
    }
})

///------------user methods------------------//

userSchema.methods.comparePassword=async function(password){
    console.log(this.password,password);
    try{
        return await bcrypt.compare(password,this.password);
     
    }
    catch(err){ throw err;}
}

// MODEL OF SCHEMA 
const userModel=mongoose.model("user",userSchema);
export default userModel;