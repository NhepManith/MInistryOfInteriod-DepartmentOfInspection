import express from 'express';
import { signup, signin, google } from '../controllers/auth.controller.js';

const router = express.Router();

// Route for user signup
router.post('/signup', signup);

// Route for user signin
router.post('/signin', signin);

// Route for Google login
router.post('/google', google);

export default router;
