import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Github, Twitter, Linkedin, Leaf, Warehouse, Radio, Sprout, Info, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navLinks = [
    { name: 'Hub', path: '/', icon: <Leaf size={16} /> },
    { name: 'The Workshop', path: '/apps', icon: <Warehouse size={16} /> },
    { name: 'The Parlor', path: '/podcast', icon: <Radio size={16} /> },
    { name: 'The Greenhouse', path: '/insights', icon: <Sprout size={16} /> },
    { name: 'The Architect', path: '/about', icon: <Info size={16} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-brand-950/90 backdrop-blur-xl border-b border-brand-100 dark:border-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-12 h-12 rounded-full vibe-gradient flex items-center justify-center text-white font-bold transform group-hover:rotate-12 transition-all shadow-xl shadow-brand-500/30 ring-4 ring-brand-50 dark:ring-brand-900">
                  <Leaf size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight text-brand-950 dark:text-white leading-none">
                    Vibe<span className="vibe-text-gradient">Kit</span>
                  </span>
                  <span className="text-[10px] font-bold text-brand-500 dark:text-brand-400 uppercase tracking-widest mt-1">Growth Collective</span>
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center space-x-2 ${
                    location.pathname === link.path
                      ? 'bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 shadow-inner'
                      : 'text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900'
                  }`}
                >
                  <span className={location.pathname === link.path ? 'text-brand-500' : ''}>{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="w-px h-6 bg-brand-100 dark:bg-brand-800 mx-4"></div>
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-full bg-brand-50 dark:bg-brand-900 text-brand-700 dark:text-brand-300 hover:scale-110 transition-transform border border-brand-100 dark:border-brand-800"
              >
                {darkMode ? <Sun size={18} className="text-haven-amber" /> : <Moon size={18} />}
              </button>
            </nav>

            <div className="lg:hidden flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2.5 rounded-full bg-brand-50 dark:bg-brand-900 text-brand-600">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-brand-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-brand-950 border-b border-brand-100 dark:border-brand-900 p-4 space-y-2 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-4 px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                  location.pathname === link.path
                    ? 'bg-brand-50 dark:bg-brand-900 text-brand-600 dark:text-brand-300'
                    : 'text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-800'
                }`}
              >
                <span className="text-brand-500">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-brand-50 dark:bg-brand-950 border-t border-brand-100 dark:border-brand-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full vibe-gradient flex items-center justify-center text-white"><Leaf size={16} /></div>
                <span className="text-xl font-extrabold text-brand-950 dark:text-white">Vibe<span className="text-brand-500">Kit</span></span>
              </Link>
              <p className="text-brand-600 dark:text-brand-400 max-w-sm text-lg leading-relaxed mb-8">
                Cultivating a regenerative ecosystem for AI-native builders and community architects.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 flex items-center justify-center text-brand-500 hover:bg-brand-500 hover:text-white transition-all shadow-sm"><Twitter size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 flex items-center justify-center text-brand-500 hover:bg-brand-500 hover:text-white transition-all shadow-sm"><Github size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 flex items-center justify-center text-brand-500 hover:bg-brand-500 hover:text-white transition-all shadow-sm"><Linkedin size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-950 dark:text-white mb-6">Exploration</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-brand-600 dark:text-brand-400 hover:text-brand-500 font-bold transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-950 dark:text-white mb-6">The Bloom Newsletter</h4>
              <p className="text-brand-600 dark:text-brand-400 text-sm mb-4">Weekly seeds of wisdom delivered to your inbox.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="builder@vibekit.com" 
                  className="bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-l-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button className="bg-brand-500 hover:bg-brand-600 text-white px-4 rounded-r-xl transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-brand-100 dark:border-brand-900 text-center">
            <p className="text-brand-400 text-sm font-bold uppercase tracking-widest">© {new Date().getFullYear()} VibeKit Community Haven • All Growth is Local</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;