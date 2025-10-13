import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Import images
import casinoChipImg from '../assets/img/casino-chip.png';
import bitcoinImg from '../assets/img/bitcoin.png';
import adultImg from '../assets/img/adult-18.png';
import smartphoneImg from '../assets/img/smartphone.png';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  const sectors = [
    { name: t('about.sectors.betting'), icon: casinoChipImg, description: t('about.sectors.betting.desc') },
    { name: t('about.sectors.crypto'), icon: bitcoinImg, description: t('about.sectors.crypto.desc') },
    { name: t('about.sectors.adult'), icon: adultImg, description: t('about.sectors.adult.desc') },
    { name: t('about.sectors.mobile'), icon: smartphoneImg, description: t('about.sectors.mobile.desc') }
  ];

  const features = [
    t('about.feature1'),
    t('about.feature2'),
    t('about.feature3')
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-100 mb-6">{t('about.title')}</h2>
            <p className="text-lg text-gray-300 mb-6">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-300 mb-8">
              {t('about.description2')}
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="radix-gradient-card rounded-2xl p-8 text-white transform"
              whileHover={{ scale: 1.02 }}
            >
                        <h3 className="text-2xl font-bold mb-4">{t('about.sectors')}</h3>
                        <p className="text-blue-100 mb-6">
                          {t('about.sectors.desc')}
                        </p>
              <div className="grid grid-cols-2 gap-4">
                {sectors.map((sector, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 rounded-lg p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={sector.icon} alt={sector.name} className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-blue-200 font-semibold mb-2">{sector.name}</div>
                    <div className="text-xs text-blue-300">{sector.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
