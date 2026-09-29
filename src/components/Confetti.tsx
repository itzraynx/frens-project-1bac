import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
}

interface ConfettiProps {
  active: boolean;
  onComplete?: () => void;
}

const colors = [
  '#c4a882', '#d9c4a8', '#9a7e5c', '#8a9a7e', '#a8b89c',
  '#c9a96e', '#e8d5a3', '#8b7340',
];

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -10 - Math.random() * 20,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.8,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as Particle['shape'],
  }));
}

export default function Confetti({ active, onComplete }: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (active) {
      const newParticles = createParticles(60);
      setParticles(newParticles);
      const timer = setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [active, onComplete]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[150] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: `${p.x}vw`,
              y: `${p.y}vh`,
              rotate: p.rotation,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              y: `${110 + Math.random() * 20}vh`,
              x: `${p.x + (Math.random() - 0.5) * 30}vw`,
              rotate: p.rotation + 720,
              scale: p.scale,
              opacity: [1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2.5 + Math.random() * 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.5, delay: 2 },
            }}
            className="absolute"
            style={{ width: 8, height: 8 }}
          >
            {p.shape === 'circle' && (
              <div className="w-full h-full rounded-full" style={{ backgroundColor: p.color }} />
            )}
            {p.shape === 'square' && (
              <div className="w-full h-full" style={{ backgroundColor: p.color }} />
            )}
            {p.shape === 'triangle' && (
              <div
                className="w-0 h-0"
                style={{
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderBottom: `8px solid ${p.color}`,
                }}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
