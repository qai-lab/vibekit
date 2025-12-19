
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Github, Twitter, Linkedin, Podcast, MessageSquare, Zap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
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
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-brand-950/80 backdrop-blur-md border-b border-brand-200 dark:border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 rounded-lg vibe-gradient flex items-center justify-center text-white font-bold transform group-hover:rotate-12 transition-transform">
                  V
                </div>
                <span className="text-xl font-extrabold tracking-tight text-brand-900 dark:text-white">
                  Vibe<span className="vibe-text-gradient">Kit</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    location.pathname === link.path
                      ? 'text-blue-500'
                      : 'text-brand-600 dark:text-brand-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-brand-100 dark:hover:bg-brand-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-brand-100 dark:hover:bg-brand-800 transition-colors"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-brand-600 dark:text-brand-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-brand-950 border-b border-brand-200 dark:border-brand-800 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-brand-700 dark:text-brand-300 hover:text-blue-500"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-50 dark:bg-brand-950 border-t border-brand-200 dark:border-brand-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 rounded vibe-gradient flex items-center justify-center text-white text-xs font-bold">V</div>
                <span className="text-lg font-bold">VibeKit</span>
              </Link>
              <p className="text-brand-600 dark:text-brand-400 mb-6 max-w-sm">
                Exploring the intersection of taste, intuition, and autonomous agents. Building the future one vibe at a time.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="text-brand-400 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-brand-400 hover:text-blue-500 transition-colors"><Github size={20} /></a>
                <a href="#" className="text-brand-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-brand-900 dark:text-white uppercase tracking-wider mb-4">Explore</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-brand-600 dark:text-brand-400 hover:text-blue-500 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-brand-900 dark:text-white uppercase tracking-wider mb-4">Subscribe</h3>
              <p className="text-brand-600 dark:text-brand-400 text-sm mb-4">Get the latest insights delivered weekly.</p>
              <form className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="bg-white dark:bg-brand-900 border border-brand-200 dark:border-brand-800 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-brand-200 dark:border-brand-900 text-center">
            <p className="text-brand-400 text-xs">
              © {new Date().getFullYear()} VibeKit Showcase. Built with taste and Gemini API.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
