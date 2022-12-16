import express from 'express';

const router = express.Router();

import { getalluser, signin, signup } from '../controllers/user.js';
import auth from "../middleware/auth.js";



router.post("/signup", signup);
router.post("/signin", signin);
router.get('/users', getalluser)
export default router;