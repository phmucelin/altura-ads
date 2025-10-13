import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4 text-blue-400"
            whileHover={{ scale: 1.05 }}
          >
            Altura Ads
          </motion.h3>
          <p className="text-gray-400 mb-6">
            {t('footer.description')}
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © 2025 Altura Ads. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
