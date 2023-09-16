import express from 'express';
import validateToken from '../middleware/validateTokenHandler.js';
import {getallPosts, createPost} from '../controllers/postController.js';



const router = express.Router();

router.get('/', getallPosts);
// router.post('/create', validateToken, createPost);
router.post('/create',createPost);

export default router;