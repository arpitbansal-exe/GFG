import express from 'express';
import { signup, signin, signout,currentUser } from "../controllers/authController.js";
import validateToken from "../middleware/ValidateToken.js";
const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get('/current-user', validateToken,currentUser);

export default router;
