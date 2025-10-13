import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.card1.subtitle'),
      description: t('services.card1.description'),
      icon: t('services.card1.title')
    },
    {
      title: t('services.card2.subtitle'),
      description: t('services.card2.description'),
      icon: t('services.card2.title')
    },
    {
      title: t('services.card3.subtitle'),
      description: t('services.card3.description'),
      icon: t('services.card3.title')
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon text-blue-400 font-semibold text-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
