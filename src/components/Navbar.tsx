import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from '../models/Datatypes';



// Define the interface for Navbar props
interface NavbarProps {
  toggleSidebar: () => void;
}

// Create an array of navigation links
const navLinks: NavLink[] = [
  { name: 'Gallery', link: '#' },
  { name: 'Archive', link: '#' },
  { name: 'About', link: '#' },
  { name: 'Contact', link: '#' }
];

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gradient-to-r from-cream to-yellow-200 shadow-md p-4 backdrop-blur-md backdrop-filter bg-opacity-20 mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-black">Tech Forum</h1>
        <button className="block md:hidden focus:outline-none" onClick={toggleSidebar}>
          <FaBars className="w-6 h-6 fill-current text-black" />
        </button>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.link} className="text-black hover:text-gray-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <div className="bg-blue-300 text-white py-4 px-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Welcome to Tech Forum</h2>
          <p className="text-lg mt-2">Join our community to discuss the latest in technology trends, programming, design, and more!</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
