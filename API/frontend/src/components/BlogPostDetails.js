import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const BlogPostDetails = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await API.get(`blogposts/${id}/`); // Fetch the specific blog post
        setBlogPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post details:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (!blogPost) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPostDetails;
