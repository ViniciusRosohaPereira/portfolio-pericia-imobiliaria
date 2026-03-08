/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá, sou o assistente virtual do Vinícius Rosoha Pereira. Como posso ajudar você hoje com avaliações imobiliárias ou perícias?', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const systemInstruction = "Você é o assistente virtual de Vinícius Rosoha Pereira, Perito Avaliador e Assessor Técnico Imobiliário. Vinícius é Bacharel em Direito, Avaliador Juramentado e possui diversas certificações em IA e Cibersegurança. Responda de forma profissional e técnica, focando em serviços de avaliação imobiliária, perícia judicial e tecnologia aplicada ao setor.";
      const responseText = await sendMessageToGemini(history, userMsg.text, systemInstruction);

      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      // Error handled in service
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-[#F5F2EB] rounded-none shadow-2xl shadow-[#2C2A26]/10 w-[90vw] sm:w-[380px] h-[550px] mb-6 flex flex-col overflow-hidden border border-[#D6D1C7] animate-slide-up-fade">
          {/* Header */}
          <div className="bg-[#EBE7DE] p-5 border-b border-[#D6D1C7] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#2C2A26] rounded-full animate-pulse"></div>
              <span className="font-serif italic text-[#2C2A26] text-lg">Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#A8A29E] hover:text-[#2C2A26] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#F5F2EB]" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] p-5 text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-[#2C2A26] text-[#F5F2EB]'
                      : 'bg-white border border-[#EBE7DE] text-[#5D5A53] shadow-sm'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#EBE7DE] p-5 flex gap-1 items-center shadow-sm">
                  <div className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-[#F5F2EB] border-t border-[#D6D1C7]">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Qual sua dúvida?"
                className="flex-1 bg-white border border-[#D6D1C7] focus:border-[#2C2A26] px-4 py-3 text-sm outline-none transition-colors placeholder-[#A8A29E] text-[#2C2A26]"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-[#2C2A26] text-[#F5F2EB] px-4 hover:bg-[#444] transition-colors disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group bg-[#2C2A26] text-emerald-400 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-500 z-50 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] animate-pulse-neon overflow-hidden"
      >
        <div className="flex items-center px-4">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out whitespace-nowrap font-sans font-bold uppercase tracking-widest text-xs">
                Converse Comigo
              </span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default Assistant;