import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Import contact icons
import telegramIcon from '../assets/img/telegrama.png';
import whatsappIcon from '../assets/img/whatsapp.png';
import gmailIcon from '../assets/img/gmail.png';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      name: t('contact.email'),
      icon: <img src={gmailIcon} alt="Gmail" className="w-8 h-8" />,
      link: "mailto:marcelo@altura-ads.com",
      text: "marcelo@altura-ads.com",
      bgColor: "bg-blue-600"
    },
    {
      name: t('contact.telegram'),
      icon: <img src={telegramIcon} alt="Telegram" className="w-8 h-8" />,
      link: "https://t.me/marcelocastro25",
      text: "@marcelocastro25",
      bgColor: "bg-blue-500"
    },
    {
      name: t('contact.whatsapp'),
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
                <motion.a 
                  href={method.link}
                  target={method.name !== t('contact.email') ? "_blank" : undefined}
                  rel={method.name !== t('contact.email') ? "noopener noreferrer" : undefined}
                  className={`w-16 h-16 ${method.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center cursor-pointer`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {method.icon}
                </motion.a>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {method.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
