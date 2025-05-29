// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import About from './pages/About';
import Variety from './pages/Variety';
import List from './pages/List';
import Contact from './pages/Contact';
import Home from './pages/Home'; // Import halaman Home

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header appName="Aplikasi Keren" /> {/* Ganti dengan nama aplikasi Anda */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/ragam" element={<Variety />} />
            <Route path="/daftar" element={<List />} />
            <Route path="/kontak" element={<Contact />} />
            {/* Tambahkan rute untuk halaman 404 jika diperlukan */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="6281234567890" message="Halo, saya ingin bertanya tentang aplikasi Anda." /> {/* Ganti dengan nomor WhatsApp Anda */}
      </div>
    </Router>
  );
};

export default App;