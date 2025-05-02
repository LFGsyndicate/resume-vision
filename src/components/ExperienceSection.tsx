
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, ResumeData } from '../lib/resume-data';
import AnimatedText from './AnimatedText';
import { Building, Calendar, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

interface ExperienceSectionProps {
  data: ResumeData;
  lang: Language;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data, lang }) => {
  const [expandedItems, setExpandedItems] = React.useState<number[]>([0]); // First item expanded by default
  
  const toggleExpanded = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };
  
  return (
    <motion.section 
      id="experience"
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
        {data.navigation.experience}
      </motion.h2>
      
      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="timeline-line" />
        
        {/* Experience Items */}
        {data.experience.map((exp, index) => {
          const isExpanded = expandedItems.includes(index);
          const isLast = index === data.experience.length - 1;
          
          return (
            <motion.div 
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 ${isLast ? '' : 'pb-4'}`}
            >
              {/* Timeline dot */}
              <motion.div 
                className="timeline-dot absolute -left-6 top-1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              />
              
              <div className="experience-card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-resume-primary dark:text-resume-muted">
                      {exp.title} @ {exp.company}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => toggleExpanded(index)}
                    className="self-start md:self-center px-2 py-1 rounded-md text-sm text-resume-primary dark:text-resume-muted hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </motion.button>
                </div>
                
                <AnimatedText 
                  text={exp.description} 
                  className="mt-3 text-gray-600 dark:text-gray-300"
                  delay={index * 0.1 + 0.2}
                />
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          {lang === 'en' ? 'Key Achievements:' : 'Ключевые достижения:'}
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex"
                            >
                              <span className="text-resume-primary dark:text-resume-muted mr-2">•</span>
                              <AnimatedText 
                                text={achievement} 
                                delay={i * 0.1}
                              />
                            </motion.li>
                          ))}
                        </ul>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tags.map((tag, i) => (
                            <motion.span 
                              key={i}
                              className="skill-tag"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
