import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextScramble from './TextScramble';

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -90]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.94]);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  const labels = ['Littérature maghrébine', 'Ahmed Sefrioui', 'Fès', 'Personnages', 'Projet de français', 'Projet scolaire'];

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
      <motion.div style={{ opacity: heroOpacity, y: heroY, scale: heroScale }} className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="eyebrow mb-8">
          <span className="w-1 h-1 rounded-full bg-warm" />
          Projet de français · Littérature
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 38 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6.4rem] text-ink dark:text-ivory leading-[0.98] tracking-tight mb-7 transition-colors duration-700">
          <TextScramble text="La Boîte à" className="font-serif" />
          <br />
          <span className="italic text-ink-light dark:text-ivory-muted"><TextScramble text="merveilles" className="font-serif italic" /></span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="font-serif text-lg sm:text-xl md:text-2xl text-ink-muted dark:text-ivory-muted italic mb-5 max-w-3xl mx-auto leading-relaxed">
          Littérature maghrébine & personnages d’Ahmed Sefrioui
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.68 }} className="text-sm sm:text-base text-ink-faint dark:text-ivory-faint max-w-2xl mx-auto mb-9 leading-relaxed">
          Une lecture guidée de la littérature maghrébine, puis une découverte des personnages qui donnent vie à l’univers de Fès dans <em className="font-serif">La Boîte à merveilles</em>.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={() => scrollTo('#introduction')} className="group btn-press flex items-center gap-2.5 rounded-full px-6 py-3 bg-ink dark:bg-ivory text-cream dark:text-obsidian text-sm font-medium hover:bg-ink-light transition-colors duration-300">
            Découvrir le projet <span className="w-7 h-7 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">↘</span>
          </button>
          <button onClick={() => scrollTo('#chapitre-yahya')} className="group btn-press flex items-center gap-2 rounded-full px-6 py-3 border border-ink/10 dark:border-ivory/10 text-ink dark:text-ivory text-sm font-medium hover:bg-ink/[0.02] dark:hover:bg-white/[0.03] transition-all">
            Explorer les chapitres <span aria-hidden>→</span>
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-10 flex flex-wrap justify-center gap-2">
          {['Mohamed Taha Ame', 'Yahya Riyaf', 'Rayan Rchouki', 'Lgharib'].map((name, index) => (
            <span key={name} className="rounded-full border border-ink/5 dark:border-white/8 bg-white/40 dark:bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-ink-muted dark:text-ivory-muted">0{index + 1} · {name}</span>
          ))}
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="absolute bottom-16 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="flex animate-marquee whitespace-nowrap">{[...Array(2)].map((_, setIdx) => <div key={setIdx} className="flex items-center gap-8 px-4">{labels.map((item) => <span key={item} className="flex items-center gap-8"><span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ink-faint/60 dark:text-ivory-faint/40 font-medium">{item}</span><span className="w-1 h-1 rounded-full bg-warm/60" /></span>)}</div>)}</div>
      </motion.div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint/50"><span className="text-[9px] uppercase tracking-[0.3em]">Défiler</span><motion.div animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-px h-6 bg-gradient-to-b from-warm/50 to-transparent" /></div>
    </section>
  );
}
