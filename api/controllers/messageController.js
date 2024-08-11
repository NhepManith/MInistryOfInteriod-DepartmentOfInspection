import Message from '../models/message.model.js';

// Function to handle creating a new message
export const createMessage = async (req, res, next) => {
  try {
    const { name, message, option, location, phoneNumber } = req.body;
    const newMessage = new Message({ name, message, option, location, phoneNumber });
    await newMessage.save();
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    next(error);
  }
};

// Function to get all messages
export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    next(error);
  }
};

// Function to delete a message by ID
export const deleteMessageById = async (req, res, next) => {
  const { messageId } = req.params;

  try {
    const deletedMessage = await Message.findByIdAndDelete(messageId);
    
    if (!deletedMessage) {
      return res.status(404).json({ success: false, error: 'Message not found' });
    }

    res.status(200).json({ success: true, data: deletedMessage });
  } catch (error) {
    next(error);
  }
};
