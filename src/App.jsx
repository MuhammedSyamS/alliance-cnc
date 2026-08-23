import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CncEdge from './components/CncEdge';
import ServicesGrid from './components/ServicesGrid';
import QuoteContact from './components/QuoteContact';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import AboutModal from './components/AboutModal';
import CncEdgeModal from './components/CncEdgeModal';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isCncEdgeModalOpen, setIsCncEdgeModalOpen] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About onOpenAboutDetails={() => setIsAboutModalOpen(true)} />
        <ServicesGrid onSelectService={(key) => setActiveServiceModal(key)} />
        <CncEdge onOpenMaterialDetails={() => setIsCncEdgeModalOpen(true)} />
        <QuoteContact />
      </main>
      <Footer />

      {/* Modals for Full Details */}
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
      <CncEdgeModal 
        isOpen={isCncEdgeModalOpen} 
        onClose={() => setIsCncEdgeModalOpen(false)} 
      />
      <ServiceModal 
        serviceKey={activeServiceModal} 
        onClose={() => setActiveServiceModal(null)} 
      />
    </div>
  );
}
