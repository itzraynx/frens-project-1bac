import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface BreathingGlowProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export default function BreathingGlow({ children, className = '', color = 'rgba(196,168,130,0.15)' }: BreathingGlowProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        boxShadow: [
          `0 0 20px ${color}`,
          `0 0 40px ${color}`,
          `0 0 20px ${color}`,
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
