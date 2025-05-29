// src/pages/About.tsx
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Import ikon telepon

const About: React.FC = () => {
  const commonText = `Pondok Pesantren Baitul Qur'an Ar-Rahim didirikan dengan tujuan mencetak generasi muda Islam yang beriman, beradab, berilmu, berprestasi dan berakhlak mulia. Serta menerapkan Ilmu yang dipelajari ditengah Masyarakat dan Umat.`;

  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)] flex items-center justify-center">
      <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-lg shadow-xl p-8 md:p-12 text-white max-w-4xl w-full text-center relative overflow-hidden">
        {/* === Bagian Visi dan Misi === */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-green-200 drop-shadow-lg leading-tight">
          Visi dan Misi
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-12 px-4 md:px-8">
          {commonText}
        </p>
        {/* === Akhir Bagian Visi dan Misi === */}

        {/* Tambahkan garis pemisah atau jarak jika diperlukan antara bagian Visi dan Misi dengan Tujuan Pendidikan */}
        <div className="w-24 h-1 bg-green-400 mx-auto mb-12 rounded-full"></div> {/* Garis pemisah */}

        {/* === Bagian Tujuan Pendidikan === */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-green-200 drop-shadow-lg leading-tight">
          TUJUAN PENDIDIKAN
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-12 px-4 md:px-8">
          {commonText}
        </p>
        {/* === Akhir Bagian Tujuan Pendidikan === */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left p-4 md:p-6 bg-green-800 bg-opacity-70 rounded-md">
          {/* Kontak Ustadzah Anissa */}
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-green-300 text-3xl" />
            <div>
              <p className="text-2xl font-semibold">0812-1196-1829</p>
              <p className="text-lg text-green-200">Ustadzah Anissa</p>
            </div>
          </div>

          {/* Kontak Ustd. Sanusi */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <FaPhoneAlt className="text-green-300 text-3xl" />
            <div>
              <p className="text-2xl font-semibold">0812-9286-0426</p>
              <p className="text-lg text-green-200">Ustd. Sanusi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;