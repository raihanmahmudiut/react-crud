import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from '../models/Datatypes';

interface NavbarProps {
  toggleSidebar: () => void;
}

const navLinks: NavLink[] = [
  { name: 'Gallery', link: '#' },
  { name: 'Archive', link: '#' },
  { name: 'About', link: '#' },
  { name: 'Contact', link: '#' }
];

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-navy-800 shadow-md p-4 backdrop-blur-md backdrop-filter bg-opacity-90 mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Tech Forum</h1>
        <button className="block md:hidden focus:outline-none" onClick={toggleSidebar}>
          <FaBars className="w-6 h-6 fill-current text-white" />
        </button>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.link} className="text-white hover:text-blue-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-4">
        <div className="bg-blue-300 text-white py-4 px-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Welcome to Tech Forum</h2>
          <p className="text-lg mt-2">Join our community to discuss the latest in technology trends, programming, design, and more!</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
