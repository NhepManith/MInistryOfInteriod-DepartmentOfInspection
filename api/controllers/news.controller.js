import News from '../models/news.model.js';

export const createNews = async (req, res, next) => {
  try {
    const { title, content, author, category } = req.body;
    const publicationDate = new Date();

    const news = new News({ title, content, author, category, publicationDate });
    const savedNews = await news.save();

    res.status(201).json(savedNews);
  } catch (error) {
    next(error);
  }
};

export const getAllNews = async (req, res, next) => {
  try {
    const allNews = await News.find().sort({ createdAt: -1 });
    res.json(allNews);
  } catch (error) {
    next(error);
  }
};
