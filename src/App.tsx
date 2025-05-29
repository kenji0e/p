// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import About from './pages/About';
// import Variety from './pages/Variety'; // We are replacing this with sub-pages
import List from './pages/List';
import Contact from './pages/Contact';
import Home from './pages/Home';

// Import new submenu pages
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
            {/* New routes for Ragam submenus */}
            <Route path="/ragam/fasilitas" element={<Fasilitas />} />
            <Route path="/ragam/santri" element={<Santri />} />
            <Route path="/ragam/program" element={<Program />} />
            {/* Optional: Add a redirect or a default "Ragam" landing page if /ragam is accessed directly */}
            <Route path="/ragam" element={<Fasilitas />} /> {/* Redirects /ragam to /ragam/fasilitas */}

            <Route path="/daftar" element={<List />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="6281234567890" message="Halo, saya ingin bertanya tentang Baitul Qur'an Ar-Rahim." />
      </div>
    </Router>
  );
};

export default App;