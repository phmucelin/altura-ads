import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="text-white">{t('hero.title1')}</span><br />
            <span className="text-blue-400">{t('hero.title2')}</span><br />
            <span className="text-white">{t('hero.title3')}</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.a 
              href="#services" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta1')}
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta2')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
