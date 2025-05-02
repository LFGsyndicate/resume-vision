
import React from 'react';
import { motion } from 'framer-motion';
import { ResumeData } from '../lib/resume-data';
import AnimatedText from './AnimatedText';
import { Mail, Linkedin, Send } from 'lucide-react';

interface ContactSectionProps {
  data: ResumeData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  return (
    <motion.section 
      id="contact"
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
        {data.navigation.contact}
      </motion.h2>
      
      <motion.div
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold text-resume-primary dark:text-resume-muted mb-3">
          {data.contactSection.title}
        </h3>
        
        <AnimatedText 
          text={data.contactSection.description} 
          className="text-gray-700 dark:text-gray-300 mb-6"
          delay={0.3}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.a
            href={`mailto:${data.contact.email}`}
            className="contact-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Mail className="h-5 w-5" />
            <span>{data.contactSection.emailMe}</span>
          </motion.a>
          
          <motion.a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Linkedin className="h-5 w-5" />
            <span>{data.contactSection.connectLinkedIn}</span>
          </motion.a>
          
          <motion.a
            href={data.contact.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Send className="h-5 w-5" />
            <span>{data.contactSection.messageTelegram}</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
