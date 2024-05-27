import React, { useState, useEffect } from 'react';
import { Post } from '../models/Post';
import useComments from '../hooks/useComments';
import PostSkeleton from './PostSkeleton';

interface PostItemsProps {
  post: Post;
  user: string;
}

const calculateTimeAgo = (timestamp: string) => {
  if (!timestamp) {
    return ''; // Returning an empty string if timestamp is not available
  }
  const timeDifference = new Date().getTime() - new Date(timestamp).getTime();
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const monthsAgo = Math.floor(daysAgo / 30);
  const yearsAgo = Math.floor(monthsAgo / 12);

  if (yearsAgo > 0) {
    return `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`;
  } else if (monthsAgo > 0) {
    return `${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`;
  } else if (daysAgo > 0) {
    return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  } else {
    return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
  }
};

const PostItems: React.FC<PostItemsProps> = ({ post, user }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { comments, loading } = useComments(post.id);
  const [loadingPost, setLoadingPost] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoadingPost(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const timeAgo = calculateTimeAgo(post.timestamp);

  if (loadingPost || !timeAgo) {
    return <PostSkeleton />;
  }

  return (
    <div className="bg-blue-200 rounded-lg shadow-lg p-6 mb-4 backdrop-blur-md backdrop-filter bg-opacity-20">
      <h2 className="text-2xl font-semibold mb-2 capitalize">{post.title}</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://avatar.iran.liara.run/public" alt={user} className="w-10 h-10 rounded-full mr-3" />
          <h4 className="text-sm text-gray-600 mb-4 capitalize">by {user}</h4>
        </div>
        <span className="text-sm text-gray-500">{timeAgo}</span>
      </div>
      <p className="text-gray-800 mb-4 capitalize">{post.body}</p>
      <button
        className="text-blue-500 hover:text-blue-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Hide Comments' : 'Show Comments'}
      </button>
      {isExpanded && (
        <div className="mt-4">
          {loading ? (
            <p className="text-gray-600">Loading comments...</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="my-2 bg-blue-100 p-4 rounded-md backdrop-blur-md backdrop-filter bg-opacity-40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="https://avatar.iran.liara.run/public" alt={comment.name} className="w-8 h-8 rounded-full mr-2" />
                    <h4 className="text-md font-semibold capitalize">{comment.name}</h4>
                  </div>
                        <span className="text-xs text-gray-500">{timeAgo}</span>
                </div>
                <p className="text-gray-700 text-sm capitalize">{comment.body}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PostItems;
