import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:[true,"IMPORTANT"],
        trim:true,
        max:100
    },
    total:{
        type:Number,
    },
    stipend:{
        type:String,
        required:[true,"IMPORTANT"],
    },
    mode:{
        type:String,
        required:[true,"IMPORTANT"],
        enum:["online","offline"],
        default:"online",     
    },
    duration:{
        type:String,
        required:[true,"IMPORTANT"],
    },
    skills:{
        type:String,
        required:[true,"IMPORTANT"],
    },
    Description:{
        type:String,
        required:[true,"IMPORTANT"],

    },
    registerlink:{
        type:String,
        required:[true,"IMPORTANT"],
    },  
});

const Internship=mongoose.model("Internship",internshipSchema);
export default Internship;