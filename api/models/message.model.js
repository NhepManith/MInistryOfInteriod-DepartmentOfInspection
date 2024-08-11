import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  option: { type: String, required: true },
  location: { type: String, required: true },
  phoneNumber: { type: String, required: true }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export default Message;
