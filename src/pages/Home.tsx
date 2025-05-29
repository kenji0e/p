// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-180px)] flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in-down">
        Selamat Datang di Aplikasi Kami
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 animate-fade-in-up">
        Jelajahi berbagai fitur dan informasi yang kami sediakan. Mulai dari penjelasan singkat
        tentang kami, ragam penawaran, daftar-daftar menarik, hingga cara menghubungi kami.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          to="/tentang"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Pelajari Lebih Lanjut
        </Link>
        <Link
          to="/kontak"
          className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Hubungi Kami
        </Link>
      </div>
    </div>
  );
};

export default Home;