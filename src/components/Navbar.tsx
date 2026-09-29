import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Définition', href: '#introduction' },
  { label: 'La famille', href: '#chapitre-yahya' },
  { label: 'Le voisinage', href: '#chapitre-rayan' },
  { label: 'Autres personnages', href: '#chapitre-lgharib' },
  { label: 'Sources', href: '#sources' },
  { label: 'Le groupe', href: '#credits' },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-8 h-8 rounded-full flex items-center justify-center hover:bg-ink/[0.04] dark:hover:bg-white/[0.06] transition-colors duration-300"
      aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.svg
            key="moon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-ink-muted"
          >
            <path
              d="M13.5 8.5C13.5 11.5376 11.0376 14 8 14C4.96243 14 2.5 11.5376 2.5 8.5C2.5 5.46243 4.96243 3 8 3C8.5 3 9 3.08 9.47 3.23C8.55 4.03 8 5.2 8 6.5C8 9.53757 10.4624 12 13.5 12C13.5 12.5 13.42 13 13.27 13.47C13.08 13.82 12.82 14.14 12.5 14.41"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-warm"
          >
            <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 1.5V2.5M8 13.5V14.5M1.5 8H2.5M13.5 8H14.5M3.757 3.757L4.464 4.464M11.536 11.536L12.243 12.243M3.757 12.243L4.464 11.536M11.536 4.464L12.243 3.757" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Island Nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-white/80 dark:bg-obsidian-light/80 backdrop-blur-2xl shadow-ambient-sm border border-ink/5 dark:border-white/8'
              : 'bg-white/40 dark:bg-obsidian-light/40 backdrop-blur-xl border border-ink/5 dark:border-white/6'
          }`}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-sm text-ink dark:text-ivory px-4 py-2 hover:text-ink-light dark:hover:text-ivory-muted transition-colors duration-300"
          >
            La Boîte à merveilles
          </a>

          <div className="w-px h-4 bg-ink/8 dark:bg-white/10" />

          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="px-3 py-2 text-[11px] font-medium text-ink-muted dark:text-ivory-muted hover:text-ink dark:hover:text-ivory transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </button>
          ))}

          <div className="w-px h-4 bg-ink/8 dark:bg-white/10" />
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-4 right-4 z-50 md:hidden"
      >
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-white/90 dark:bg-obsidian-light/90 backdrop-blur-2xl shadow-ambient-sm border border-ink/5 dark:border-white/8'
              : 'bg-white/60 dark:bg-obsidian-light/60 backdrop-blur-xl border border-ink/5 dark:border-white/6'
          }`}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-sm text-ink dark:text-ivory"
          >
            La Boîte à merveilles
          </a>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-6 h-6 flex items-center justify-center"
              aria-label="Menu"
            >
              <span
                className={`absolute w-4 h-[1.5px] bg-ink dark:bg-ivory transition-all duration-300 ${
                  mobileOpen ? 'rotate-45' : '-translate-y-[3px]'
                }`}
              />
              <span
                className={`absolute w-4 h-[1.5px] bg-ink dark:bg-ivory transition-all duration-300 ${
                  mobileOpen ? '-rotate-45' : 'translate-y-[3px]'
                }`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 bg-white/95 dark:bg-obsidian-light/95 backdrop-blur-3xl rounded-2xl border border-ink/5 dark:border-white/8 overflow-hidden shadow-ambient"
            >
              <div className="px-2 py-3 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => handleClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm text-ink-muted dark:text-ivory-muted hover:text-ink dark:hover:text-ivory hover:bg-ink/[0.02] dark:hover:bg-white/[0.03] rounded-xl transition-colors duration-200"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
