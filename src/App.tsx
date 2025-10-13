import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import AboutSection from './components/AboutSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="font-inter min-h-screen bg-gray-900 text-gray-100">
        <Navigation />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <ClientsSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
