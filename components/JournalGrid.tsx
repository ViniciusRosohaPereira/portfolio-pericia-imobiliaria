import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalGridProps {
    onArticleClick: (article: JournalArticle) => void;
}

const JournalGrid: React.FC<JournalGridProps> = ({ onArticleClick }) => {
    return (
        <section id="articles" className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F2EB] border-t border-[#D6D1C7]/30">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col items-center text-center mb-20 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-2 border-b border-emerald-500 pb-2">Artigos Técnicos</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2C2A26] leading-tight">Artigos e Análises</h2>
                    <p className="max-w-2xl text-[#5D5A53] font-light text-lg">
                        Perspectivas sobre a interseção entre economia, tecnologia e o arcabouço normativo imobiliário.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                    {JOURNAL_ARTICLES.map(article => (
                        <div
                            key={article.id}
                            onClick={() => onArticleClick(article)}
                            className="group cursor-pointer flex flex-col items-center border border-[#D6D1C7]/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                        >
                            <div className="w-full relative aspect-[4/3] overflow-hidden bg-[#2C2A26]">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-[1500ms] group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>

                            <div className="p-8 w-full flex flex-col flex-1">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">
                                    {article.date}
                                </span>
                                <h3 className="text-xl font-serif text-[#2C2A26] mb-4 leading-normal group-hover:text-emerald-700 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-[#5D5A53] text-[13px] font-light italic text-justify leading-relaxed mb-8 flex-1">
                                    {article.excerpt}
                                </p>

                                <span className="self-start text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C2A26] border-b border-[#2C2A26] pb-1 opacity-60 group-hover:opacity-100 group-hover:border-emerald-700 transition-all">
                                    Ler Artigo
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JournalGrid;
