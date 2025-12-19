
import React, { useState, useRef, useEffect } from 'react';
import { getPortfolioResponse } from '../services/geminiService';
import { Message } from '../types';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "SYSTEMS_ACTIVE: WELCOME TO VIBEKIT NOIR CONCIERGE. INITIATE INQUIRY SEQUENCE." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim().toUpperCase();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const response = await getPortfolioResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', content: response.toUpperCase() }]);
    setIsTyping(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-12 right-12 w-16 h-16 bg-white text-black shadow-2xl flex items-center justify-center transition-all duration-700 z-[100] ${isOpen ? 'rotate-90 bg-[#FF0033] text-white' : 'hover:scale-110 active:scale-95'}`}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <span className="font-bold text-xl tracking-tighter">V.N</span>
        )}
      </button>

      <div className={`fixed bottom-32 right-12 w-[calc(100vw-64px)] max-w-[500px] h-[75vh] bg-black border border-zinc-800 shadow-[0_60px_120px_rgba(0,0,0,0.95)] z-[100] flex flex-col transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="p-10 border-b border-zinc-900 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-2.5 h-2.5 bg-[#FF0033] rounded-full animate-pulse shadow-[0_0_15px_#FF0033]"></div>
            <div>
              <h3 className="font-bold text-[10px] tracking-[0.5em] uppercase text-zinc-300">CORE_INTEL_V.3.1</h3>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-12 space-y-12 bg-[#030303] custom-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] text-[13px] font-bold tracking-widest leading-relaxed ${msg.role === 'user' ? 'text-[#FF0033] text-right italic' : 'text-zinc-500'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
               <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-zinc-800 animate-pulse">PROCESSING_INTEL...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-10 border-t border-zinc-900 bg-black flex gap-6">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="TRANSMIT MESSAGE..."
            className="flex-1 text-[11px] bg-transparent border-b border-zinc-800 focus:border-[#FF0033] outline-none py-4 text-white placeholder-zinc-800 font-bold tracking-[0.3em] transition-all"
          />
          <button type="submit" className="text-[#FF0033] hover:text-white hover:translate-x-2 transition-all">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
        </form>
      </div>
    </>
  );
};
