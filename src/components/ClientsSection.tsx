import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Import client logos
import dorcelLogo from '../assets/clientes/dorcel-logo.png';
import enjoyXXLogo from '../assets/clientes/enjoyXX-removebg-preview.png';
import kinkyyyyyyLogo from '../assets/clientes/kinkyyyyyy.png';
import oldnannyLogo from '../assets/clientes/oldnanny.png';
import onexbetLogo from '../assets/clientes/1xbet.png';
import sevenkLogo from '../assets/clientes/7k.png';
import meridianbetLogo from '../assets/clientes/meridianbet.png';
import rojabetLogo from '../assets/clientes/rojabet.png';
import verabetLogo from '../assets/clientes/verabet.png';
import cassinoBetLogo from '../assets/clientes/LOGO_CASSINO.BET.BR_1-removebg-preview.png';
import estrelaBetLogo from '../assets/clientes/Estrela_Bet_logo.png';
import okxLogo from '../assets/clientes/OKX.png';

const ClientsSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const clients = [
    { name: "Estrela Bet", logo: estrelaBetLogo },
    { name: "1xBet", logo: onexbetLogo },
    { name: "Dorcel", logo: dorcelLogo },
    { name: "OKX", logo: okxLogo },
    { name: "Cassino Bet", logo: cassinoBetLogo },
    { name: "7K", logo: sevenkLogo },
    { name: "MeridianBet", logo: meridianbetLogo },
    { name: "RojaBet", logo: rojabetLogo },
    { name: "VeraBet", logo: verabetLogo },
    { name: "EnjoyXX", logo: enjoyXXLogo },
    { name: "OldNanny", logo: oldnannyLogo },
    { name: "Kinkyyyyyy", logo: kinkyyyyyyLogo }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, clients.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 4));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(clients.length / 4)) % Math.ceil(clients.length / 4));
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0.5, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">{t('clients.title')}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            {t('clients.subtitle')}
          </p>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            {t('clients.description')}
          </p>
        </motion.div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 hover:bg-gray-700/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 hover:bg-gray-700/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `-${currentSlide * 100}%` }}
            >
              {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center px-8">
                    {clients.slice(slideIndex * 4, slideIndex * 4 + 4).map((client, index) => (
                      <motion.div 
                        key={slideIndex * 4 + index}
                        className="client-logo"
                        initial={{ opacity: 0.5, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { duration: 0.15, ease: "easeOut" }
                        }}
                      >
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className="w-32 h-20 md:w-40 md:h-24 object-contain opacity-90 hover:opacity-100 transition-all duration-200 ease-out" 
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
