// src/components/WhatsAppButton.tsx
import React from 'react';
import WhatsAppIcon from '../assets/whatsapp.svg'; // <--- PASTIKAN PATH INI BENAR

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = "Halo, saya ingin bertanya..." }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <img src={WhatsAppIcon} alt="WhatsApp" className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;