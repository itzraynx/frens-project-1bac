import { motion } from 'framer-motion';
import { ArrowUpRight, BookMarked, Check, CircleHelp, ExternalLink, Users } from 'lucide-react';
import { useState } from 'react';
import SectionNumber from './SectionNumber';

const sources = [
  { label: 'Bibliothèque nationale de France — édition numérisée', detail: 'Notice de l’ouvrage : auteur, langue française et publication en 1954', href: 'https://gallica.bnf.fr/ark:/12148/bpt6k33586252.texteImage' },
  { label: 'Bibliothèque de l’Union africaine — notice bibliographique', detail: 'Paris, Éditions du Seuil, 1954', href: 'https://library.au.int/la-bo%C3%AEte-merveilles-roman-3' },
  { label: 'AlloSchool — présentation de l’œuvre, 1er Bac', detail: 'Genre étudié, structure en 12 chapitres, narrateur et cadre de Fès', href: 'https://www.alloschool.com/element/126091' },
  { label: 'AlloSchool — personnages de La Boîte à merveilles', detail: 'Repères de cours sur les personnages et leurs relations', href: 'https://www.alloschool.com/element/126092' },
  { label: 'AlloSchool — événements des chapitres 1 à 3', detail: 'Épisodes de Dar Chouafa, du msid et du voisinage', href: 'https://www.alloschool.com/element/126093' },
  { label: 'AlloSchool — biographie d’Ahmed Sefrioui', detail: 'Repères biographiques et œuvres principales', href: 'https://www.alloschool.com/element/1532' },
  { label: 'Université Echahid Hamma Lakhdar — cours universitaire', detail: 'Histoire et enjeux de la littérature maghrébine d’expression française', href: 'https://archives.univ-eloued.dz/server/api/core/bitstreams/d736138e-e835-4ec9-8f60-c306b50be740/content' },
  { label: 'Université Sorbonne Nouvelle — littérature maghrébine', detail: 'Approche plurilingue : langues orales, écrites et diasporiques', href: 'https://www.sorbonne-nouvelle.fr/litterature-maghrebine-litterature-mondiale-925552.kjsp' },
];
const questions = [
  { q: 'Qui raconte principalement ses souvenirs dans le roman ?', options: ['Sidi Mohammed', 'Moulay Larbi', 'Le fqih'], answer: 0, why: 'Sidi Mohammed est le narrateur-personnage. Les guides de cours le présentent comme un enfant de six ans.' },
  { q: 'En quelle année La Boîte à merveilles a-t-elle été publiée ?', options: ['1949', '1954', '1962'], answer: 1, why: 'La notice bibliographique de la BnF date l’ouvrage de 1954.' },
  { q: 'Quel est le métier de Maâlem Abdeslam ?', options: ['Jardinier', 'Tisserand', 'Épicier'], answer: 1, why: 'Maâlem Abdeslam, le père de Sidi Mohammed, est tisserand.' },
];
const team = [
  { name: 'Mohamed Taha Ame', chapter: 'Présentateur principal · chapitre 01', initial: 'T' },
  { name: 'Yahya Riyaf', chapter: 'Présentateur · chapitre 02', initial: 'Y' },
  { name: 'Rayan Rchouki', chapter: 'Créateur du site · recherche · chapitre 03', initial: 'R' },
  { name: 'Lgharib', chapter: 'Présentateur · chapitre 04', initial: 'L' },
];

export default function ProjectEnd() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const answer = (qi: number, oi: number) => {
    if (answered.includes(qi)) return;
    if (questions[qi].answer === oi) setScore((s) => s + 1);
    setAnswered((old) => [...old, qi]);
    setSelected((old) => ({ ...old, [qi]: oi }));
  };
  const resetQuiz = () => { setSelected({}); setScore(0); setAnswered([]); };

  return <>
    <section id="quiz" className="section-pad relative">
      <SectionNumber number="05" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-10">
          <div className="eyebrow mb-6"><CircleHelp size={12} />Révision en direct</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink dark:text-ivory">Trois repères <span className="italic text-ink-light dark:text-ivory-muted">à retenir</span></h2>
          <p className="mt-4 text-base text-ink-muted dark:text-ivory-muted">Une courte vérification avec les faits essentiels du projet.</p>
        </motion.div>
        <div className="bezel-outer shadow-ambient-sm"><div className="bezel-inner p-6 sm:p-9">
          {questions.map((item, qi) => <div key={item.q} className={`${qi ? 'border-t border-ink/5 dark:border-white/8 pt-6 mt-6' : ''}`}>
            <p className="font-serif text-xl sm:text-2xl text-ink dark:text-ivory mb-4">0{qi + 1} <span className="text-ink-muted dark:text-ivory-muted">/</span> {item.q}</p>
            <div className="flex flex-wrap gap-2">{item.options.map((option, oi) => {
              const isCorrect = answered.includes(qi) && oi === item.answer;
              const isWrong = answered.includes(qi) && selected[qi] === oi && oi !== item.answer;
              return <button key={option} onClick={() => answer(qi, oi)} disabled={answered.includes(qi)} className={`rounded-full border px-4 py-2.5 text-sm transition-all ${isCorrect ? 'border-sage/40 bg-sage/10 text-ink dark:text-ivory' : isWrong ? 'border-crimson/30 bg-crimson/5 text-ink dark:text-ivory' : 'border-ink/8 dark:border-white/10 text-ink-muted dark:text-ivory-muted hover:border-warm/40 hover:text-ink dark:hover:text-ivory'} disabled:cursor-default`}>{option}{isCorrect && <Check size={13} className="inline ml-2"/>}</button>;
            })}</div>
            {answered.includes(qi) && <p className="mt-3 text-sm text-ink-muted dark:text-ivory-muted">{item.why}</p>}
          </div>)}
          {answered.length === questions.length && <div className="mt-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-warm/[0.06] border border-warm/10 px-5 py-4"><p className="text-base text-ink dark:text-ivory">Résultat : <strong>{score}/{questions.length}</strong> — merci d’avoir participé.</p><button onClick={resetQuiz} className="text-xs uppercase tracking-[0.14em] text-warm-dark dark:text-gold-light">Recommencer ↺</button></div>}
        </div></div>
      </div>
    </section>

    <section id="sources" className="section-pad pt-6 relative">
      <SectionNumber number="06" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-9"><div className="eyebrow mb-5"><BookMarked size={12}/>Sources documentaires</div><h2 className="font-serif text-4xl sm:text-5xl text-ink dark:text-ivory">Nos repères <span className="italic text-ink-light dark:text-ivory-muted">pour vérifier</span></h2><p className="mt-4 max-w-2xl mx-auto text-base text-ink-muted dark:text-ivory-muted">La notice de la BnF vérifie la publication; les ressources pédagogiques nous aident à organiser les personnages; les sources universitaires éclairent le cadre littéraire.</p></div>
        <div className="grid sm:grid-cols-2 gap-3">{sources.map((source, index) => <motion.a key={source.href} href={source.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }} className="bezel-outer group"><div className="bezel-inner p-5 sm:p-6 h-full flex items-start justify-between gap-4"><div><span className="text-[9px] uppercase tracking-[0.18em] text-warm-dark dark:text-gold-light">Source 0{index + 1}</span><h3 className="font-serif text-lg sm:text-xl text-ink dark:text-ivory mt-2 mb-2">{source.label}</h3><p className="text-sm text-ink-muted dark:text-ivory-muted leading-relaxed">{source.detail}</p></div><ExternalLink size={16} className="mt-1 shrink-0 text-warm-dark dark:text-gold-light group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/></div></motion.a>)}</div>
        <p className="mt-5 text-sm leading-relaxed text-ink-faint dark:text-ivory-faint">Pour les détails et l’orthographe finale des noms, l’exemplaire étudié en classe demeure la référence première. Les fiches de révision sont utilisées comme aides, et non comme substituts au roman.</p>
      </div>
    </section>

    <section id="credits" className="section-pad relative">
      <SectionNumber number="07" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10"><div className="eyebrow mb-5"><Users size={12}/>Les présentateurs</div><h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink dark:text-ivory">Un exposé <span className="italic text-ink-light dark:text-ivory-muted">à quatre voix</span></h2></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{team.map((person, index) => <motion.article key={person.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} className="bezel-outer shadow-ambient-sm"><div className="bezel-inner p-6 text-center"><div className="w-14 h-14 rounded-full border border-warm/20 bg-warm/[0.06] flex items-center justify-center mx-auto mb-4"><span className="font-serif italic text-2xl text-warm-dark dark:text-gold-light">{person.initial}</span></div><h3 className="font-serif text-xl sm:text-2xl text-ink dark:text-ivory mb-2">{person.name}</h3><p className="text-[10px] uppercase tracking-[0.14em] text-warm-dark dark:text-gold-light leading-relaxed">{person.chapter}</p></div></motion.article>)}</div>
        <div className="mt-12 text-center"><p className="font-serif italic text-xl sm:text-2xl text-ink-muted dark:text-ivory-muted">Merci pour votre attention.</p><a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/10 dark:border-white/10 px-5 py-2.5 text-sm uppercase tracking-[0.15em] text-ink-muted dark:text-ivory-muted hover:border-warm/40 transition-colors">Retour au début <ArrowUpRight size={14}/></a></div>
      </div>
    </section>
  </>;
}
