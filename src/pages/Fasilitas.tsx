// src/pages/Fasilitas.tsx
import React from 'react';
// Import semua gambar
import AulaBelajarImage from '../assets/aula-belajar.jpg';
import KamarImage from '../assets/kamar.jpg';
import KamarAkhwatImage from '../assets/kamar-akhwat.jpg';
import KamarMandiImage from '../assets/kamar-mandi.jpg';
import KantinImage from '../assets/kantin.jpg';
import KolamIkanImage from '../assets/kolam-ikan.jpg';
import KolamRenangImage from '../assets/kolam-renang.jpg';
import LapanganFutsalImage from '../assets/lapangan-futsal.jpg';
import MasjidImage from '../assets/masjid.jpg';
import RumahTamuImage from '../assets/rumah-tamu.jpg';

const Fasilitas: React.FC = () => {
  // Array of facility objects
  const facilities = [
    {
      image: MasjidImage,
      alt: "Masjid Pondok Pesantren Baitul Qur'an Ar-Rahim",
      description: "Masjid utama sebagai pusat ibadah dan kegiatan keagamaan, dirancang dengan arsitektur yang megah dan nyaman.",
    },
    {
      image: AulaBelajarImage,
      alt: "Aula Belajar Pondok",
      description: "Aula serbaguna yang luas dan kondusif, digunakan untuk kegiatan belajar mengajar, seminar, dan pertemuan besar.",
    },
    {
      image: KamarImage,
      alt: "Kamar Asrama Putra",
      description: "Asrama santri putra yang bersih dan terawat, menyediakan lingkungan istirahat yang nyaman setelah seharian beraktivitas.",
    },
    {
      image: KamarAkhwatImage,
      alt: "Kamar Asrama Putri",
      description: "Area asrama santri putri yang didesain untuk privasi dan kenyamanan, mendukung fokus dalam belajar dan beribadah.",
    },
    {
      image: KamarMandiImage,
      alt: "Kamar Mandi Umum",
      description: "Fasilitas kamar mandi dan toilet yang bersih dan memadai, memastikan kenyamanan dan kebersihan bagi seluruh santri.",
    },
    {
      image: KantinImage,
      alt: "Kantin/Koperasi Pondok",
      description: "Kantin atau koperasi yang menyediakan berbagai kebutuhan harian dan makanan ringan untuk santri.",
    },
    {
      image: KolamRenangImage,
      alt: "Kolam Renang",
      description: "Kolam renang modern sebagai fasilitas olahraga dan rekreasi yang aman dan menyenangkan bagi santri.",
    },
    {
      image: LapanganFutsalImage,
      alt: "Lapangan Futsal dan Olahraga",
      description: "Lapangan serbaguna untuk futsal dan olahraga lainnya, menunjang aktivitas fisik dan rekreasi santri.",
    },
    {
      image: KolamIkanImage,
      alt: "Area Kolam Ikan dan Rekreasi",
      description: "Area hijau dengan kolam ikan, menciptakan suasana yang asri dan menenangkan untuk relaksasi santri.",
    },
    {
      image: RumahTamuImage,
      alt: "Rumah Tamu/Gedung Serbaguna",
      description: "Gedung serbaguna atau rumah tamu yang dapat digunakan untuk berbagai acara pondok atau kunjungan.",
    },
    // Anda bisa menambahkan gambar lain di sini jika ada
  ];

  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Fasilitas Pondok Pesantren Baitul Qur'an Ar-Rahim</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img 
              src={facility.image} 
              alt={facility.alt} 
              className="w-full h-56 object-cover" // h-56 untuk tinggi gambar yang konsisten
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{facility.alt.split('Pondok Pesantren Baitul Qur\'an Ar-Rahim')[0].replace('Pondok', '').trim()}</h2> {/* Extract facility name */}
              <p className="text-gray-700 text-base leading-relaxed">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-lg text-gray-700 mt-12 mb-4">
        Kami berkomitmen untuk terus meningkatkan dan melengkapi fasilitas demi mendukung
        proses pendidikan yang optimal dan kenyamanan seluruh santri.
      </p>
    </div>
  );
};

export default Fasilitas;