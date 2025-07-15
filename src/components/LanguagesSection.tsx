
import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../lib/resume-data';
import AnimatedText from './AnimatedText';
import { Languages as LangIcon } from 'lucide-react';

interface LanguagesSectionProps {
  data: ResumeData;
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({ data }) => {
  return (
    <motion.section 
      id="languages"
      className="py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {data.navigation.languages}
      </motion.h2>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {data.languages.map((language, index) => (
          <motion.div 
            key={language.lang}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full mr-4">
              <LangIcon className="h-6 w-6 text-ocean-500 dark:text-seagreen-400" />
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-100">
                {language.lang}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language.level}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default LanguagesSection;
