
import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Language, ResumeData } from '../lib/resume-data';
import { Mail, Linkedin, Send, MapPin } from 'lucide-react';
import AnimatedText from './AnimatedText';

interface HeaderProps {
  data: ResumeData;
  lang: Language;
  setLang: (lang: Language) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ data, lang, setLang, isDarkMode, toggleDarkMode }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const navItems = [
    { key: "summary", label: data.navigation.summary, href: "#summary" },
    { key: "experience", label: data.navigation.experience, href: "#experience" },
    { key: "skills", label: data.navigation.skills, href: "#skills" },
    { key: "education", label: data.navigation.education, href: "#education" },
    { key: "referencesNote", label: data.navigation.referencesNote, href: "#references" },
    { key: "contact", label: data.navigation.contact, href: "#contact" },
  ];

  return (
    <motion.header 
      className="py-6 md:py-8"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
        <div>
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-resume-primary dark:text-resume-muted"
            variants={headerItemVariants}
          >
            {data.name}
          </motion.h1>
          <motion.div variants={headerItemVariants}>
            <AnimatedText 
              text={data.headline}
              className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3"
            />
          </motion.div>
          <motion.div 
            className="flex items-center text-gray-600 dark:text-gray-300 text-sm" 
            variants={headerItemVariants}
          >
            <MapPin className="h-4 w-4 mr-1 text-resume-primary" />
            <span>{data.location}</span>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0"
          variants={headerItemVariants}
        >
          <div className="flex space-x-4">
            <motion.button
              onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
              className="px-3 py-1 rounded-md border border-resume-primary text-sm hover:bg-resume-primary hover:text-white dark:border-resume-muted dark:hover:bg-resume-muted dark:hover:text-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === 'en' ? 'RU' : 'EN'}
            </motion.button>

            <motion.button
              onClick={toggleDarkMode}
              className="px-3 py-1 rounded-md border border-resume-primary text-sm hover:bg-resume-primary hover:text-white dark:border-resume-muted dark:hover:bg-resume-muted dark:hover:text-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </motion.button>
          </div>

          <div className="flex space-x-4 mt-2">
            <motion.a
              href={`mailto:${data.contact.email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-resume-primary dark:text-resume-muted hover:text-resume-accent dark:hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-resume-primary dark:text-resume-muted hover:text-resume-accent dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={data.contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-resume-primary dark:text-resume-muted hover:text-resume-accent dark:hover:text-white transition-colors"
            >
              <Send className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {!isMobile && (
        <motion.nav 
          className="hidden md:flex justify-center mt-6 pb-2 border-b border-gray-200 dark:border-gray-700"
          variants={headerItemVariants}
        >
          <ul className="flex flex-wrap justify-center gap-x-8">
            {navItems.map((item) => (
              <motion.li key={item.key} whileHover={{ scale: 1.05 }}>
                <a
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-resume-primary dark:text-gray-300 dark:hover:text-resume-muted transition-colors"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
