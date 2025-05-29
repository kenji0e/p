// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)]"> {/* Sesuaikan min-h sesuai kebutuhan */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Tentang Kami</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Selamat datang di halaman Tentang Kami! Aplikasi ini dibuat untuk tujuan demonstrasi
        sebagai contoh penggunaan React, TypeScript, Vite, dan Tailwind CSS.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Kami berdedikasi untuk menyediakan solusi yang inovatif dan mudah digunakan
        untuk kebutuhan digital Anda. Jika Anda memiliki pertanyaan atau saran,
        jangan ragu untuk menghubungi kami melalui halaman Kontak.
      </p>
    </div>
  );
};

export default About;