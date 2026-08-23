import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CncEdge from './components/CncEdge';
import ServicesGrid from './components/ServicesGrid';
import JaliEstimator from './components/JaliEstimator';
import Portfolio from './components/Portfolio';
import QuoteContact from './components/QuoteContact';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import LightboxModal from './components/LightboxModal';
import AboutModal from './components/AboutModal';
import CncEdgeModal from './components/CncEdgeModal';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);
  const [quoteFormData, setQuoteFormData] = useState(null);

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isCncEdgeModalOpen, setIsCncEdgeModalOpen] = useState(false);

  const handleOrderConfiguration = (configData) => {
    setQuoteFormData({
      service: 'Custom CNC Cutting Only',
      dimensions: configData.dimensions,
      description: `Custom Jali Pattern: ${configData.pattern.toUpperCase()}\nMaterial: ${configData.material}\nEstimated Quote: ${configData.cost}`
    });
    const quoteEl = document.getElementById('quote');
    if (quoteEl) quoteEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About onOpenAboutDetails={() => setIsAboutModalOpen(true)} />
        <ServicesGrid onSelectService={(key) => setActiveServiceModal(key)} />
        <CncEdge onOpenMaterialDetails={() => setIsCncEdgeModalOpen(true)} />
        <JaliEstimator onOrderConfiguration={handleOrderConfiguration} />
        <Portfolio onOpenLightbox={(item) => setActiveLightboxItem(item)} />
        <QuoteContact initialQuoteData={quoteFormData} />
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
      <LightboxModal 
        item={activeLightboxItem} 
        onClose={() => setActiveLightboxItem(null)} 
      />
    </div>
  );
}
