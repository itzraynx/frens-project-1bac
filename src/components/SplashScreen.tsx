import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Code2, Mic2, Search, Sparkles } from 'lucide-react';

interface SplashScreenProps { onComplete: () => void; }

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [canEnter, setCanEnter] = useState(false);
  const [leaving, setLeaving] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setCanEnter(true), 650);
    return () => window.clearTimeout(timer);
  }, []);
  const enter = () => {
    if (!canEnter) return;
    setLeaving(true);
    window.setTimeout(onComplete, 600);
  };

  return <AnimatePresence>{!leaving && <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="fixed inset-0 z-[200] bg-cream dark:bg-obsidian overflow-y-auto px-4 py-5 sm:px-7 sm:py-7 lg:p-8">
    <div className="pointer-events-none fixed inset-0 overflow-hidden"><div className="absolute -top-32 left-[28%] h-[30rem] w-[30rem] rounded-full bg-warm/[0.06] blur-[100px]"/><div className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-sage/[0.05] blur-[100px]"/></div>
    <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] w-full max-w-[1320px] items-center">
      <div className="grid w-full items-stretch gap-5 lg:grid-cols-[0.82fr_1.18fr] xl:gap-7">
        {/* Project cover */}
        <motion.section initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="bezel-outer shadow-ambient">
          <div className="bezel-inner relative flex h-full min-h-[420px] flex-col overflow-hidden p-7 sm:p-9 md:p-11">
            <div className="absolute -right-5 top-16 opacity-[0.16] dark:opacity-[0.23]" aria-hidden="true">
              <svg viewBox="0 0 260 220" width="250" height="220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 48c38-13 73-8 112 10v137c-39-18-74-23-112-10V48Z" fill="#C4A882" fillOpacity=".13" stroke="#9A7E5C" strokeOpacity=".58" strokeWidth="1.4"/>
                <path d="M242 48c-38-13-73-8-112 10v137c39-18 74-23 112-10V48Z" fill="#C4A882" fillOpacity=".13" stroke="#9A7E5C" strokeOpacity=".58" strokeWidth="1.4"/>
                <path d="M34 70c26-6 50-2 78 10M34 91c26-6 50-2 78 10M34 112c26-6 50-2 78 10M226 70c-26-6-50-2-78 10M226 91c-26-6-50-2-78 10M226 112c-26-6-50-2-78 10" stroke="#9A7E5C" strokeOpacity=".42" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M130 58v137" stroke="#9A7E5C" strokeOpacity=".65" strokeWidth="1.3"/>
                <circle cx="130" cy="34" r="8" stroke="#9A7E5C" strokeOpacity=".58"/>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="eyebrow mb-8"><span className="h-1 w-1 rounded-full bg-warm"/>Projet de français · Présentation littéraire</div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-warm-dark dark:text-gold-light">Littérature maghrébine</p>
              <h1 className="max-w-xl font-serif text-5xl leading-[0.94] tracking-tight text-ink dark:text-ivory sm:text-6xl md:text-7xl">La Boîte à <span className="italic text-ink-light dark:text-ivory-muted">merveilles</span></h1>
              <p className="mt-5 font-serif text-lg italic text-ink-muted dark:text-ivory-muted sm:text-xl">Ahmed Sefrioui · Fès · 1954</p>
              <div className="my-8 h-px w-20 bg-warm/50"/>
              <p className="max-w-md text-base leading-relaxed text-ink-muted dark:text-ivory-muted sm:text-lg">Une présentation en quatre voix : la littérature maghrébine, puis les personnages qui font vivre le monde du roman.</p>
            </div>
            <div className="relative z-10 mt-auto pt-10">
              <div className="flex items-end justify-between gap-3 border-t border-ink/7 pt-4 dark:border-white/8">
                <div><p className="text-[9px] uppercase tracking-[0.18em] text-ink-faint dark:text-ivory-faint">Notre équipe</p><p className="mt-1 font-serif text-lg text-ink dark:text-ivory">Un projet · quatre contributions</p></div>
                <span className="font-serif text-4xl italic text-warm/70 dark:text-gold/70">01—04</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contributor board */}
        <section className="flex flex-col gap-4">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-end justify-between px-1">
            <div><div className="eyebrow mb-3"><Sparkles size={11}/>Les voix derrière le projet</div><h2 className="font-serif text-3xl text-ink dark:text-ivory sm:text-4xl">Rencontrez <span className="italic text-ink-light dark:text-ivory-muted">l’équipe</span></h2></div>
            <span className="hidden sm:block pb-1 text-[9px] uppercase tracking-[0.18em] text-ink-faint dark:text-ivory-faint">4 membres · 4 rôles</span>
          </motion.div>

          {/* Featured collaborators: identical card dimensions, different contributions */}
          <div className="grid gap-4 sm:grid-cols-2">
            <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="relative flex h-full min-h-[230px] flex-col justify-between overflow-hidden rounded-[1.6rem] border border-warm/25 bg-[#f3eadc] p-5 shadow-ambient dark:bg-[#1b1917] sm:p-6">
              <span className="absolute -right-1 -top-7 font-serif text-[8rem] leading-none text-warm/[0.10] dark:text-gold/[0.10]">01</span>
              <div className="relative z-10 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-warm/30 bg-white/35 dark:bg-white/[0.04]"><span className="font-serif text-2xl text-warm-dark dark:text-gold-light">T</span></div><span className="rounded-full bg-warm-dark px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-cream dark:bg-gold-light dark:text-obsidian">Principal</span></div>
              <div className="relative z-10 mt-6"><p className="text-[9px] uppercase tracking-[0.16em] text-warm-dark dark:text-gold-light">Présentateur principal</p><h3 className="mt-1 font-serif text-2xl leading-tight text-ink dark:text-ivory">Mohamed Taha Ame</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-ivory-muted">Ouvre la présentation et présente la définition de la littérature maghrébine.</p></div>
              <div className="relative z-10 mt-5 flex items-center gap-2 border-t border-warm/15 pt-3 text-[9px] uppercase tracking-[0.13em] text-warm-dark dark:text-gold-light"><Mic2 size={13}/> Ouverture · Chapitre 01</div>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }} className="relative flex h-full min-h-[230px] flex-col justify-between overflow-hidden rounded-[1.6rem] border border-ink/10 bg-ink p-5 text-cream shadow-ambient dark:border-white/8 dark:bg-obsidian-light sm:p-6">
              <span className="absolute -right-1 -top-7 font-serif text-[8rem] leading-none text-white/[0.06]">03</span>
              <div className="relative z-10 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-light/25 bg-white/[0.04]"><span className="font-serif text-2xl text-gold-light">R</span></div><Code2 size={21} className="text-gold-light"/></div>
              <div className="relative z-10 mt-6"><p className="text-[9px] uppercase tracking-[0.16em] text-gold-light">Créateur du site · Recherche</p><h3 className="mt-1 font-serif text-2xl leading-tight text-ivory">Rayan Rchouki</h3><p className="mt-2 text-sm leading-relaxed text-ivory-muted">Conçoit le site, mène la recherche documentaire et présente Dar Chouafa.</p></div>
              <div className="relative z-10 mt-5 flex items-center gap-2 border-t border-white/10 pt-3 text-[9px] uppercase tracking-[0.13em] text-gold-light"><Search size={13}/> Création & documentation · Chapitre 03</div>
            </motion.article>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <motion.article initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.46 }} className="flex min-h-[126px] items-center gap-4 rounded-[1.35rem] border border-ink/7 bg-white/45 p-4 dark:border-white/8 dark:bg-white/[0.025] sm:p-5">
              <span className="font-serif text-3xl italic text-warm-dark/65 dark:text-gold-light/65">02</span><div className="min-w-0 flex-1"><p className="text-[9px] uppercase tracking-[0.15em] text-warm-dark dark:text-gold-light">Présentateur</p><h3 className="font-serif text-xl text-ink dark:text-ivory">Yahya Riyaf</h3><p className="text-xs leading-relaxed text-ink-muted dark:text-ivory-muted">Sidi Mohammed et sa famille</p></div><BookOpen size={16} className="shrink-0 text-warm-dark dark:text-gold-light"/>
            </motion.article>
            <motion.article initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.54 }} className="flex min-h-[126px] items-center gap-4 rounded-[1.35rem] border border-ink/7 bg-white/45 p-4 dark:border-white/8 dark:bg-white/[0.025] sm:p-5">
              <span className="font-serif text-3xl italic text-warm-dark/65 dark:text-gold-light/65">04</span><div className="min-w-0 flex-1"><p className="text-[9px] uppercase tracking-[0.15em] text-warm-dark dark:text-gold-light">Présentateur</p><h3 className="font-serif text-xl text-ink dark:text-ivory">Lgharib</h3><p className="text-xs leading-relaxed text-ink-muted dark:text-ivory-muted">Les liens et les récits rapportés</p></div><BookOpen size={16} className="shrink-0 text-warm-dark dark:text-gold-light"/>
            </motion.article>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62 }} className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] uppercase tracking-[0.15em] text-ink-faint dark:text-ivory-faint">La littérature maghrébine · Ahmed Sefrioui</p>
            <button disabled={!canEnter} onClick={enter} className={`group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 ${canEnter ? 'bg-ink text-cream hover:bg-ink-light dark:bg-ivory dark:text-obsidian dark:hover:bg-ivory-muted' : 'cursor-not-allowed bg-ink/30 text-cream/60 dark:bg-ivory/30 dark:text-obsidian/60'}`}>Entrer sur le site <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5 dark:bg-black/10"><ArrowRight size={14}/></span></button>
          </motion.div>
        </section>
      </div>
    </div>
  </motion.div>}</AnimatePresence>;
}
