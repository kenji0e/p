// src/components/ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk mendeteksi scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Tampilkan tombol setelah menggulir 300px ke bawah
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk menggulir ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Gulir dengan animasi halus
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Bersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // [] agar useEffect hanya berjalan sekali setelah render pertama

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          // Posisi di atas tombol WhatsApp, hanya terlihat di mobile (md:hidden)
          // z-index lebih tinggi dari WA (z-50)
          className="fixed bottom-20 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 z-[51] md:hidden flex items-center justify-center animate-bounce-short"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;