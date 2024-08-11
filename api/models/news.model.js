import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  publicationDate: { type: Date, required: true, default: Date.now }
}, {
  timestamps: true
});

const News = mongoose.model('News', NewsSchema);
export default News;
