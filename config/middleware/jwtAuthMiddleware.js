import jwt from "jsonwebtoken";


function verifyToken(SECRET_KEY,token){
    return jwt.verify(token,SECRET_KEY);
}
function generateToken(SECRET_KEY,payload){
    return jwt.sign(payload,SECRET_KEY);
}
const jwtAuthMiddleware=(req,res,next)=>{

    const token=req.headers.authorization.split(" ")[1];
   
    try{
        if(token=="")res.send({msg:"Unthorized User...!"});
            let SECRET_KEY=process.env.JWT_SECRET_KEY;
            const docode=verifyToken(SECRET_KEY,token);
            req.user=docode;
            next();
    }
    catch(err){res.status(203).send({msg:"Invalid Token"});}

}
export {jwtAuthMiddleware,generateToken};