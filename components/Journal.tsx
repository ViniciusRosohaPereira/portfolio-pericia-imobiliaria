/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useEffect, useState } from 'react';
import { BOOKS } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://entrelinhasvrp.wordpress.com/feed/');
        const data = await response.json();
        if (data.status === 'ok') {
          setArticles(data.items.slice(0, 10));
        }
      } catch (error) {
        console.error('Error fetching RSS:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRSS();
  }, []);

  return (
    <section id="journal" className="bg-[#F5F2EB] py-32 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Books Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-[#D6D1C7]">
            <div>
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">Produção Intelectual</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26]">Meus Livros</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {BOOKS.map((book) => (
              <div key={book.id} className="flex flex-col gap-8 bg-white/30 p-8 rounded-2xl border border-[#D6D1C7] hover:shadow-xl transition-all group">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-serif text-[#2C2A26] mb-4">{book.title}</h3>
                    <p className="text-[#5D5A53] font-light leading-relaxed mb-8 text-justify">{book.description}</p>
                  </div>
                  <a 
                    href={book.amazonUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-[#2C2A26] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-all border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] text-center animate-pulse-neon"
                  >
                    Comprar na Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-[#D6D1C7]">
            <div>
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">Escritor & Artigos</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26]">Blog</h2>
            </div>
            <div className="md:max-w-md mt-8 md:mt-0">
              <p className="text-sm text-[#5D5A53] font-light leading-relaxed italic text-justify">
                "Gosto de produzir conteúdos que unem a técnica pericial à reflexão acadêmica, explorando temas como segurança cibernética, direito digital e as transformações do mercado imobiliário sob a ótica da inovação."
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2C2A26]"></div>
            </div>
          ) : (
            <div className="relative h-[650px] overflow-hidden group/marquee">
              <div className="flex flex-col animate-marquee-vertical pause-on-hover">
                {[...articles, ...articles, ...articles].map((article, index) => (
                  <div key={index} className="w-full mb-6 group flex flex-col md:flex-row gap-6 text-left bg-white/30 p-5 rounded-xl border border-[#D6D1C7]/50 hover:border-emerald-500/40 transition-all hover:bg-white/50 shadow-sm hover:shadow-md">
                    <div className="w-full md:w-40 h-28 overflow-hidden rounded-lg bg-[#EBE7DE] flex-shrink-0">
                      <img 
                        src={article.thumbnail || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=webp&fit=crop&q=75&w=800"} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">
                        {new Date(article.pubDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                      </span>
                      <h3 className="text-base font-serif text-[#2C2A26] mb-2 leading-tight line-clamp-1">{article.title}</h3>
                      <p className="text-[#5D5A53] text-[11px] font-light leading-relaxed mb-3 line-clamp-2 text-justify" dangerouslySetInnerHTML={{ __html: article.description.replace(/<[^>]*>?/gm, '').substring(0, 120) + '...' }}></p>
                      <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-auto text-[10px] font-bold uppercase tracking-widest text-[#2C2A26] hover:text-emerald-600 transition-colors flex items-center gap-2"
                      >
                        Ler no Blog
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F5F2EB] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#F5F2EB] to-transparent z-10 pointer-events-none"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Journal;
