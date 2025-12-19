import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Apps from './pages/Apps';
import AppDetails from './pages/AppDetails';
import Podcast from './pages/Podcast';
import EpisodeDetails from './pages/EpisodeDetails';
import Insights from './pages/Insights';
import InsightDetails from './pages/InsightDetails';
import About from './pages/About';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:id" element={<AppDetails />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/podcast/:id" element={<EpisodeDetails />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<InsightDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;