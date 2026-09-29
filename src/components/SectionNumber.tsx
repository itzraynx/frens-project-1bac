import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionNumberProps {
  number: string;
  align?: 'left' | 'right';
}

export default function SectionNumber({ number, align = 'left' }: SectionNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div
      ref={ref}
      className={`absolute ${align === 'left' ? 'left-4 lg:left-12' : 'right-4 lg:right-12'} top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block`}
    >
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-[10rem] lg:text-[14rem] leading-none text-ink/[0.03] dark:text-ivory/[0.03] transition-colors duration-700"
      >
        {number}
      </motion.span>
    </div>
  );
}
