import express from 'express';
import validateToken  from '../middleware/ValidateToken.js';
import { getallPosts, createPost, Comment,getPostByTitle } from '../controllers/postController.js';



const router = express.Router();

router.get('/', getallPosts);
router.post('/create',validateToken,createPost);
router.post('/comment',validateToken,Comment);
router.post('/getpost',getPostByTitle);

export default router;