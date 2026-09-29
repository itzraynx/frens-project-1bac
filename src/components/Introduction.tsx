import { motion } from 'framer-motion';
import { BookOpen, Feather, MapPin, CalendarDays, ScrollText } from 'lucide-react';
import SectionNumber from './SectionNumber';

const facts = [
  { label: '1915', title: 'Naissance à Fès', text: 'Ahmed Sefrioui est un écrivain marocain né dans la ville qu’il fera revivre dans plusieurs de ses récits.' },
  { label: '1954', title: 'Parution du roman', text: 'La Boîte à merveilles paraît en français chez les Éditions du Seuil.' },
  { label: '2004', title: 'Mort à Rabat', text: 'Sefrioui meurt en 2004. Il est souvent présenté comme l’un des pionniers du roman marocain d’expression française.' },
];

export default function Introduction() {
  return (
    <section id="introduction" className="section-pad relative">
      <SectionNumber number="01" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <div className="eyebrow mb-6"><span className="w-1 h-1 rounded-full bg-warm" />Chapitre 01 · Mohamed Taha Ame</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink dark:text-ivory leading-[1.05] tracking-tight">Définir la littérature <span className="italic text-ink-light dark:text-ivory-muted">maghrébine</span></h2>
          <p className="mt-5 text-base sm:text-lg text-ink-muted dark:text-ivory-muted max-w-3xl mx-auto leading-relaxed">Avant d’étudier les personnages, il faut préciser le sens du terme « littérature maghrébine » et situer l’œuvre dans son histoire.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="bezel-outer shadow-ambient mb-8">
          <div className="bezel-inner p-7 sm:p-10 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-5"><span className="w-9 h-9 rounded-full bg-warm/[0.08] border border-warm/15 flex items-center justify-center font-serif text-lg text-warm-dark dark:text-gold-light">T</span><p className="text-[10px] uppercase tracking-[0.22em] text-warm-dark dark:text-gold-light">Texte à présenter · Mohamed Taha Ame</p></div>
            <p className="font-serif text-xl sm:text-2xl md:text-[1.65rem] text-ink dark:text-ivory leading-[1.75]">« Bonjour à toutes et à tous. Aujourd’hui, nous allons vous parler de la littérature maghrébine, puis des personnages de <em>La Boîte à merveilles</em>, un roman d’Ahmed Sefrioui. Au sens large, la littérature maghrébine rassemble des œuvres liées aux cultures et aux sociétés du Maghreb. Elle est plurilingue : elle peut être orale ou écrite, en arabe, en tamazight, en français et dans d’autres langues. Il faut donc distinguer cette littérature dans son ensemble de la littérature maghrébine d’expression française, qui n’en est qu’une branche. Celle-ci se développe dans un contexte colonial, puis continue après les indépendances. Publié en 1954, le roman de Sefrioui nous conduit à Fès à travers les souvenirs de Sidi Mohammed. Nous allons maintenant découvrir sa famille, ses voisins et les autres personnages de son univers. »</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 mb-5">
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bezel-outer shadow-ambient-sm"><div className="bezel-inner p-7 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-5"><BookOpen size={20} className="text-warm-dark dark:text-gold-light"/><span className="text-[10px] uppercase tracking-[0.2em] text-warm-dark dark:text-gold-light">Sens large</span></div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink dark:text-ivory mb-4">Une littérature plurielle</h3>
            <p className="text-base sm:text-lg text-ink-muted dark:text-ivory-muted leading-[1.8]">La littérature maghrébine désigne un champ d’œuvres liées aux sociétés, aux histoires et aux cultures du Maghreb. Ce champ n’a pas une seule langue : il comprend des traditions orales et écrites, et des œuvres en arabe, en tamazight, en français ainsi que dans des langues de la diaspora.</p>
            <p className="mt-4 text-sm text-ink-faint dark:text-ivory-faint leading-relaxed">Le mot « Maghreb » peut couvrir un espace plus ou moins large selon les études. Dans notre sujet scolaire, nous nous concentrons sur l’espace littéraire du Maroc, de l’Algérie et de la Tunisie.</p>
          </div></motion.article>
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bezel-outer shadow-ambient-sm"><div className="bezel-inner p-7 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-5"><Feather size={20} className="text-warm-dark dark:text-gold-light"/><span className="text-[10px] uppercase tracking-[0.2em] text-warm-dark dark:text-gold-light">Sens précis pour l’œuvre</span></div>
            <h3 className="font-serif text-2xl sm:text-3xl text-ink dark:text-ivory mb-4">L’expression française</h3>
            <p className="text-base sm:text-lg text-ink-muted dark:text-ivory-muted leading-[1.8]">La littérature maghrébine d’expression française est la branche écrite en français par des auteurs du Maghreb. Elle se développe dans le contexte historique de la colonisation et continue d’évoluer après les indépendances. Le choix du français n’efface pas les cultures locales : les écrivains y expriment leurs propres expériences et réalités.</p>
            <p className="mt-4 text-sm text-ink-faint dark:text-ivory-faint leading-relaxed">Repère chronologique : des cours situent l’essor de cette production autour du milieu du XXᵉ siècle. Cette date concerne la branche francophone, pas l’ensemble des littératures du Maghreb.</p>
          </div></motion.article>
        </div>

        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bezel-outer shadow-ambient-sm mb-8"><div className="bezel-inner p-7 sm:p-9 md:p-10 grid md:grid-cols-[1fr_0.8fr] gap-8 items-center">
          <div><div className="flex items-center gap-3 mb-4"><MapPin size={19} className="text-warm-dark dark:text-gold-light"/><span className="text-[10px] uppercase tracking-[0.2em] text-warm-dark dark:text-gold-light">Le lien avec notre œuvre</span></div><h3 className="font-serif text-2xl sm:text-3xl text-ink dark:text-ivory mb-4"><em>La Boîte à merveilles</em> dans ce paysage</h3><p className="text-base sm:text-lg text-ink-muted dark:text-ivory-muted leading-[1.8]">Ahmed Sefrioui raconte la vie quotidienne de Fès à travers le souvenir d’un enfant. Le roman met en scène la famille, les voisins, l’école coranique, les coutumes et les inquiétudes du quotidien. L’œuvre est couramment étudiée comme un roman autobiographique, mais son narrateur-personnage, Sidi Mohammed, n’est pas l’auteur sous son vrai nom.</p></div>
          <div className="rounded-2xl border border-warm/15 bg-warm/[0.045] p-6"><p className="text-[10px] uppercase tracking-[0.19em] text-warm-dark dark:text-gold-light mb-4">Fiche de l’œuvre</p><div className="space-y-3 text-sm sm:text-base"><p className="flex justify-between gap-4 border-b border-ink/5 dark:border-white/8 pb-2"><span className="text-ink-muted dark:text-ivory-muted">Auteur</span><strong className="text-ink dark:text-ivory">Ahmed Sefrioui</strong></p><p className="flex justify-between gap-4 border-b border-ink/5 dark:border-white/8 pb-2"><span className="text-ink-muted dark:text-ivory-muted">Lieu</span><strong className="text-ink dark:text-ivory">Fès, médina</strong></p><p className="flex justify-between gap-4 border-b border-ink/5 dark:border-white/8 pb-2"><span className="text-ink-muted dark:text-ivory-muted">Parution</span><strong className="text-ink dark:text-ivory">1954 · Le Seuil</strong></p><p className="flex justify-between gap-4"><span className="text-ink-muted dark:text-ivory-muted">Structure</span><strong className="text-ink dark:text-ivory">12 chapitres</strong></p></div></div>
        </div></motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {facts.map((item, index) => <motion.article key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bezel-outer"><div className="bezel-inner p-6 sm:p-7 h-full"><div className="flex items-center gap-3 mb-4"><CalendarDays size={17} className="text-warm-dark dark:text-gold-light"/><span className="font-serif text-3xl text-ink-faint/60 dark:text-ivory-faint/60">{item.label}</span></div><h4 className="font-serif text-xl text-ink dark:text-ivory mb-2">{item.title}</h4><p className="text-base text-ink-muted dark:text-ivory-muted leading-relaxed">{item.text}</p></div></motion.article>)}
        </div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 bezel-outer shadow-ambient-sm"><div className="bezel-inner p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-5"><ScrollText size={18} className="text-warm-dark dark:text-gold-light"/><h3 className="font-serif text-2xl text-ink dark:text-ivory">Le cadre du récit</h3></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {[['6 ans', 'Âge de Sidi Mohammed dans les souvenirs'], ['12', 'Chapitres dans l’édition étudiée'], ['Presque 1 an', 'Durée approximative du récit'], ['3 saisons', 'Hiver, printemps et été']].map(([title, detail]) => <div key={title} className="rounded-2xl border border-ink/6 dark:border-white/8 p-4"><p className="font-serif text-2xl text-ink dark:text-ivory mb-1">{title}</p><p className="text-sm text-ink-muted dark:text-ivory-muted leading-relaxed">{detail}</p></div>)}
          </div>
          <p className="text-base text-ink-muted dark:text-ivory-muted leading-relaxed"><strong className="text-ink dark:text-ivory">Lieux à situer au tableau :</strong> Dar Chouafa, le msid (école coranique), le bain maure, la maison de Lalla Aïcha et les souks de la médina. Les ressources scolaires situent les souvenirs dans le Fès des années 1920.</p>
        </div></motion.div>
        <p className="mt-5 text-sm leading-relaxed text-ink-faint dark:text-ivory-faint">Sources pour cette partie : Bibliothèque nationale de France (édition de 1954); Université Sorbonne Nouvelle (corpus plurilingue); Université Echahid Hamma Lakhdar et ressources pédagogiques AlloSchool (contexte et repères de lecture).</p>
      </div>
    </section>
  );
}
