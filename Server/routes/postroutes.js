import express from 'express';
import {getallPosts, createPost} from '../controllers/postController.js';



const router = express.Router();

router.get('/', getallPosts);
router.post('/create',createPost);

export default router;