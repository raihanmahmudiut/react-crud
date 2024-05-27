import React, { useEffect, useState, lazy, Suspense } from 'react';
import usePosts from '../hooks/usePosts';
import useUsers from '../hooks/useUsers';
import Pagination from './Pagination';
import PostSkeleton from './PostSkeleton';

// Lazy load components
const Sidebar = lazy(() => import('./Sidebar'));
const Navbar = lazy(() => import('./Navbar'));
const PostItems = lazy(() => import('./PostItems'));

// generating random timestamps for the post items to reflect post order

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
//pushing timestamps to posts on load
  useEffect(() => {
    if (posts.length) {
      const maxPostId = Math.max(...posts.map(post => post.id));
      
      posts.forEach(post => {
        post.timestamp = getRandomDate(new Date(2020, 0, 1), new Date(), post.id, maxPostId).toISOString();
      });
    }
  }, [posts]);

    //Skeletons for posts loading time

  if (postsLoading || usersLoading) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center text-gray-600">Loading...</div>
        {[...Array(10)].map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </div>
    );
    }
    
    // finding the posts for a single page

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
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="w-full md:flex-1 container mx-auto p-4">
            <div className="text-gray-700 mb-4 flex-col flex md:flex-row items-center justify-between">
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
      </Suspense>
    </div>
  );
};

export default PostList;

