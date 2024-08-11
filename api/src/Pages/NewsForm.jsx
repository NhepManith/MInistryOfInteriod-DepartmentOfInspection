// client/src/components/NewsForm.js
import React, { useState } from 'react';
import axios from 'axios';

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    formData.append('category', category);
    if (image) formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:3000/api/news', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
      // Clear form fields after successful submission
      setTitle('');
      setContent('');
      setAuthor('');
      setCategory('');
      setImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add a News Article</h2>
      <div className="mb-4">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <div className="mb-4">
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="hidden" id="file" />
        <label htmlFor="file" className="block w-full px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer text-center">Choose Image</label>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</button>
    </form>
  );
};

export default NewsForm;
