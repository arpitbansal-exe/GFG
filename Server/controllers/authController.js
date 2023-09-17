import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/Users.js";


const signup= asyncHandler(async(req, res) => {

    const {name, email, password, confirmPassword, role, year, enrollmentNo} = req.body;
    if(!name || !email || !password || !confirmPassword || !role || !year || !enrollmentNo){
        res.status(400);
        throw new Error("All fields are required");
    }
    const emailUsed=await User.findOne({email});
    if(emailUsed){
        res.status(400);
        throw new Error("User already exists");
    }
    const nameUsed=await User.findOne({name});
    if(nameUsed){
        res.status(400);
        throw new Error("Username already exists");
    }
    if(password!==confirmPassword){
        res.status(400);
        throw new Error("Passwords do not match");
    }

    const hashedPassword=await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user= await User.create({
        name: name,
        email: email,
        password: hashedPassword,
        role:role,
        year:year,
        enrollmentNo:enrollmentNo
    });
    if(user){
        console.log("User created successfully");
        res.status(200).json({_id:user._id, email:user.email});
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
        
        res.status(200).json({title: "Signin sucsessfull", email:user.email, role:user.role, name:user.name, year:user.year, enrollmentNo:user.enrollmentNo});
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


