
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Language, ResumeData } from '../lib/resume-data';
import { Mail, Linkedin, Send, MapPin, Menu, X, Sun, Moon, Globe } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
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
      className="py-6 md:py-8 z-20 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm"
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
        <div className="flex justify-between items-center">
          <motion.div variants={logoVariants} className="flex flex-col">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-resume-primary to-resume-accent dark:from-resume-muted dark:to-cyan-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8 } 
              }}
            >
              {data.name}
            </motion.h1>
            <motion.div variants={itemVariants}>
              <AnimatedText 
                text={data.headline}
                className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3"
              />
            </motion.div>
            <motion.div 
              className="flex items-center text-gray-600 dark:text-gray-300 text-sm" 
              variants={itemVariants}
            >
              <MapPin className="h-4 w-4 mr-1 text-resume-primary dark:text-resume-muted" />
              <span>{data.location}</span>
            </motion.div>
          </motion.div>
          
          {isMobile && (
            <motion.button
              variants={itemVariants}
              className="md:hidden text-gray-700 dark:text-gray-300 p-2 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          )}
        </div>

        <motion.div 
          className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0"
          variants={itemVariants}
        >
          <div className="flex space-x-4 justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
                className="flex items-center px-3 py-2 rounded-md border border-resume-primary text-sm hover:bg-resume-primary hover:text-white dark:border-resume-muted dark:hover:bg-resume-muted dark:hover:text-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="h-4 w-4 mr-1" />
                {lang === 'en' ? 'EN' : 'RU'}
              </motion.button>
            </motion.div>

            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-md border border-resume-primary text-sm hover:bg-resume-primary hover:text-white dark:border-resume-muted dark:hover:bg-resume-muted dark:hover:text-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.button>
          </div>

          <div className="flex space-x-4 mt-2 justify-center md:justify-end">
            <motion.a
              href={`mailto:${data.contact.email}`}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-resume-primary dark:text-resume-muted hover:text-resume-accent dark:hover:text-white transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-resume-primary dark:text-resume-muted hover:text-resume-accent dark:hover:text-white transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={data.contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-resume-primary dark:text-resume-muted hover:text-resume-accent dark:hover:text-white transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Send className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <motion.nav 
          className="hidden md:flex justify-center mt-6 pb-2 border-b border-gray-200 dark:border-gray-700"
          variants={itemVariants}
        >
          <ul className="flex flex-wrap justify-center gap-x-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.key} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.a
                  href={item.href}
                  className="text-sm relative text-gray-600 hover:text-resume-primary dark:text-gray-300 dark:hover:text-resume-muted transition-colors py-2 px-1 block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-resume-primary dark:bg-resume-muted"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg border-t border-gray-200 dark:border-gray-700 py-2 px-4 z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-2 py-2">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
