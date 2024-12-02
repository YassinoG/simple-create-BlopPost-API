import React, { useState } from 'react';
import API from '../api';

const BlogPostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting blog post:', { title, content }); // Debugging log

    try {
      const response = await API.post('blogposts/', { title, content });
      console.log('API Response:', response.data); // Log the API response
      setSuccess(true);
      setTitle('');
      setContent('');
      setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
      window.location.href = '/Blogpostlist';
    } catch (error) {
      console.error('Error creating blog post:', error.message || error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create Blog Post
        </h1>

        {success && (
          <p className="text-green-600 text-center mb-4">
            Blog post created successfully!
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-600 font-medium mb-2"
            >
              Title:
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the title"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="content"
              className="block text-gray-600 font-medium mb-2"
            >
              Content:
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Write your blog content here..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPostCreate;
