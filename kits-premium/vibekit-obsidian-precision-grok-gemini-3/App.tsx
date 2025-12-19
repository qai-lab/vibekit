
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apps from './pages/Apps';
import AppDetail from './pages/AppDetail';
import Podcast from './pages/Podcast';
import AIInsights from './pages/AIInsights';
import About from './pages/About';
import { APP_PROJECTS } from './constants';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const [path, id] = hash.split('/');
        setCurrentPath(path || 'home');
        setSelectedAppId(id || null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string, id?: string) => {
    setCurrentPath(path);
    setSelectedAppId(id || null);
    window.location.hash = id ? `${path}/${id}` : path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestAccess = () => {
    setIsAccessModalOpen(true);
  };

  const renderContent = () => {
    switch (currentPath) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'apps':
        return <Apps onNavigate={navigate} />;
      case 'app-detail':
        const app = APP_PROJECTS.find(a => a.id === selectedAppId);
        return app ? <AppDetail app={app} onBack={() => navigate('apps')} /> : <Apps onNavigate={navigate} />;
      case 'podcast':
        return <Podcast />;
      case 'insights':
        return <AIInsights />;
      case 'about':
        return <About />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] selection:bg-cyan-400 selection:text-black">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />

      {/* Access Modal */}
      {isAccessModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsAccessModalOpen(false)}></div>
          <div className="relative w-full max-w-xl bg-[#020617] border border-white/10 p-12 lg:p-20 fade-in">
            <h2 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.8em] mb-12">System Authentication</h2>
            <h3 className="text-4xl font-bold text-white mb-8 tracking-tighter uppercase">Request Alpha Entry.</h3>
            <p className="text-slate-500 mb-12 font-light leading-relaxed">
              Entry into VibeKit Laboratories is currently restricted to approved architects. Submit your coordinates for consideration.
            </p>
            <div className="space-y-6">
              <input 
                type="email" 
                placeholder="EMAIL_COORDINATES..." 
                className="w-full bg-white/5 border border-white/10 p-6 text-[10px] mono text-white focus:outline-none focus:border-cyan-400 transition-colors uppercase"
              />
              <button 
                onClick={() => {
                  alert("Protocol initiated. We will reach out via neural link.");
                  setIsAccessModalOpen(false);
                }}
                className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] hover:bg-cyan-400 transition-all"
              >
                Transmit Request
              </button>
            </div>
            <button 
              onClick={() => setIsAccessModalOpen(false)}
              className="absolute top-8 right-8 text-slate-500 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* Global Access Trigger (Optional integration with Navbar if passed as prop, but here we can rely on state) */}
      <button 
        onClick={handleRequestAccess}
        className="fixed bottom-10 right-10 z-[40] w-14 h-14 bg-cyan-400 text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all md:hidden"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
      </button>
    </div>
  );
};

export default App;
