
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import PodcastSection from './components/PodcastSection';
import AITrends from './components/AITrends';
import Methodology from './components/Methodology';
import CognitiveLab from './components/CognitiveLab';
import InquirySection from './components/InquirySection';
import Footer from './components/Footer';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen relative selection:bg-[#d4c3a1] selection:text-black bg-[#050505]">
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div className="absolute top-[-10%] left-[-5%] w-[1000px] h-[1000px] bg-[#d4c3a1]/3 blur-[180px] rounded-full opacity-40"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        <ProjectGrid onProjectClick={setSelectedProject} />
        
        <div className="bg-[#030303]">
          <Methodology />
        </div>

        <CognitiveLab />
        
        <div className="bg-[#080808]">
          <PodcastSection />
          <AITrends />
        </div>

        <InquirySection />
      </main>

      <Footer />

      {/* Modal Overlay */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;
