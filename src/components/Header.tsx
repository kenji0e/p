// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Akan diinstal nanti

interface HeaderProps {
  appName: string;
}

const Header: React.FC<HeaderProps> = ({ appName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo dan Nama Aplikasi */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-2xl font-bold">{appName}</span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/tentang" className="hover:text-blue-200 transition-colors duration-200">Tentang</Link>
            </li>
            <li>
              <Link to="/ragam" className="hover:text-blue-200 transition-colors duration-200">Ragam</Link>
            </li>
            <li>
              <Link to="/daftar" className="hover:text-blue-200 transition-colors duration-200">Daftar</Link>
            </li>
            <li>
              <Link to="/kontak" className="hover:text-blue-200 transition-colors duration-200">Kontak</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 bg-blue-700 p-4 rounded-b-lg">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link onClick={() => setIsOpen(false)} to="/tentang" className="block text-white hover:text-blue-200 transition-colors duration-200">Tentang</Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/ragam" className="block text-white hover:text-blue-200 transition-colors duration-200">Ragam</Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/daftar" className="block text-white hover:text-blue-200 transition-colors duration-200">Daftar</Link>
            </li>
            <li>
              <Link onClick={() => setIsOpen(false)} to="/kontak" className="block text-white hover:text-blue-200 transition-colors duration-200">Kontak</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;