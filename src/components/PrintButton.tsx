import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PrintButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 1200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-50 hidden lg:block"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <button
            onClick={handlePrint}
            className="w-11 h-11 rounded-full bg-ink/[0.04] dark:bg-white/[0.04] border border-ink/8 dark:border-white/8 text-ink-muted dark:text-ivory-muted flex items-center justify-center hover:border-ink/15 dark:hover:border-white/15 hover:bg-ink/[0.06] dark:hover:bg-white/[0.06] transition-all duration-300 btn-press"
            aria-label="Imprimer la page"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6V2H12V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H2V8H14V12H12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12V14H4V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="5.5" cy="10" r="0.5" fill="currentColor"/>
            </svg>
          </button>

          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-ink dark:bg-ivory text-cream dark:text-obsidian text-[11px] font-medium whitespace-nowrap"
              >
                Imprimer
                <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-r-[6px] border-r-ink dark:border-r-ivory" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
