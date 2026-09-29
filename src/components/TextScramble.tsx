import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TextScrambleProps {
  text: string;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export default function TextScramble({ text, className = '', as: Tag = 'span' }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const frameRef = useRef<number>(0);
  const iterationRef = useRef(0);

  const scramble = useCallback(() => {
    const original = text;
    let iteration = iterationRef.current;

    const animate = () => {
      setDisplayText(
        original
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return original[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration < original.length) {
        iteration += 1 / 3;
        iterationRef.current = iteration;
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(original);
      }
    };

    cancelAnimationFrame(frameRef.current);
    iterationRef.current = 0;
    animate();
  }, [text]);

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    scramble();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    cancelAnimationFrame(frameRef.current);
    setDisplayText(text);
  };

  return (
    <motion.span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-default ${className}`}
      animate={{ opacity: isHovering ? 0.9 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <Tag className={className}>{displayText}</Tag>
    </motion.span>
  );
}
