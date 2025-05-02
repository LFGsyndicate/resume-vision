
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, ResumeData } from '../lib/resume-data';
import AnimatedText from './AnimatedText';
import { GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface EducationSectionProps {
  data: ResumeData;
  lang: Language;
}

const EducationSection: React.FC<EducationSectionProps> = ({ data, lang }) => {
  const [expandedEdX, setExpandedEdX] = useState(false);
  const threshold = 3; // Number of courses to show initially
  
  const toggleEdX = () => setExpandedEdX(!expandedEdX);
  
  return (
    <motion.section 
      id="education"
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
        {data.navigation.education}
      </motion.h2>
      
      <div className="space-y-6">
        {data.education.map((edu, index) => (
          <motion.div
            key={`${edu.institution}-${index}`}
            className="education-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-resume-primary dark:text-resume-muted" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {edu.institution}
                  </h3>
                </div>
                
                <p className="text-resume-primary dark:text-resume-muted font-medium mt-1">
                  {edu.degree}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {edu.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
              
              {edu.institution === "edX" && (
                <motion.button
                  onClick={toggleEdX}
                  className="self-start md:self-center px-2 py-1 rounded-md text-sm text-resume-primary dark:text-resume-muted hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedEdX ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </motion.button>
              )}
            </div>
            
            {/* Focus areas for edX */}
            {edu.focus && (
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {lang === 'en' ? 'Focus Areas:' : 'Направления:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.focus.map((area, i) => (
                    <motion.span 
                      key={i}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Courses for edX with animation */}
            {edu.institution === "edX" && edu.courses && (
              <>
                <AnimatePresence>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedEdX ? "auto" : "100px", opacity: 1 }}
                    className="mt-4 overflow-hidden"
                  >
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {lang === 'en' ? 'Selected Courses:' : 'Избранные курсы:'}
                    </h4>
                    
                    <ul className="pl-5 list-disc text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {(expandedEdX ? edu.courses : edu.courses.slice(0, threshold)).map((course, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          {course}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
                
                {!expandedEdX && edu.courses.length > threshold && (
                  <motion.button
                    onClick={toggleEdX}
                    className="mt-2 text-xs text-resume-primary dark:text-resume-muted hover:underline flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{lang === 'en' ? `Show All ${edu.courses.length} Courses` : `Показать все ${edu.courses.length} курсов`}</span>
                    <ChevronDown size={12} className="ml-1" />
                  </motion.button>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationSection;
