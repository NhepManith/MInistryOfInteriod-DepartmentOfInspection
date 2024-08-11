import express from 'express';
import { createNews, getAllNews } from '../controllers/news.controller.js';

const router = express.Router();

router.post('/', createNews);
router.get('/', getAllNews);

export default router;
