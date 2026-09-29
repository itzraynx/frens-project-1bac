import { motion } from 'framer-motion';

export default function AnimatedMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Orb 1 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(196,168,130,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['-20%', '30%', '-10%', '-20%'],
          y: ['10%', '-20%', '20%', '10%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orb 2 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(138,154,126,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          right: '-10%',
          top: '30%',
        }}
        animate={{
          x: ['0%', '-20%', '10%', '0%'],
          y: ['0%', '30%', '-10%', '0%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orb 3 */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25 dark:opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(196,168,130,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          left: '20%',
          bottom: '10%',
        }}
        animate={{
          x: ['0%', '15%', '-10%', '0%'],
          y: ['0%', '-15%', '10%', '0%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
