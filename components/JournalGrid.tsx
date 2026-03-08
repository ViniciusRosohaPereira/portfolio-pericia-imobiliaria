import React, { useState, useEffect, useRef, useCallback } from 'react';
import { JournalArticle } from '../types';
import { fetchWordPressPosts } from '../services/wordpressService';

interface JournalGridProps {
    onArticleClick: (article: JournalArticle) => void;
}

const JournalGrid: React.FC<JournalGridProps> = ({ onArticleClick }) => {
    const [articles, setArticles] = useState<JournalArticle[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);

    const loadPosts = async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        setError(false);
        try {
            const newPosts = await fetchWordPressPosts(page);
            if (newPosts.length === 0) {
                setHasMore(false);
            } else {
                setArticles(prev => {
                    const existingIds = new Set(prev.map(p => p.id));
                    const uniqueNew = newPosts.filter(p => !existingIds.has(p.id));
                    return [...prev, ...uniqueNew];
                });
                setPage(p => p + 1);
            }
        } catch (err) {
            console.error("Erro ao carregar os artigos:", err);
            setError(true);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const lastElementRef = useCallback((node: HTMLDivElement | null) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                loadPosts();
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    return (
        <section id="articles" className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F2EB] border-t border-[#D6D1C7]/30">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col items-center text-center mb-20 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-2 border-b border-emerald-500 pb-2">Artigos Técnicos</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2C2A26] leading-tight">Artigos e Análises</h2>
                    <p className="max-w-2xl text-[#5D5A53] font-light text-lg">
                        Textos publicados no blog Entre Linhas, com reflexões sobre direito, tecnologia, poder, economia e sociedade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                    {articles.map((article, index) => {
                        const isLastElement = articles.length === index + 1;
                        return (
                            <div
                                key={article.id}
                                ref={isLastElement ? lastElementRef : null}
                                onClick={() => {
                                    if (article.url) {
                                        window.open(article.url, "_blank");
                                    } else {
                                        onArticleClick(article);
                                    }
                                }}
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
                        );
                    })}
                </div>

                {loading && (
                    <div className="w-full flex justify-center py-10">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-700 animate-bounce"></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-700 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-700 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                )}

                {error && articles.length === 0 && (
                    <div className="w-full text-center py-12 flex flex-col items-center gap-6">
                        <p className="text-[#5D5A53] font-light text-lg italic max-w-lg">
                            Os artigos não puderam ser carregados no momento. Acesse diretamente o blog.
                        </p>
                        <a
                            href="https://entrelinhasvrp.wordpress.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-[#EBE7DE] text-[#2C2A26] border border-[#D6D1C7] rounded-full text-xs font-bold tracking-widest uppercase hover:bg-emerald-700 hover:text-white transition-colors"
                        >
                            Siga para Entre Linhas
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default JournalGrid;
