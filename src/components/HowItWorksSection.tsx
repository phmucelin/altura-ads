import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: 1,
      text: t('howitworks.step1')
    },
    {
      number: 2,
      text: t('howitworks.step2')
    },
    {
      number: 3,
      text: t('howitworks.step3')
    },
    {
      number: 4,
      text: t('howitworks.step4')
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-100 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('howitworks.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('howitworks.subtitle')}
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className="process-step-card mb-12"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.15 }
                  }}
                >
                  <div className="flex items-center space-x-6">
                    <motion.div 
                      className="step-number"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.1 }
                      }}
                    >
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </motion.div>
                    <div className="flex-grow">
                      <p className="text-lg text-gray-200 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
