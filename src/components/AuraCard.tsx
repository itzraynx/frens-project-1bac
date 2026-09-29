import { useRef, useEffect, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface AuraCardProps {
  children: ReactNode;
  className?: string;
}

export default function AuraCard({ children, className = '' }: AuraCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    };

    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Animated aura rings */}
      <div className="absolute -inset-[2px] rounded-[calc(1.5rem+2px)] overflow-hidden pointer-events-none">
        {/* Rotating gradient border */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(196,168,130,0.4), transparent, rgba(196,168,130,0.2), transparent)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        {/* Second slower ring */}
        <motion.div
          className="absolute -inset-1"
          style={{
            background: 'conic-gradient(from 180deg, transparent, rgba(201,169,110,0.15), transparent, rgba(201,169,110,0.3), transparent)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Mouse-following glow spot */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovered ? 180 : 0,
            height: isHovered ? 180 : 0,
            opacity: isHovered ? 0.4 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196,168,130,0.5) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Pulsing outer glow */}
      <motion.div
        className="absolute -inset-4 rounded-[2rem] pointer-events-none"
        animate={{
          boxShadow: [
            '0 0 20px rgba(196,168,130,0.1), 0 0 40px rgba(196,168,130,0.05)',
            '0 0 40px rgba(196,168,130,0.2), 0 0 80px rgba(196,168,130,0.1)',
            '0 0 20px rgba(196,168,130,0.1), 0 0 40px rgba(196,168,130,0.05)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating orbs around card */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-warm/40 dark:bg-gold/40 pointer-events-none"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 2) * 80}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, (i % 2 === 0 ? 8 : -8), 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
