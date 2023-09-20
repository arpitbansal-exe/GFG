import mongoose, { trusted } from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:[true,"IMPORTANT"],
        trim:true,
        max:30
    },
    lname:{
        type:String,
        required:[true,"IMPORTANT"],
        trim:true,
        max:30
    },
    email:{
        type:String,
        required:[true,"IMPORTANT"],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"IMPORTANT"],
        minlength:[6,"Password should be atleast 6 characters long"],
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    year:{
        type:Number,
        required:[true,"IMPORTANT"],
        max:5,
    },
    enrollmentNo:{
        type:String,
        required:[true,"IMPORTANT"],
        max:15
    }
});

const User=mongoose.model("User",userSchema);
export default User;
