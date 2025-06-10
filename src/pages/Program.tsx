// src/pages/Program.tsx
import React from 'react';

// Import video Anda
import video1 from '../assets/videos/1.mp4'; // Sesuaikan path jika berbeda
import video2 from '../assets/videos/2.mp4'; // Sesuaikan path jika berbeda
import video3 from '../assets/videos/3.mp4'; // Sesuaikan path jika berbeda

// Data program video
const programVideos = [
  {
    id: 1,
    title: "Kegiatan Harian Santri: Tilawah & Tahfidz",
    description: "Saksikan bagaimana santri kami menghabiskan waktu mereka setiap hari untuk tilawah Al-Qur'an dan tahfidz (menghafal).",
    videoSrc: video1,
  },
  {
    id: 2,
    title: "Ekskul Pilihan: Berkuda & Panahan",
    description: "Lihat keseruan santri dalam kegiatan ekstrakurikuler yang mengembangkan fisik dan mental, seperti berkuda dan panahan.",
    videoSrc: video2,
  },
  {
    id: 3,
    title: "Momen Kajian & Pembelajaran Kitab",
    description: "Cuplikan dari sesi kajian rutin dan pembelajaran kitab kuning, memperdalam pemahaman ilmu agama.",
    videoSrc: video3,
  },
  // Tambahkan lebih banyak video jika diperlukan
];

const Program: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center bg-green-100 py-3 rounded-md shadow-sm">
        Program Unggulan Pondok Pesantren
      </h1>
      
      <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
        Jelajahi berbagai program dan kegiatan yang kami tawarkan untuk membentuk santri yang beriman, berilmu, dan berakhlak mulia melalui cuplikan video berikut.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programVideos.map((program) => (
          <div 
            key={program.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-103 hover:shadow-xl border border-gray-100 flex flex-col"
          >
            <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <video 
                src={program.videoSrc} 
                controls 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                preload="metadata" // Memuat metadata video untuk cepat dimuat
                poster={program.videoSrc.replace('.mp4', '.jpg') || undefined} // Opsional: thumbnail video jika ada
              >
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
            
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {program.title}
                </h2>
                <p className="text-md text-gray-700 mb-4">
                  {program.description}
                </p>
              </div>
              <div className="text-right mt-4 pt-3 border-t border-gray-100">
                <a 
                  href={program.videoSrc} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
                >
                  Tonton Full
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-lg text-gray-700 mt-12 mb-4">
        Setiap program dirancang untuk mengembangkan potensi santri secara holistik, mencakup aspek spiritual, intelektual, dan sosial.
      </p>
    </div>
  );
};

export default Program;