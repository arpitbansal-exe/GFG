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

const Comment = asyncHandler(async (req, res) => {
    const {postId,text,postedBy} = req.body;
    const post = await Post.findById(postId);
    if(post){
        const comment={
            text,
            postedBy
        }
        post.comments.push(comment);
        const updatedPost=await post.save();
        res.status(201);
        res.json({
            title:"comment added"
        });
    }else{
        res.status(404);
        throw new Error("Post not found");
    }
    console.log("try");

});

const getPostByTitle = asyncHandler(async (req, res) => {
    console.log("try");
    const {Title} = req.body;
    console.log(Title);
    const post = await Post.findOne({Title});
    if(post) {
        res.json(post);
    } else {
        res.status(404);
        throw new Error('Post not found');
    }
    res.json(Title);
    });


export { getallPosts, createPost, Comment, getPostByTitle };