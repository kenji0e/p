// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import AppLogo from '../assets/logo.png';

interface HeaderProps {
  appName?: string; // Opsional jika nama statis
}

const Header: React.FC<HeaderProps> = () => { // Hapus { appName }
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook untuk mendapatkan lokasi saat ini

  return (
    // Background putih, text hitam, border bawah tipis abu-abu
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
            <li>
              <Link 
                to="/tentang" 
                // Jika path cocok, tambahkan class text-green-600, jika tidak text-gray-800
                className={`hover:text-green-600 transition-colors duration-200 ${location.pathname === '/tentang' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link 
                to="/ragam" 
                className={`hover:text-green-600 transition-colors duration-200 ${location.pathname === '/ragam' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Ragam
              </Link>
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
        <nav className="md:hidden mt-4 bg-gray-50 p-4 rounded-b-lg border-t border-gray-200"> {/* Bg sedikit abu-abu untuk kontras */}
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                onClick={() => setIsOpen(false)} 
                to="/tentang" 
                className={`block hover:text-green-600 transition-colors duration-200 ${location.pathname === '/tentang' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setIsOpen(false)} 
                to="/ragam" 
                className={`block hover:text-green-600 transition-colors duration-200 ${location.pathname === '/ragam' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Ragam
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setIsOpen(false)} 
                to="/daftar" 
                className={`block hover:text-green-600 transition-colors duration-200 ${location.pathname === '/daftar' ? 'text-green-600 font-semibold' : 'text-gray-800'}`}
              >
                Daftar
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setIsOpen(false)} 
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