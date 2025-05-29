// src/components/Footer.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 p-6 mt-8 border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
            <FaFacebook className="h-7 w-7" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
            <FaInstagram className="h-7 w-7" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
            <FaTiktok className="h-7 w-7" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors duration-200">
            <FaYoutube className="h-7 w-7" />
          </a>
        </div>

        {/* Garis Gradien (Hanya Mobile) */}
        <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-green-400 to-transparent md:hidden"></div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Baitul Qur'an Ar-Rahim. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;