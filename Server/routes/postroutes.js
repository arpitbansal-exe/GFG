import express from 'express';
import { getallPosts, createPost, Comment,getPostByTitle } from '../controllers/postController.js';



const router = express.Router();

router.get('/', getallPosts);
router.post('/create',createPost);
router.post('/comment',Comment);
router.post('/getpost',getPostByTitle);

export default router;