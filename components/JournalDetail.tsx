import React, { useEffect } from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
    article: JournalArticle;
    onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [article.id]);

    return (
        <div className="bg-[#F5F2EB] min-h-screen pt-32 pb-24 px-6 md:px-12 animate-fade-in-up">
            <div className="max-w-[1000px] mx-auto">

                <button
                    onClick={onBack}
                    className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] hover:text-[#2C2A26] transition-colors mb-16 group"
                >
                    <svg className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Voltar para Artigos
                </button>

                <header className="mb-16">
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-6">{article.date}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2A26] leading-tight mb-10">
                        {article.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-[#5D5A53] italic text-justify">
                        {article.excerpt}
                    </p>
                </header>

                <div className="w-full aspect-video rounded-2xl overflow-hidden mb-16 shadow-xl border border-[#D6D1C7]">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale transition-all duration-[3000ms] hover:scale-105 hover:grayscale-0"
                    />
                </div>

                <div className="prose prose-stone prose-lg max-w-none text-justify font-light text-[#2C2A26] leading-relaxed mb-16 space-y-8">
                    {article.content}
                </div>

                <div className="border-t border-[#D6D1C7] pt-12 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-4">
                        Compartilhe nas Redes
                    </span>
                    <div className="flex justify-center gap-8">
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="text-[#A8A29E] hover:text-[#2C2A26] transition-colors">LinkedIn</a>
                        <a href={`whatsapp://send?text=${article.title}`} target="_blank" rel="noopener noreferrer" className="text-[#A8A29E] hover:text-[#2C2A26] transition-colors">WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalDetail;
