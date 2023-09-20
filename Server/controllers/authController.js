import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/Users.js";


const signup= asyncHandler(async(req, res) => {

    const {fname, lname, email, password, confirmPassword, role, year, enrollmentNo} = req.body;
    if(!fname ||!lname|| !email || !password || !confirmPassword || !role || !year || !enrollmentNo){
        res.status(400);
        throw new Error("All fields are required");
    }
    const emailUsed=await User.findOne({email});
    if(emailUsed){
        res.status(400);
        throw new Error("Email already ");
    }
    if(password!==confirmPassword){
        res.status(400);
        throw new Error("Passwords do not match");
    }

    const hashedPassword=await bcrypt.hash(password, 10);
    console.log(hashedPassword);
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
        console.log("User created successfully");
        res.status(201).json({title: "Signup sucsessfull", email:user.email, role:user.role, fname:user.fname,lname:user.lname, year:user.year, enrollmentNo:user.enrollmentNo});
        
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
        console.log("User signed in successfully");
        
        res.status(200).json({title: "Signin sucsessfull", email:user.email, role:user.role, fname:user.fname,lname:user.lname, year:user.year, enrollmentNo:user.enrollmentNo});
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
    res.json(req.user);
  });

export {signup, signin, signout, currentUser};  


