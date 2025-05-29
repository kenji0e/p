// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import komponen baru

import About from './pages/About';
import List from './pages/List';
import Contact from './pages/Contact';
import Home from './pages/Home';

import Fasilitas from './pages/Fasilitas';
import Santri from './pages/Santri';
import Program from './pages/Program';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/ragam/fasilitas" element={<Fasilitas />} />
            <Route path="/ragam/santri" element={<Santri />} />
            <Route path="/ragam/program" element={<Program />} />
            <Route path="/ragam" element={<Fasilitas />} />
            <Route path="/daftar" element={<List />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="6281211961829" message="Halo, saya ingin bertanya tentang Baitul Qur'an Ar-Rahim (Info dari Website)." />
        <ScrollToTopButton /> {/* Tambahkan komponen di sini */}
      </div>
    </Router>
  );
};

export default App;