
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Apps } from './pages/Apps';
import { AppDetail } from './pages/AppDetail';
import { PodcastIndex } from './pages/PodcastIndex';
import { PodcastDetail } from './pages/PodcastDetail';
import { InsightsIndex } from './pages/InsightsIndex';
import { InsightDetail } from './pages/InsightDetail';
import { About } from './pages/About';
import { Join } from './pages/Join';
import { Legal } from './pages/Legal';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:id" element={<AppDetail />} />
          <Route path="/podcasts" element={<PodcastIndex />} />
          <Route path="/podcasts/:id" element={<PodcastDetail />} />
          <Route path="/insights" element={<InsightsIndex />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/legal/:type" element={<Legal />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
