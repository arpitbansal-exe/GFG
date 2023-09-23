import express from 'express';
import { getallPosts, createPost, Comment } from '../controllers/postController.js';



const router = express.Router();

router.get('/', getallPosts);
router.post('/create',createPost);
router.post('/comment',Comment);

export default router;