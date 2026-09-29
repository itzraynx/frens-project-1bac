export default function Footer() {
  return <footer className="relative z-10 border-t border-ink/5 dark:border-white/8 px-4 sm:px-6 py-8">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
      <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-serif text-sm text-ink dark:text-ivory">La Boîte à merveilles</a>
      <p className="text-[10px] uppercase tracking-[0.14em] text-ink-faint dark:text-ivory-faint">Littérature maghrébine · Projet scolaire</p>
      <p className="text-[10px] text-ink-faint dark:text-ivory-faint">Ahmed Sefrioui · 1954</p>
    </div>
  </footer>;
}
