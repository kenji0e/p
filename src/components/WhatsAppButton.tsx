// src/components/WhatsAppButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 

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
      // Tambahkan kelas 'animate-bounce' di sini
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center animate-bounce" 
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8 text-white" /> 
    </a>
  );
};

export default WhatsAppButton;