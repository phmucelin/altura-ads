import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Import contact icons
import telegramIcon from '../assets/img/telegrama.png';
import whatsappIcon from '../assets/img/whatsapp.png';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      name: "Email",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      link: "mailto:marcelo@altura-ads.com",
      text: "marcelo@altura-ads.com",
      bgColor: "bg-blue-600"
    },
    {
      name: "Telegram",
      icon: <img src={telegramIcon} alt="Telegram" className="w-8 h-8" />,
      link: "https://t.me/marcelocastro25",
      text: "@marcelocastro25",
      bgColor: "bg-blue-500"
    },
    {
      name: "WhatsApp",
      icon: <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />,
      link: "https://wa.me/5521974559987",
      text: "+55 21 97455-9987",
      bgColor: "bg-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('contact.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-6">
                <motion.div 
                  className={`w-16 h-16 ${method.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {method.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {method.name}
                </h3>
              </div>
              <motion.a 
                href={method.link}
                target={method.name !== "Email" ? "_blank" : undefined}
                rel={method.name !== "Email" ? "noopener noreferrer" : undefined}
                className="btn-primary w-full inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {method.text}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
