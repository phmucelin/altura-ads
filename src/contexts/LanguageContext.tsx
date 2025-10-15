import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'pt';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title1': 'More users',
    'hero.title2': 'More revenue',
    'hero.title3': 'Zero initial costs',
    'hero.subtitle': 'We capture new leads for your business and increase your sales. No initial costs.',
    'hero.cta1': 'Explore Services',
    'hero.cta2': 'Get In Touch',
    'stats.title': 'Freedom to Advertise',
    'stats.subtitle': 'Power to scale for Real',
    'stats.description': 'We boost your results by expanding your qualified leads base. No initial costs. We invest in you before seeing any return.',
    'stats.cta1': 'I want to generate more sales',
    'stats.cta2': 'I want to generate more leads',
    'stats.contact': 'Talk to our team',
    'stats.promise': "We don't make promises",
    'stats.deliver': 'We deliver results',
    'stats.tech': 'Proprietary retargeting technology that transforms clicks into conversions',
    'stats.feature1': 'Global Reach - Over 400 clients',
    'stats.feature2': 'Intelligence that Brings Results',
    'stats.feature3': 'Advertise without Barriers',
    'stats.monthly': 'Monthly Access',
    'stats.countries': 'Countries',
    'stats.years': 'Years',
    'services.title': 'Our Services',
    'services.subtitle': 'Optimize your business with our complete solution to scale intelligently and effectively',
    'howitworks.title': 'How It Works',
    'howitworks.subtitle': 'Our retargeting process in 4 simple steps',
    'howitworks.step1': 'Users search online for services and products of their preference.',
    'howitworks.step2': 'Users visit the sites, but do not convert on the first visit.',
    'howitworks.step3': 'Users are reached on thousands of sites with our personalized banners to encourage return.',
    'howitworks.step4': 'The user returns to your site and converts, generating sales and results.',
    'services.card1.title': 'Global Markets',
    'services.card1.subtitle': 'All Geos and Markets',
    'services.card1.description': 'Our expertise and compliant solutions allow us to offer services in any markets and jurisdictions you wish to promote.',
    'services.card2.title': 'Smart Retargeting',
    'services.card2.subtitle': 'Ads & Retargeting',
    'services.card2.description': 'Our smart ad placement solutions and proprietary retargeting technology turns visitors into consumers.',
    'services.card3.title': 'Revenue Share',
    'services.card3.subtitle': 'Budget-Friendly',
    'services.card3.description': 'Revenue Share model with no upfront fees. Save up to 18% of your budget while avoiding starting costs.',
    'about.title': 'Our Journey',
    'about.description1': 'We are leaders in the affiliate marketing industry, focused on results and innovation. With a qualified team and cutting-edge technology, we operate in over 90 countries, impacting thousands of campaigns.',
    'about.description2': 'Our business model is based on Revenue Share, which means we grow alongside our partners, always striving to maximize results and ensure sustainable success.',
    'about.sectors': 'Operating Sectors',
    'about.sectors.desc': 'We operate strategically across various sectors, including adult websites, betting houses, crypto, and other dynamic markets.',
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trusted by leading companies worldwide',
    'clients.description': 'These are examples of our high-performing clients. We work with hundreds of companies across different sectors.',
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to scale your business with our expert solutions?',
    'about.feature1': 'Media Buying & DSP',
    'about.feature2': 'Advanced Retargeting',
    'about.feature3': 'Global Market Expertise',
    'about.sectors.betting': 'Betting',
    'about.sectors.betting.desc': 'Sports & Casino',
    'about.sectors.crypto': 'Crypto',
    'about.sectors.crypto.desc': 'Digital Assets',
    'about.sectors.adult': 'Adult',
    'about.sectors.adult.desc': 'Entertainment',
    'about.sectors.mobile': 'Mobile',
    'about.sectors.mobile.desc': 'Apps & Games',
    'footer.description': 'Expert ad placement and bespoke retargeting solutions for global markets.',
    'footer.copyright': '© 2025 Altura Ads. All rights reserved.',
    'contact.email': 'E-mail',
    'contact.telegram': 'Telegram',
    'contact.whatsapp': 'WhatsApp'
  },
  pt: {
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'hero.title1': 'Mais usuários',
    'hero.title2': 'Mais receita',
    'hero.title3': 'Zero custos iniciais',
    'hero.subtitle': 'Capturamos novos leads para o seu negócio e aumentamos suas vendas. Sem custos iniciais.',
    'hero.cta1': 'Explorar Serviços',
    'hero.cta2': 'Entre em Contato',
    'stats.title': 'Liberdade para Anunciar',
    'stats.subtitle': 'Poder para escalar de Verdade',
    'stats.description': 'Impulsionamos seus resultados expandindo sua base de leads qualificados. Sem custos iniciais. Investimos em você antes de ver qualquer retorno.',
    'stats.cta1': 'Quero gerar mais vendas',
    'stats.cta2': 'Quero gerar mais leads',
    'stats.contact': 'Fale com nossa equipe',
    'stats.promise': 'Não fazemos promessas',
    'stats.deliver': 'Entregamos resultados',
    'stats.tech': 'Tecnologia proprietária de retargeting que transforma cliques em conversões',
    'stats.feature1': 'Alcance Global - Mais de 400 clientes',
    'stats.feature2': 'Inteligência que Traz Resultados',
    'stats.feature3': 'Anuncie sem Barreiras',
    'stats.monthly': 'Acessos Mês',
    'stats.countries': 'Países',
    'stats.years': 'Anos',
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Otimize seu negócio com nossa solução completa para escalar de forma inteligente e eficaz',
    'howitworks.title': 'Como Funciona',
    'howitworks.subtitle': 'Nosso processo de retargeting em 4 passos simples',
    'howitworks.step1': 'Os usuários pesquisam online os serviços e produtos de sua preferência.',
    'howitworks.step2': 'Os usuários visitam os sites, mas não convertem na primeira visita.',
    'howitworks.step3': 'Os usuários são alcançados em milhares de sites com nossos banners personalizados para incentivar o retorno.',
    'howitworks.step4': 'O usuário retorna ao seu site e converte, gerando vendas e resultados.',
    'services.card1.title': 'Mercados Globais',
    'services.card1.subtitle': 'Todas as Geos e Mercados',
    'services.card1.description': 'Nossa expertise e soluções em conformidade nos permitem oferecer serviços em qualquer mercado e jurisdição que você deseje promover.',
    'services.card2.title': 'Retargeting Inteligente',
    'services.card2.subtitle': 'Anúncios e Retargeting',
    'services.card2.description': 'Nossas soluções inteligentes de posicionamento de anúncios e tecnologia proprietária de retargeting transformam visitantes em consumidores.',
    'services.card3.title': 'Revenue Share',
    'services.card3.subtitle': 'Econômico',
    'services.card3.description': 'Modelo Revenue Share sem taxas iniciais. Economize até 18% do seu orçamento evitando custos de início.',
    'about.title': 'Nossa Jornada',
    'about.description1': 'Somos líderes na indústria de marketing de afiliados, focados em resultados e inovação. Com uma equipe qualificada e tecnologia de ponta, operamos em mais de 90 países, impactando milhares de campanhas.',
    'about.description2': 'Nosso modelo de negócio é baseado em Revenue Share, o que significa que crescemos junto com nossos parceiros, sempre buscando maximizar resultados e garantir sucesso sustentável.',
    'about.sectors': 'Setores de Atuação',
    'about.sectors.desc': 'Operamos estrategicamente em vários setores, incluindo sites adultos, casas de apostas, crypto e outros mercados dinâmicos.',
    'clients.title': 'Nossos Clientes',
    'clients.subtitle': 'Confiado por empresas líderes mundialmente',
    'clients.description': 'Estes são exemplos de nossos clientes de alto desempenho. Trabalhamos com centenas de empresas em diferentes setores.',
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para escalar seu negócio com nossas soluções especializadas?',
    'about.feature1': 'Media Buying & DSP',
    'about.feature2': 'Retargeting Avançado',
    'about.feature3': 'Expertise em Mercados Globais',
    'about.sectors.betting': 'Apostas',
    'about.sectors.betting.desc': 'Esportes e Cassino',
    'about.sectors.crypto': 'Crypto',
    'about.sectors.crypto.desc': 'Ativos Digitais',
    'about.sectors.adult': 'Adulto',
    'about.sectors.adult.desc': 'Entretenimento',
    'about.sectors.mobile': 'Mobile',
    'about.sectors.mobile.desc': 'Apps e Jogos',
    'footer.description': 'Soluções especializadas em posicionamento de anúncios e retargeting personalizado para mercados globais.',
    'footer.copyright': '© 2025 Altura Ads. Todos os direitos reservados.',
    'contact.email': 'E-mail',
    'contact.telegram': 'Telegram',
    'contact.whatsapp': 'WhatsApp'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'pt'>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as 'en' | 'pt') || 'en'; // Default to English
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
