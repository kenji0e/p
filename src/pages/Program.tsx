// src/pages/Program.tsx
import React from 'react';

const Program: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Program Pendidikan</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Pondok Pesantren Baitul Qur'an Ar-Rahim menawarkan beberapa program pendidikan
          unggulan yang dirancang untuk mencetak generasi Qur'ani yang berintegritas:
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Program Unggulan</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Program Tahfizhul Qur'an 30 Juz</li>
          <li>Program Kajian Kitab Kuning</li>
          <li>Program Bahasa Arab Intensif</li>
          <li>Program Ilmu Komputer Dasar</li>
          <li>Program Kewirausahaan Islami</li>
          <li>Program Pengabdian Masyarakat</li>
        </ul>
        <p className="mt-6 text-gray-700">
          Setiap program dirancang dengan kurikulum yang komprehensif dan didukung oleh pengajar berpengalaman.
        </p>
      </div>
    </div>
  );
};

export default Program;