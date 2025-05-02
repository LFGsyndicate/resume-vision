
import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../lib/resume-data';
import AnimatedText from './AnimatedText';
import { Info } from 'lucide-react';

interface ReferencesSectionProps {
  data: ResumeData;
}

const ReferencesSection: React.FC<ReferencesSectionProps> = ({ data }) => {
  return (
    <motion.section 
      id="references"
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
        {data.navigation.referencesNote}
      </motion.h2>
      
      <motion.div
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-start">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4 mt-1">
            <Info className="h-6 w-6 text-resume-primary dark:text-resume-muted" />
          </div>
          
          <div>
            <motion.h3
              className="text-xl font-semibold mb-3 text-resume-primary dark:text-resume-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {data.referencesNote.title}
            </motion.h3>
            
            <AnimatedText 
              text={data.referencesNote.text} 
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
              delay={0.4}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ReferencesSection;
