import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ClientsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const clients = [
    { name: "Dorcel", logo: "/clientes/dorcel-logo.png" },
    { name: "EnjoyXX", logo: "/clientes/enjoyXX-removebg-preview.png" },
    { name: "Kinkyyyyyy", logo: "/clientes/kinkyyyyyy.png" },
    { name: "OldNanny", logo: "/clientes/oldnanny.png" }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-32 h-20 object-contain opacity-70 hover:opacity-100 transition-opacity duration-150" 
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
