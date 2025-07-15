
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Language, resumeData } from '@/lib/resume-data';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollToTop } from '@/components/ScrollToTop';
import ParticlesBackground from '@/components/particles/ParticlesBackground';
import Header from '@/components/Header';
import SummarySection from '@/components/SummarySection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import EducationSection from '@/components/EducationSection';
import LanguagesSection from '@/components/LanguagesSection';
import ReferencesSection from '@/components/ReferencesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { toast } = useToast();
  const [lang, setLang] = useState<Language>('en');
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [isChangingLang, setIsChangingLang] = useState(false);
  
  // Get current data based on selected language
  const currentData = resumeData[lang];
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    // Set class on mount
    document.documentElement.classList.toggle('dark', isDarkMode);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isDarkMode]);
  
  const handleLanguageChange = (newLang: Language) => {
    setIsChangingLang(true);
    setLang(newLang);
    
    // Show toast notification when language changes
    toast({
      title: newLang === 'en' ? 'Language Changed' : 'Язык изменен',
      description: newLang === 'en' ? 'Switched to English' : 'Переключено на Русский',
      duration: 3000
    });
    
    // After transition completes
    setTimeout(() => {
      setIsChangingLang(false);
    }, 500);
  };
  
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    
    // Show toast notification when theme changes
    toast({
      title: newMode 
        ? (lang === 'en' ? 'Dark Mode Activated' : 'Темная тема активирована')
        : (lang === 'en' ? 'Light Mode Activated' : 'Светлая тема активирована'),
      duration: 3000
    });
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  
  return (
    <div className={`font-sans min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-background'}`}>
      <ParticlesBackground isDarkMode={isDarkMode} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl relative z-10">
        <Header 
          data={currentData} 
          lang={lang} 
          setLang={handleLanguageChange}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <AnimatePresence mode="wait">
          <motion.main 
            key={lang}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="mt-8 space-y-12"
          >
            <SummarySection data={currentData} lang={lang} />
            <ExperienceSection data={currentData} lang={lang} />
            <SkillsSection data={currentData} lang={lang} isDarkMode={isDarkMode} />
            <EducationSection data={currentData} lang={lang} />
            <LanguagesSection data={currentData} />
            <ReferencesSection data={currentData} />
            <ContactSection data={currentData} />
            <ScrollToTop />
          </motion.main>
        </AnimatePresence>
        
        <Footer data={currentData} />
      </div>
    </div>
  );
};

export default Index;
