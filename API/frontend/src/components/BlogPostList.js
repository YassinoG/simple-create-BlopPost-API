import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api';

const BlogPostList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await API.get('blogposts/'); // Fetch all blog posts
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleLogout = () => {
    // Simulating log-out functionality (you can integrate actual logic here)
    console.log('User logged out');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 relative">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md relative">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Blog Posts
        </h1>
        
        {/* Log Out Button positioned at the top left of the container */}
        <button
          onClick={handleLogout}
          className="absolute top-6 left-6 mt-20 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200 no-underline"
        >
          Log Out
        </button>
        
        <div className="flex justify-end mb-6">
          <Link
            to="/create"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200 no-underline"
          >
            Create New Blog Post
          </Link>
        </div>

        {blogPosts.length > 0 ? (
          <ul className="space-y-6">
            {blogPosts.map((post) => (
              <li
                key={post.id}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-200"
              >
                <Link to={`/blogposts/${post.id}`} className="block text-center no-underline">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center text-lg mt-10">
            No blog posts available. Start by creating one!
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPostList;
