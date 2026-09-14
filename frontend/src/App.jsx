import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EnterpriseClients from './components/EnterpriseClients';
import FlagshipProjects from './components/FlagshipProjects';
import Leadership from './components/Leadership';
import About from './components/About';
import CncEdge from './components/CncEdge';
import ServicesGrid from './components/ServicesGrid';
import QuoteContact from './components/QuoteContact';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import AboutModal from './components/AboutModal';
import CncEdgeModal from './components/CncEdgeModal';
import LaserCursor from './components/LaserCursor';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isCncEdgeModalOpen, setIsCncEdgeModalOpen] = useState(false);

  return (
    <div className="app-container">
      {/* CNC Laser Cursor & Spark Trails */}
      <LaserCursor />

      {/* Global Architectural Navigation Header */}
      <Header />

      <main>
        {/* Hero with live vector trace & MNC headline */}
        <Hero />

        {/* Global Brand Roster & Enterprise Marquee */}
        <EnterpriseClients />

        {/* Landmark MNC Case Studies (Adidas, Olympia Sports, Luxury Boutiques) */}
        <FlagshipProjects />

        {/* Executive Profile: Niyaz Samad, Founder & Principal Designer */}
        <Leadership />

        {/* Factory Heritage & 5-Axis CNC In-House Standard */}
        <About onOpenAboutDetails={() => setIsAboutModalOpen(true)} />

        {/* Material Capabilities & Engineering Precision */}
        <CncEdge onOpenMaterialDetails={() => setIsCncEdgeModalOpen(true)} />

        {/* Core Services: Architectural CNC, Parametric Facades, Turnkey Interiors */}
        <ServicesGrid onSelectService={(key) => setActiveServiceModal(key)} />

        {/* Direct CAD Upload & Technical Quote Request */}
        <QuoteContact />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Architectural Specification Modals */}
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
