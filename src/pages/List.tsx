// src/pages/List.tsx
import React from 'react';

const dataList = [
  { id: 1, name: "Item Satu", category: "Kategori A", description: "Ini adalah deskripsi untuk Item Satu." },
  { id: 2, name: "Item Dua", category: "Kategori B", description: "Ini adalah deskripsi untuk Item Dua, sedikit lebih panjang." },
  { id: 3, name: "Item Tiga", category: "Kategori A", description: "Deskripsi singkat untuk Item Tiga." },
  { id: 4, name: "Item Empat", category: "Kategori C", description: "Item Empat memiliki detail yang unik dan menarik." },
  { id: 5, name: "Item Lima", category: "Kategori B", description: "Deskripsi tambahan untuk Item Lima." },
];

const List: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Daftar Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
              <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Nama</th>
              <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Kategori</th>
              <th className="py-3 px-6 text-left text-sm font-semibold uppercase tracking-wider">Deskripsi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dataList.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="py-4 px-6 whitespace-nowrap text-gray-800">{item.id}</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-800">{item.name}</td>
                <td className="py-4 px-6 whitespace-nowrap text-gray-800">{item.category}</td>
                <td className="py-4 px-6 text-gray-800">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;