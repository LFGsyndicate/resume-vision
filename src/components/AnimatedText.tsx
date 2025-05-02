
import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "",
  delay = 0.1,
  duration = 0.5
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, delay: delay }}
      className={className}
    >
      <ReactMarkdown
        components={{
          strong: ({ node, ...props }) => (
            <span className="highlight-text font-semibold" {...props} />
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </motion.div>
  );
};

export default AnimatedText;
