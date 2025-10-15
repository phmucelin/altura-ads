import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const StatsSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="stats" className="py-20 stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-blue-400"></div>
                        <span className="text-sm text-gray-400 uppercase tracking-wider">{t('stats.subtitle')}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold">
                <span className="text-blue-400">{t('stats.title').split(' ')[0]}</span>
                <span className="text-white"> {t('stats.title').split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">{t('stats.subtitle')}</span><br />
                {t('stats.description')}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#services" 
                className="btn-primary-new"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('stats.cta1')}
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-secondary-new"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('stats.contact')}
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right Side - Stats Card */}
          <motion.div 
            className="radix-gradient-card rounded-2xl p-8 text-white transform"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mb-6">
                        <span className="text-xs text-blue-200 uppercase tracking-wider">{t('stats.promise')}</span>
                        <h3 className="text-2xl font-bold text-white mt-2">{t('stats.deliver')}</h3>
                        <p className="text-blue-100 text-sm mt-2">{t('stats.tech')}</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white text-sm">{t('stats.feature1')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white text-sm">{t('stats.feature2')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white text-sm">{t('stats.feature3')}</span>
              </div>
            </div>
            
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div 
                className="bg-white/20 rounded-lg p-4 text-center border border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-white mb-2">2B+</div>
                            <div className="text-xs text-white uppercase">{t('stats.monthly')}</div>
              </motion.div>
              <motion.div 
                className="bg-white/20 rounded-lg p-4 text-center border border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-white mb-2">100+</div>
                            <div className="text-xs text-white uppercase">{t('stats.countries')}</div>
              </motion.div>
              <motion.div 
                className="bg-white/20 rounded-lg p-4 text-center border border-white/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-white mb-2">14</div>
                            <div className="text-xs text-white uppercase">{t('stats.years')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
