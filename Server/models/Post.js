import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:[true,"IMPORTANT"],
        unique:true,
        trim:true,
        max:100
    },
    Description:{
        type:String,
        required:[true,"IMPORTANT"],

    },
    difficulty:{
        type:String,
        required:[true,"IMPORTANT"],
        enum:["easy","medium","hard"],
        default:"meduim",     
    },
    link:{
        type:String,
        required:[true,"IMPORTANT"],
    }
    
});

const Post=mongoose.model("Post",postSchema);
export default Post;