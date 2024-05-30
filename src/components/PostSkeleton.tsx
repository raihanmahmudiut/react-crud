import React from 'react';

const PostSkeleton: React.FC = () => (
  <div className="bg-blue-200 rounded-lg shadow-lg p-6 mb-4 backdrop-blur-md backdrop-filter bg-opacity-20">
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-1/6"></div>
    </div>
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
  </div>
);

export default PostSkeleton;
