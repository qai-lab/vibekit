
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode; current: boolean }> = ({ to, children, current }) => (
  <Link 
    to={to} 
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      current ? 'text-indigo-400 bg-indigo-900/20' : 'text-slate-400 hover:text-white hover:bg-slate-800'
    }`}
  >
    {children}
  </Link>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white">V</div>
                <span className="font-bold text-xl tracking-tight hidden sm:block">Vibe<span className="text-indigo-500">Kit</span></span>
              </Link>
              <div className="hidden md:flex space-x-2">
                <NavLink to="/apps" current={location.pathname === '/apps'}>Apps</NavLink>
                <NavLink to="/podcasts" current={location.pathname === '/podcasts'}>Podcast</NavLink>
                <NavLink to="/insights" current={location.pathname === '/insights'}>AI Insights</NavLink>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <Link to="/about" className="text-sm text-slate-400 hover:text-white">About</Link>
              <Link to="/contact" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-semibold transition-all">Get in Touch</Link>
            </div>

            <button 
              className="md:hidden text-slate-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-2">
            <Link to="/apps" className="block px-3 py-2 text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Apps</Link>
            <Link to="/podcasts" className="block px-3 py-2 text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Podcast</Link>
            <Link to="/insights" className="block px-3 py-2 text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>AI Insights</Link>
            <Link to="/about" className="block px-3 py-2 text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>About</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="font-bold text-xl tracking-tight">Vibe<span className="text-indigo-500">Kit</span></span>
              <p className="mt-4 text-slate-400 max-w-sm">
                A showcase for the era of intent-driven software development. 
                Built with precision, launched with vibe.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Content</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/apps" className="hover:text-indigo-400 transition-colors">Showcase Apps</Link></li>
                <li><Link to="/podcasts" className="hover:text-indigo-400 transition-colors">Listen to Episodes</Link></li>
                <li><Link to="/insights" className="hover:text-indigo-400 transition-colors">Read AI Insights</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">© 2024 VibeKit. No cookies, just vibes.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
              <a href="#" className="text-slate-400 hover:text-white"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
