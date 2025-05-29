// src/pages/Santri.tsx
import React from 'react';

const Santri: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Profil Santri</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Santri-santri Baitul Qur'an Ar-Rahim adalah generasi muda yang bersemangat dalam
          menuntut ilmu agama dan dunia. Mereka berasal dari berbagai daerah di Indonesia
          dan memiliki motivasi kuat untuk menjadi penghafal Al-Qur'an serta pribadi yang berakhlak mulia.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Kehidupan Santri</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Pembelajaran Al-Qur'an (Tahfiz dan Tilawah)</li>
          <li>Kajian Ilmu Syar'i (Akidah, Fiqih, Akhlak)</li>
          <li>Kegiatan Bahasa Arab dan Inggris</li>
          <li>Pembiasaan ibadah harian (Sholat berjamaah, Dzikir)</li>
          <li>Kegiatan ekstrakurikuler dan pengembangan diri</li>
          <li>Lingkungan kekeluargaan dan saling mendukung</li>
        </ul>
        <p className="mt-6 text-gray-700">
          Kami bangga dengan dedikasi dan semangat para santri dalam menimba ilmu.
        </p>
      </div>
    </div>
  );
};

export default Santri;