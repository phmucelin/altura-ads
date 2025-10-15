import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Import client logos
import dorcelLogo from '../assets/clientes/dorcel-logo.png';
import enjoyXXLogo from '../assets/clientes/enjoyXX-removebg-preview.png';
import kinkyyyyyyLogo from '../assets/clientes/kinkyyyyyy.png';
import oldnannyLogo from '../assets/clientes/oldnanny.png';

const ClientsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const clients = [
    { name: "Dorcel", logo: dorcelLogo },
    { name: "EnjoyXX", logo: enjoyXXLogo },
    { name: "Kinkyyyyyy", logo: kinkyyyyyyLogo },
    { name: "OldNanny", logo: oldnannyLogo }
  ];

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
        
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-4xl">
            {clients.map((client, index) => (
              <motion.div 
                key={index}
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
                  className="w-40 h-24 object-contain opacity-90 hover:opacity-100 transition-all duration-200 ease-out" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
