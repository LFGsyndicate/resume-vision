
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ResumeData, Language } from '../lib/resume-data';
import AnimatedText from './AnimatedText';
import { 
  Award, 
  Briefcase, 
  Brain, 
  Code, 
  Cloud, 
  ChevronRight,
  ChevronDown,
  Layers
} from 'lucide-react';
import { 
  Card,
  CardContent
} from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

interface SummarySectionProps {
  data: ResumeData;
  lang: Language;
}

const SummarySection: React.FC<SummarySectionProps> = ({ data, lang }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  // Key highlights from the summary text
  const highlights = [
    {
      icon: Briefcase,
      title: lang === 'en' ? 'Leadership' : 'Лидерство',
      description: lang === 'en' 
        ? 'Founded and scaled VTRENDE LLC and LAXIO LTD, driving profitability and efficiency.'
        : 'Основал и масштабировал VTRENDE LLC и LAXIO LTD, повышая прибыльность и эффективность.'
    },
    {
      icon: Brain,
      title: lang === 'en' ? 'AI & ML' : 'ИИ и ML',
      description: lang === 'en' 
        ? 'Expertise in foundational models (OpenAI, Gemini, Claude) and ML frameworks.'
        : 'Экспертиза в фундаментальных моделях (OpenAI, Gemini, Claude) и ML фреймворках.'
    },
    {
      icon: Code,
      title: lang === 'en' ? 'Full-Stack' : 'Full-Stack',
      description: lang === 'en' 
        ? 'Modern frameworks (React, Node.js, Python, .NET) and API design.'
        : 'Современные фреймворки (React, Node.js, Python, .NET) и проектирование API.'
    },
    {
      icon: Cloud,
      title: lang === 'en' ? 'Cloud & DevOps' : 'Облако и DevOps',
      description: lang === 'en'
        ? 'AWS, GCP, Azure architecture, Docker, K8s, Terraform, and CI/CD.'
        : 'AWS, GCP, Azure архитектура, Docker, K8s, Terraform и CI/CD.'
    },
    {
      icon: Layers,
      title: lang === 'en' ? 'Blockchain & Web3' : 'Блокчейн и Web3',
      description: lang === 'en'
        ? 'Solidity, Web3 libraries, DAO governance frameworks, and security.'
        : 'Solidity, Web3 библиотеки, DAO фреймворки управления и безопасность.'
    }
  ];

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  // Parse the summary text to split into paragraphs
  const summaryParagraphs = data.summary.split('. ').filter(p => p.trim().length > 0);
  const firstParagraph = summaryParagraphs[0] + '.';
  const remainingText = summaryParagraphs.slice(1).join('. ');

  return (
    <motion.section 
      id="summary"
      className="py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 
        className="section-title"
        variants={itemVariants}
      >
        {data.navigation.summary}
      </motion.h2>

      {/* Main summary card with gradient background */}
      <motion.div
        className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8"
        variants={itemVariants}
      >
        <motion.div className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium mb-4">
          <AnimatedText text={firstParagraph} delay={0.2} />
        </motion.div>
        
        {expandedSection === 'summary' ? (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            <AnimatedText text={remainingText} delay={0.3} />
          </motion.div>
        ) : null}
        
        <motion.button
          onClick={() => toggleSection('summary')}
          className="flex items-center text-resume-primary dark:text-resume-muted mt-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-1 text-sm font-medium">
            {expandedSection === 'summary' ? 
              (lang === 'en' ? 'Read Less' : 'Свернуть') : 
              (lang === 'en' ? 'Read More' : 'Читать далее')}
          </span>
          <motion.div
            animate={{ rotate: expandedSection === 'summary' ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Key highlights carousel */}
      <motion.div
        variants={itemVariants}
        className="mb-8"
      >
        <motion.h3 
          className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-100 pl-2 border-l-2 border-resume-primary"
          variants={itemVariants}
        >
          {lang === 'en' ? 'Key Areas of Expertise' : 'Ключевые области экспертизы'}
        </motion.h3>

        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true
          }}
        >
          <CarouselContent className="py-4">
            {highlights.map((highlight, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="h-full"
                  variants={cardHoverVariants}
                  whileHover="hover"
                >
                  <Card className="h-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-full bg-resume-primary/10 text-resume-primary dark:text-resume-muted mr-3">
                          <highlight.icon className="h-5 w-5" />
                        </div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-100">{highlight.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </motion.div>

      {/* Skills snapshot */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {Object.keys(data.skills).slice(0, 3).map((category, index) => {
          const Icon = data.skillIcons[category];
          return (
            <motion.div
              key={category}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-3">
                {Icon && <Icon className="h-5 w-5 mr-2 text-resume-primary dark:text-resume-muted" />}
                <h4 className="font-medium text-gray-800 dark:text-gray-100 text-sm">{category}</h4>
              </div>
              <ul className="space-y-1">
                {data.skills[category].slice(0, 2).map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-center text-xs text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                  >
                    <ChevronRight className="h-3 w-3 text-resume-primary dark:text-resume-muted mr-1 flex-shrink-0" />
                    <span className="truncate">{typeof skill === 'string' ? skill.split('(')[0] : ''}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                href="#skills"
                className="text-xs text-resume-primary dark:text-resume-muted mt-2 inline-flex items-center hover:underline"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-1">{lang === 'en' ? 'View all' : 'Показать все'}</span>
                <ChevronRight className="h-3 w-3" />
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default SummarySection;
