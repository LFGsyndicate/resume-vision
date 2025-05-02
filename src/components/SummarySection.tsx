
import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../lib/resume-data';
import AnimatedText from './AnimatedText';

interface SummarySectionProps {
  data: ResumeData;
}

const SummarySection: React.FC<SummarySectionProps> = ({ data }) => {
  return (
    <motion.section 
      id="summary"
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
        {data.navigation.summary}
      </motion.h2>
      <motion.div
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AnimatedText 
          text={data.summary} 
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
        />
      </motion.div>
    </motion.section>
  );
};

export default SummarySection;
