import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';


const ForumRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      
    </Routes>
  );
};

export default ForumRoutes;
