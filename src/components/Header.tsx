// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppLogo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile hamburger menu
  const [isRagamOpen, setIsRagamOpen] = useState(false); // For Ragam submenu dropdown
  const location = useLocation();

  const toggleRagamDropdown = () => {
    setIsRagamOpen(!isRagamOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsRagamOpen(false); // Also close Ragam dropdown when mobile menu closes
  };

  return (
    <header className="bg-white text-gray-800 p-4 shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo dan Nama Aplikasi */}
        <div className="flex items-center">
          <img src={AppLogo} alt="Logo Baitul Qur'an Ar-Rahim" className="h-10 w-10 mr-2" />
          <span className="text-2xl font-bold">Baitul Qur'an Ar-Rahim</span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
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
            {/* >>>>> Tambahkan menu Beranda di sini <<<<< */}
            <li>
              <Link
                to="/" // Link ke root path (Home.tsx)
                className={`hover:text-green-600 transition-colors duration-200 ${location.pathname === '/' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Beranda
              </Link>
            </li>
            {/* >>>>> Akhir penambahan menu Beranda <<<<< */}

            <li>
              <Link
                to="/tentang"
                className={`hover:text-green-600 transition-colors duration-200 ${location.pathname === '/tentang' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Tentang
              </Link>
            </li>
            <li className="relative"> {/* Added relative for dropdown positioning */}
              <button
                onClick={toggleRagamDropdown}
                className={`flex items-center hover:text-green-600 transition-colors duration-200 focus:outline-none ${location.pathname.startsWith('/ragam') ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Ragam
                <svg
                  className={`w-4 h-4 ml-1 transform ${isRagamOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isRagamOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <Link to="/ragam/fasilitas" onClick={() => setIsRagamOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600">
                    Fasilitas
                  </Link>
                  <Link to="/ragam/santri" onClick={() => setIsRagamOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600">
                    Santri
                  </Link>
                  <Link to="/ragam/program" onClick={() => setIsRagamOpen(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-600">
                    Program
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/daftar"
                className={`hover:text-green-600 transition-colors duration-200 ${location.pathname === '/daftar' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Daftar
              </Link>
            </li>
            <li>
              <Link
                to="/kontak"
                className={`hover:text-green-600 transition-colors duration-200 ${location.pathname === '/kontak' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 bg-gray-50 p-4 rounded-b-lg border-t border-gray-200">
          <ul className="flex flex-col space-y-4">
            {/* >>>>> Tambahkan menu Beranda di mobile <<<<< */}
            <li>
              <Link
                onClick={closeMobileMenu}
                to="/" // Link ke root path (Home.tsx)
                className={`block hover:text-green-600 transition-colors duration-200 ${location.pathname === '/' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Beranda
              </Link>
            </li>
            {/* >>>>> Akhir penambahan menu Beranda mobile <<<<< */}

            <li>
              <Link
                onClick={closeMobileMenu}
                to="/tentang"
                className={`block hover:text-green-600 transition-colors duration-200 ${location.pathname === '/tentang' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Tentang
              </Link>
            </li>
            <li>
              <button
                onClick={toggleRagamDropdown}
                className={`flex items-center justify-between w-full text-left hover:text-green-600 transition-colors duration-200 focus:outline-none ${location.pathname.startsWith('/ragam') ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Ragam
                <svg
                  className={`w-4 h-4 ml-1 transform ${isRagamOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isRagamOpen && (
                <div className="ml-4 mt-2 border-l border-gray-300 pl-4 space-y-2"> {/* Indent submenu */}
                  <Link to="/ragam/fasilitas" onClick={closeMobileMenu} className="block text-gray-700 hover:text-green-600">
                    Fasilitas
                  </Link>
                  <Link to="/ragam/santri" onClick={closeMobileMenu} className="block text-gray-700 hover:text-green-600">
                    Santri
                  </Link>
                  <Link to="/ragam/program" onClick={closeMobileMenu} className="block text-gray-700 hover:text-green-600">
                    Program
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                onClick={closeMobileMenu}
                to="/daftar"
                className={`block hover:text-green-600 transition-colors duration-200 ${location.pathname === '/daftar' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Daftar
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMobileMenu}
                to="/kontak"
                className={`block hover:text-green-600 transition-colors duration-200 ${location.pathname === '/kontak' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;