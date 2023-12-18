import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/Users.js";
import jwt from "jsonwebtoken";

const signup= asyncHandler(async(req, res) => {

    const {fname, lname, email, password, confirmPassword, role, year, enrollmentNo} = req.body;
    if(!fname ||!lname|| !email || !password || !confirmPassword || !role || !year || !enrollmentNo){
        res.status(400);
        throw new Error("All fields are required");
    }
    const emailUsed=await User.findOne({email});
    if(emailUsed){
        res.status(400);
        throw new Error("User already exists");
    }
    if(password!==confirmPassword){
        res.status(400);
        throw new Error("Passwords do not match");
    }

    const hashedPassword=await bcrypt.hash(password, 10);
    const user= await User.create({
        fname,
        lname,
        email,
        password: hashedPassword,
        role,
        year,
        enrollmentNo
    });

    if(user){
        res.status(201).json({title: "Signup successfull", email:user.email, role:user.role, fname:user.fname,lname:user.lname, year:user.year, enrollmentNo:user.enrollmentNo});
        
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
});



const signin = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }

    const user=await User.findOne({email});
    
    if(user && (await bcrypt.compare(password, user.password))){
        const token=jwt.sign({id:user._id,email:user.email,username:user.fname}, process.env.JWT_SECRET, {expiresIn:"1d"});
        
        // res.status(200).json({title: "Signin sucsessfull", email:user.email, role:user.role, fname:user.fname,lname:user.lname, year:user.year, enrollmentNo:user.enrollmentNo});
        res.status(200).json({title:"Signin sucsessfull",token});
    }
    else{
        res.status(400);
        throw new Error("Invalid email or password");}

});

const signout=asyncHandler(async (req, res) => {
    res.json({message:"Signout page",});
}
);
const currentUser = asyncHandler(async (req, res) => {
    let email=req.user.email;
    const us=await User.findOne({email}).select("-password");;
    if(us){
        res.json(us);
    }else{
        res.status(404);
        throw new Error("User not found");
    }
  });

export {signup, signin, signout, currentUser};  


