import Post from "../models/Post.js";
import asyncHandler from 'express-async-handler'



const getallPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  if(posts.length ===0) {
    res.status(404);
    throw new Error("No posts found");
    }
  res.status(200).json(posts);
});

const createPost = asyncHandler(async (req, res) => {
    const {Title,Description,difficulty,link} = req.body;
    const TitleUsed=await Post.findOne({Title});
    if(TitleUsed){
        res.status(400);
        throw new Error("Title already used");
    }
    const post = await Post.create({
        Title,
        Description,
        difficulty,
        link
    });
    if(post){
        res.status(201).json({
            title:"post created",
            _id:post._id,
            Title:post.Title,
            Description:post.Description,
            difficulty:post.difficulty,
        });
    }else{
        res.status(400);
        throw new Error("Invalid post data");
    }   
});
export {getallPosts, createPost}; 