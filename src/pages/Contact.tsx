// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-6 md:p-10 min-h-[calc(100vh-180px)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Hubungi Kami</h1>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 mb-4">
          Kami senang mendengar dari Anda! Silakan gunakan formulir di bawah ini atau
          hubungi kami melalui informasi kontak yang tersedia.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama Anda</label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Anda</label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Masukkan email Anda"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan Anda</label>
            <textarea
              id="message"
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
          >
            Kirim Pesan
          </button>
        </form>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Informasi Kontak</h2>
          <p className="text-gray-700"><strong>Email:</strong> info@namaperusahaan.com</p>
          <p className="text-gray-700"><strong>Telepon:</strong> +62 812-3456-7890</p>
          <p className="text-gray-700"><strong>Alamat:</strong> Jl. Contoh No. 123, Kota Contoh, Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;