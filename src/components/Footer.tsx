
import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../lib/resume-data';

interface FooterProps {
  data: ResumeData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <motion.footer 
      className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <p>{data.footer}</p>
      <p className="mt-2">&copy; {new Date().getFullYear()} {data.name}</p>
    </motion.footer>
  );
};

export default Footer;
