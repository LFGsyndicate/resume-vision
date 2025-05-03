
import React from 'react';
import { motion } from 'framer-motion';
import { Language, ResumeData } from '../../lib/resume-data';
import AnimatedText from '../AnimatedText';
import RadarSkillChart from './RadarChart';
import { Zap } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselDots,
  CarouselPrevious,
  CarouselNext 
} from '@/components/ui/carousel';

interface SkillsSectionProps {
  data: ResumeData;
  lang: Language;
  isDarkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data, lang, isDarkMode }) => {
  // Use skillLevels for radar charts
  const skillCategories = Object.keys(data.skillLevels);
  
  // Use skills for the list display
  const skillsList = data.skills;
  const toolsCategory = lang === 'en' 
    ? "Development Tools & Collaboration" 
    : "Инструменты и Коллаборация";
  
  return (
    <motion.section 
      id="skills"
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
        {data.navigation.skills}
      </motion.h2>
      
      {/* Radar Charts for Key Skill Areas with Carousel */}
      <div className="relative">
        <Carousel
          opts={{
            align: 'start',
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {skillCategories.map((category, index) => {
              const Icon = data.skillIcons[category] || Zap;
              const categoryData = data.skillLevels[category];
              
              if (!categoryData) return null;
              
              return (
                <CarouselItem key={category} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-md font-semibold mb-3 text-resume-primary dark:text-resume-muted flex items-center">
                      <Icon size={18} className="mr-2" />
                      <AnimatedText text={category} />
                    </h3>
                    
                    <RadarSkillChart data={categoryData} isDarkMode={isDarkMode} />
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          
          <div className="flex justify-center items-center gap-2 mt-4">
            <CarouselPrevious className="relative static h-8 w-8 translate-y-0 translate-x-0 rounded-full" />
            <CarouselDots />
            <CarouselNext className="relative static h-8 w-8 translate-y-0 translate-x-0 rounded-full" />
          </div>
        </Carousel>
      </div>
      
      {/* Detailed Skills Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Object.entries(skillsList).map(([category, skills], index) => {
          const Icon = data.skillIcons[category] || Zap;
          
          return (
            <motion.div
              key={category}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-md font-semibold mb-3 text-resume-primary dark:text-resume-muted flex items-center">
                <Icon size={18} className="mr-2" />
                <AnimatedText text={category} />
              </h3>
              
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) + (skillIndex * 0.03) }}
                  >
                    <span className="text-resume-primary dark:text-resume-muted mr-2 mt-1">•</span>
                    <AnimatedText text={skill} />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
