
import React, { useState } from 'react';
import { Newspaper, ChevronRight, RefreshCw, Globe, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { news as staticNews } from '../data';

interface LiveNewsItem {
  title: string;
  summary: string;
  url: string;
  sourceName: string;
}

const AITrends: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [liveNews, setLiveNews] = useState<LiveNewsItem[]>([]);

  const fetchLiveNews = async () => {
    setIsLoading(true);
    setIsLive(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "What are the top 5 most significant AI news stories and breakthroughs from the last 24 hours? Provide a concise summary for each.",
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      
      const formattedNews: LiveNewsItem[] = chunks
        .filter(chunk => chunk.web)
        .slice(0, 5)
        .map((chunk) => ({
          title: chunk.web?.title || "AI Breakthrough discovered",
          summary: `Global intelligence update indexed as a major movement.`,
          url: chunk.web?.uri || "#",
          sourceName: new URL(chunk.web?.uri || "https://web.com").hostname.replace('www.', '')
        }));

      setLiveNews(formattedNews);
    } catch (error) {
      console.error("Error fetching live news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="trends" className="max-w-screen-2xl mx-auto px-8 py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-20">
        <div className="flex items-center gap-6">
          <div className="p-5 border border-[#d4c3a1]/20 rounded-full relative">
            <Newspaper className="w-6 h-6 text-[#d4c3a1]" />
            {isLive && (
              <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4c3a1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d4c3a1]"></span>
              </span>
            )}
          </div>
          <div>
            <h2 className="text-4xl font-display flex items-center gap-4">
              Intelligence Pulse
            </h2>
            <p className="text-[#808080] text-sm uppercase tracking-[0.2em] mt-1">Live Global Retrieval</p>
          </div>
        </div>

        <button 
          onClick={fetchLiveNews}
          disabled={isLoading}
          className="flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-[#d4c3a1] text-white text-[10px] font-bold uppercase tracking-widest transition-all disabled:opacity-30"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          {isLoading ? "Synchronizing..." : "Initialize Search"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Feed */}
        <div className="lg:col-span-8 divide-y divide-white/5">
          {isLoading ? (
             <div className="space-y-12">
               {[1, 2, 3].map(i => (
                 <div key={i} className="py-8 animate-pulse">
                   <div className="w-24 h-4 bg-white/5 mb-4"></div>
                   <div className="w-full h-8 bg-white/5"></div>
                 </div>
               ))}
             </div>
          ) : (
            (isLive ? liveNews : staticNews).map((item, idx) => (
              <div key={idx} className="group py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-8 first:pt-0">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-4">
                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#d4c3a1]">
                      {isLive ? "Live Data" : (item as any).tag || "Archived"}
                    </span>
                    <span className="text-[8px] text-[#808080] uppercase tracking-widest">
                      Ref: {isLive ? (item as LiveNewsItem).sourceName : (item as any).source}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display group-hover:text-[#d4c3a1] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <a 
                  href={(item as any).url || (item as any).link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#d4c3a1] group-hover:text-black transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            ))
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          <div className="p-10 hairline-border bg-white/[0.01]">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4c3a1] mb-8">Newsletter</h4>
            <p className="text-[#808080] text-sm leading-relaxed mb-8 font-light">
              Receive curated intelligence on the convergence of code, culture, and synthetic reasoning.
            </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-xs focus:outline-none focus:border-[#d4c3a1] transition-colors placeholder:text-[#444] uppercase tracking-widest"
              />
              <button className="w-full py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#d4c3a1] transition-colors mt-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrends;
