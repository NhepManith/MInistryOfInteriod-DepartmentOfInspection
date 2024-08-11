import express from 'express';
import { createMessage, deleteMessageById } from '../controllers/messageController.js';
import { getAllMessages } from '../controllers/messageController.js';

const router = express.Router();

router.post('/', createMessage);
router.get('/all', getAllMessages); // Route to get all messages
router.delete('/delete/:messageId', deleteMessageById)


export default router;
