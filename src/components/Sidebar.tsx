import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Category, NavLink, PopularTag, RecentPost } from '../models/Datatypes';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const categories: Category[] = [
  { name: 'Technology', link: '#' },
  { name: 'Programming', link: '#' },
  { name: 'Design', link: '#' },
  { name: 'Gaming', link: '#' },
];

const recentPosts: RecentPost[] = [
  { title: 'Lorem ipsum dolor sit', link: '#' },
  { title: 'Consectetur adipiscing', link: '#' },
  { title: 'Sed do eiusmod tempor', link: '#' },
];

const popularTags: PopularTag[] = [
  { name: '#React', link: '#' },
  { name: '#JavaScript', link: '#' },
  { name: '#CSS', link: '#' },
  { name: '#Node.js', link: '#' },
  { name: '#Web Development', link: '#' },
];

const navLinks: NavLink[] = [
  { name: 'Home', link: '#' },
  { name: 'Gallery', link: '#' },
  { name: 'Archive', link: '#' },
  { name: 'Forums', link: '#' },
];

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed w-full min-h-screen inset-0 md:relative md:w-64 bg-blue-200 shadow-md p-6 rounded-lg backdrop-blur-md backdrop-filter bg-opacity-20 mb-4 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } transition-transform duration-300 z-50 md:z-auto bg-white md:bg-opacity-20 md:bg-blue-200`}
    >
          <div className="flex justify-between mb-4 md:hidden">
              <div className='flex flex-col gap-2' >
              <h1 className="text-2xl font-semibold text-black">Tech Forum</h1>
              <div className="mt-6 md:hidden">
          <ul className="flex flex-row text-xs">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className="text-black hover:text-blue-600 px-1 py-2 block transition duration-300 delay-75"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
              </div>
        

        
        <button className="focus:outline-none" onClick={toggleSidebar}>
          <FaTimes className="w-6 h-6 text-black" />
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="divide-y divide-gray-200">
          {categories.map((category) => (
            <li key={category.name} className="py-2">
              <a
                href={category.link}
                className="text-black hover:bg-blue-100 hover:border-blue-600 rounded-lg px-4 py-2 transition duration-300 delay-75 focus:outline-none focus:border-blue-600"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <ul className="divide-y divide-gray-200">
          {recentPosts.map((post) => (
            <li key={post.title} className="py-2">
              <a
                href={post.link}
                className="text-black hover:bg-blue-100 hover:border-blue-600 rounded-lg px-4 py-2 transition duration-300 delay-75 focus:outline-none focus:border-blue-600"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <a
              key={tag.name}
              href={tag.link}
              className="text-black hover:bg-blue-100 hover:border-blue-600 rounded-lg px-4 py-2 transition duration-300 delay-75 focus:outline-none focus:border-blue-600"
            >
              {tag.name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
