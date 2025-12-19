
import React from 'react';

const Header: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-8 py-10">
      <nav className="max-w-[1800px] mx-auto flex items-end justify-between">
        {/* Typographic Logo */}
        <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#af9164] mb-1 group-hover:translate-x-1 transition-transform">
            Museum
          </span>
          <div className="text-4xl font-serif italic text-[#fdfcf0] tracking-tighter leading-none flex items-baseline gap-2">
            Vibe<span className="font-light not-italic text-2xl tracking-[0.2em] opacity-50">KIT</span>
          </div>
        </div>
        
        {/* Minimal Navigation */}
        <ul className="hidden md:flex items-center gap-16 text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-500">
          <li className="text-[#fdfcf0] cursor-pointer gold-border py-1">
            <button onClick={() => scrollTo('showcase')}>I. Collection</button>
          </li>
          <li className="hover:text-[#fdfcf0] transition-colors cursor-pointer gold-border py-1">
            <button onClick={() => scrollTo('hub')}>II. Journal</button>
          </li>
          <li className="hover:text-[#fdfcf0] transition-colors cursor-pointer gold-border py-1">
            <button onClick={() => scrollTo('manifesto')}>III. Manifesto</button>
          </li>
          <li className="hover:text-[#fdfcf0] transition-colors cursor-pointer gold-border py-1">
            <button onClick={() => scrollTo('inquiry')}>IV. Contact</button>
          </li>
        </ul>
        
        {/* Curated Action */}
        <button 
          onClick={() => scrollTo('inquiry')}
          className="relative overflow-hidden group border border-[#fdfcf0]/10 px-10 py-3 rounded-sm transition-all hover:border-[#af9164]/40"
        >
          <span className="relative z-10 text-[9px] font-bold uppercase tracking-[0.3em] text-[#fdfcf0]">
            Inquire
          </span>
          <div className="absolute inset-0 bg-[#fdfcf0] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="absolute inset-0 z-20 flex items-center justify-center text-[9px] font-bold uppercase tracking-[0.3em] text-[#080808] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Inquire
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
