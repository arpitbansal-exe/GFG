import e from "express";
import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const validateToken = expressAsyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization|| req.headers.Authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        try {
            token=authHeader.split(" ")[1];
            const decoded=jwt.verify(token, process.env.JWT_SECRET);
            req.user=decoded;
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    if(!token){
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});  
export default validateToken;