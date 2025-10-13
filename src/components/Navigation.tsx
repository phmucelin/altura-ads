import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-2xl font-bold text-blue-400">
              Altura Ads
            </h1>
            
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="relative px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium text-gray-300 transition-colors duration-300 border border-blue-400/30 hover:border-blue-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xs opacity-70">
                  {language === 'pt' ? '🇧🇷' : '🇺🇸'}
                </span>
                <span>
                  {language === 'pt' ? 'BR' : 'EN'}
                </span>
              </div>
            </motion.button>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#services" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.services')}
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.about')}
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.contact')}
            </motion.a>
          </div>
          
          <div className="md:hidden">
            <motion.button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 md:hidden"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <motion.button 
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 text-gray-300 hover:text-blue-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </motion.button>
            
            <motion.a 
              href="#services" 
              className="text-2xl font-semibold text-gray-100 hover:text-blue-400 transition-colors"
              onClick={closeMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.services')}
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-2xl font-semibold text-gray-100 hover:text-blue-400 transition-colors"
              onClick={closeMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.about')}
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-2xl font-semibold text-gray-100 hover:text-blue-400 transition-colors"
              onClick={closeMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.contact')}
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
