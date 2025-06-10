// src/pages/Santri.tsx
import React from 'react';
// Import semua gambar
import Santri1 from '../assets/1.jpg';
import Santri2 from '../assets/2.jpg';
import Santri3 from '../assets/3.jpg';
import Santri4 from '../assets/4.jpg';
import Santri5 from '../assets/5.jpg';
import Santri6 from '../assets/6.jpg';

const Santri: React.FC = () => {
  // Array of santri objects based on the provided images
  const santriList = [
    {
      image: Santri1,
      name: "Khalifatul Kahfi Bin Deni Firmansyah",
      origin: "Bogor",
      book: "Tuhfatul Athfal",
      date: "Ahad, 01 Juni 2025",
      hijriDate: "05 Dzulhijjah 1446 H",
      status: "جيد جداً", // Jayyid Jiddan (Very Good)
      ustadz: "Ustadz Muzakkir",
    },
    {
      image: Santri2,
      name: "Khansa Shabihah Binti Bpk. Irmansyah",
      origin: "Tangerang",
      book: "Syifaul Jinan",
      date: "Kamis, 01 Mei 2025",
      hijriDate: "04 Dzulqo'dah 1446 H",
      status: "جيد جداً",
      ustadz: "Ustadz Amar",
    },
    {
      image: Santri3,
      name: "Khansa Shabihah Binti Bpk. Irmansyah",
      origin: "Tangerang",
      book: "'Aqidatul 'Awam",
      date: "Kamis, 01 Mei 2025",
      hijriDate: "04 Dzulqo'dah 1446 H",
      status: "جيد جداً",
      ustadz: "Ustadz Muzakkir",
    },
    {
      image: Santri4,
      name: "Adhwa Dzakiya Naifa Binti Bpk. Nurdin",
      origin: "Bogor",
      book: "Tuhfatul Athfal",
      date: "Rabu, 28 Mei 2025",
      hijriDate: "01 Dzulhijjah 1446 H",
      status: "جيد جداً",
      ustadz: "Ustadz Muzakkir",
    },
    {
      image: Santri5,
      name: "M.Raka Adilla Rasya Bin Abdul Rohman",
      origin: "Bogor",
      book: "Tuhfatul Athfal",
      date: "Ahad, 01 Juni 2025",
      hijriDate: "05 Dzulhijjah 1446 H",
      status: "جيد جداً",
      ustadz: "Ustadz Amar",
    },
    {
      image: Santri6,
      name: "Danissa Agisty Amalia Binti Bpk. Ahmad Jamsah",
      origin: "Jakarta",
      book: "Tuhfatul Athfal",
      date: "Ahad, 01 Juni 2025",
      hijriDate: "05 Dzulhijjah 1446 H",
      status: "جيد جداً",
      ustadz: "Ustadz Amar",
    },
    // Tambahkan lebih banyak data santri di sini jika ada
  ];

  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center bg-green-100 py-3 rounded-md shadow-sm">
        Profil Santri Berprestasi
      </h1>
      
      <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
        Berikut adalah profil sebagian dari santri-santri Pondok Pesantren Baitul Qur'an Ar-Rahim yang telah berhasil menyelesaikan hafalan dan ujian kitab mereka.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {santriList.map((santri, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-103 hover:shadow-xl border border-gray-100 flex flex-col"
          >
            <div className="relative">
              <img 
                src={santri.image} 
                alt={santri.name} 
                className="w-full h-80 object-cover" // Tinggi gambar disesuaikan
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {santri.book} {/* Nama Kitab sebagai badge */}
              </div>
            </div>
            
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                  {santri.name}
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  Asal: <span className="font-semibold">{santri.origin}</span>
                </p>
                
                <div className="text-sm text-gray-700 mb-3">
                  <p>Tanggal Ujian: <span className="font-medium">{santri.date}</span></p>
                  <p>Hijriah: <span className="font-medium">{santri.hijriDate}</span></p>
                </div>

                <div className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                  Status: 
                  <span className="ml-2 px-3 py-1 rounded-full text-white" style={{backgroundColor: '#4CAF50'}}> {/* Hijau untuk Jayyid Jiddan */}
                    {santri.status}
                  </span>
                </div>
              </div>

              <div className="text-right mt-4 pt-3 border-t border-gray-100">
                <p className="text-md font-medium text-gray-800">Penguji: <span className="text-green-700 font-semibold">{santri.ustadz}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-lg text-gray-700 mt-12 mb-4">
        Setiap santri di Pondok Pesantren Baitul Qur'an Ar-Rahim dididik untuk mencapai potensi terbaiknya dalam ilmu agama dan akhlak mulia.
      </p>
    </div>
  );
};

export default Santri;