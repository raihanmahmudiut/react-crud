import React, { useEffect, useState } from 'react';
import usePosts from '../hooks/usePosts';
import useUsers from '../hooks/useUsers';
import PostItems from './PostItems';
import Pagination from './Pagination';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

// Function to generate a random date between start and end, biased towards earlier dates for lower post IDs
const getRandomDate = (start: Date, end: Date, id: number, maxId: number) => {
  const factor = id / maxId;
  const randomTimestamp = start.getTime() + factor * (end.getTime() - start.getTime());
  return new Date(randomTimestamp);
};

const PostList: React.FC = () => {
  const { posts, loading: postsLoading } = usePosts();
  const { users, loading: usersLoading } = useUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (posts.length) {
      const maxPostId = Math.max(...posts.map(post => post.id));
      
      // Setting timestamps in the post data
      posts.forEach(post => {
        post.timestamp = getRandomDate(new Date(2020, 0, 1), new Date(), post.id, maxPostId).toISOString();
      });
    }
  }, [posts]);

  if (postsLoading || usersLoading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  // Finding out the current page data
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getUser = (userId: number) => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : 'Unknown';
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="w-full md:flex-1 container mx-auto p-4">
          <div className="text-gray-700 mb-4 flex flex-row items-center justify-between">
                      <h4>Showing {postsPerPage} posts per page.</h4>
                      <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          </div>
          {currentPosts.map(post => (
            <PostItems key={post.id} post={post} user={getUser(post.userId)} />
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PostList;