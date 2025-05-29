// src/pages/List.tsx
import React from "react"; // Pastikan ini ada

const List: React.FC = () => { // Tambahkan : React.FC untuk type safety
  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)] flex items-center justify-center">
      {/* Konten utama dibungkus dalam div ini agar terpusat */}
      <div className="max-w-2xl mx-auto p-6 font-sans bg-white rounded-lg shadow-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800 bg-green-100 py-2 rounded-md shadow-sm">
          DAFTAR BIAYA
        </h1>

        {/* Uang Pangkal Section */}
        <div className="mb-10 p-6 bg-blue-50 rounded-lg transform transition-all duration-300 hover:scale-103 hover:shadow-lg hover:border-blue-300 border border-blue-50">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">UANG PANGKAL</h2>
          <p className="text-xl font-bold mb-4 text-red-600">Rp. 10.000.000</p>
          <p className="font-medium mb-4">Sudah Termasuk</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>Seragam 3 Style</li>
            <li>Meja belajar</li>
            <li>Lemari</li>
            <li>Kasur</li>
            <li>Sprei</li>
            <li>Bantal</li>
            <li>Iqro / Qur'an</li>
            <li>Kitab (Qird'atul Kutub) (kurang lebih 15 kitab)</li>
            <li>Transportasi Rihlah, Ziarah, Kajian diluar pondok dll 3x setiap tahunnya</li>
            <li>Tidak Ada Uang Pangkal Setiap Tahannya</li>
          </ul>
          {/* Bagian kontak Ustadzah Anissa dan Ustd. Sanusi sudah dihapus */}
        </div>

        {/* SPP Section */}
        <div className="mb-10 p-6 bg-green-50 rounded-lg transform transition-all duration-300 hover:scale-103 hover:shadow-lg hover:border-green-300 border border-green-50">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">SPP</h2>
          <p className="text-xl font-bold mb-4 text-red-600">Rp. 1.500.000</p>
          <p className="font-medium mb-4">Sudah Termasuk</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li>Makan 3 Kali Sehari</li>
            <li>Ekskul Berkuda</li>
            <li>Ekskul Hadroh</li>
            <li>Transportasi Sekolah</li>
          </ul>
          {/* Bagian kontak Ustadzah Anissa dan Ustd. Sanusi sudah dihapus */}
        </div>

        {/* NB Section */}
        <div className="p-6 bg-yellow-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">NB: Tidak Termasuk</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Laundry</li>
            <li>Uang Jajan/ Saku</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;