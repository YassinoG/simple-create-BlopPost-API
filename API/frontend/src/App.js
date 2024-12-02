import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostCreate from './components/BlogPostCreate';
import BlogPostDetails from './components/BlogPostDetails';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Blogpostlist" element={<BlogPostList />} />
          <Route path="/create" element={<BlogPostCreate />} />
          <Route path="/blogposts/:id" element={<BlogPostDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
