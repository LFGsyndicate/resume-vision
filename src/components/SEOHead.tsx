import React from 'react';
import { Language } from '../lib/resume-data';

interface SEOHeadProps {
  lang: Language;
}

const SEOHead: React.FC<SEOHeadProps> = ({ lang }) => {
  React.useEffect(() => {
    // Update document title based on language
    const title = lang === 'en' 
      ? 'Cyril Lamdan - CEO & AI-Driven Full-Stack Developer | Resume'
      : 'Кирилл Ламдан - CEO и AI Разработчик | Резюме';
    
    const description = lang === 'en'
      ? 'Visionary CEO & AI-Driven Full-Stack Developer with 19+ years of experience in tech innovation, startup growth, and profitability. Expert in AI/ML, blockchain, cloud infrastructure.'
      : 'Опытный CEO и AI-разработчик с более чем 19-летним опытом в технологических инновациях, росте стартапов и прибыльности. Эксперт в области ИИ/ML, блокчейна, облачной инфраструктуры.';

    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;

  }, [lang]);

  return null; // This component doesn't render anything
};

export default SEOHead;