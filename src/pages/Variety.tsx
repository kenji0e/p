// src/pages/Variety.tsx
import React from 'react';

const varietyItems = [
  {
    title: "Varian Produk A",
    description: "Deskripsi singkat tentang varian produk A. Produk ini memiliki fitur-fitur unggulan dan sangat cocok untuk kebutuhan spesifik.",
    image: "https://via.placeholder.com/300x200?text=Produk+A", // Ganti dengan gambar asli Anda
  },
  {
    title: "Varian Layanan B",
    description: "Layanan B menawarkan solusi komprehensif untuk masalah umum. Dapatkan pengalaman terbaik dengan layanan kami.",
    image: "https://via.placeholder.com/300x200?text=Layanan+B", // Ganti dengan gambar asli Anda
  },
  {
    title: "Varian Fitur C",
    description: "Fitur C adalah inovasi terbaru yang akan mengubah cara Anda berinteraksi dengan aplikasi kami. Tingkatkan produktivitas Anda.",
    image: "https://via.placeholder.com/300x200?text=Fitur+C", // Ganti dengan gambar asli Anda
  },
];

const Variety: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Ragam Penawaran</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {varietyItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variety;