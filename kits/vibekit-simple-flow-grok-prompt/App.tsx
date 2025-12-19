
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apps from './pages/Apps';
import AppDetail from './pages/AppDetail';
import Podcast from './pages/Podcast';
import AIInsights from './pages/AIInsights';
import { APP_PROJECTS } from './constants';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

  // Simple "routing" effect to handle the browser hash if needed
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
        return (
          <div className="max-w-3xl mx-auto px-4 py-32 text-center fade-in">
            <h1 className="text-4xl font-bold mb-8">About VibeKit</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              "VibeKit" isn't just about writing logic; it's about setting an intention. 
              In an age of cold, efficient AI, I believe we need digital spaces that feel 
              intentional, soft, and human. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a developer and designer exploring how generative models can be used 
              as partners in creation, not just tools for automation.
            </p>
            <div className="mt-16 flex justify-center gap-6">
              <a href="mailto:hello@vibekit.ai" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold">Say Hello</a>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
