import express from 'express';
import validateToken from '../middleware/validateTokenHandler.js';
import { signup, signin, signout,currentUser } from "../controllers/authController.js";

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/current-user',validateToken, currentUser);

export default router;
