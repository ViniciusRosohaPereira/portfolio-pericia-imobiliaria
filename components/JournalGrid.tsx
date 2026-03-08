import React, { useState, useEffect, useRef, useCallback } from 'react';
import { JournalArticle } from '../types';
import { fetchWordPressPosts } from '../services/wordpressService';

interface JournalGridProps {
    onArticleClick: (article: JournalArticle) => void;
}

const JournalGrid: React.FC<JournalGridProps> = ({ onArticleClick }) => {
    // Array mestre (Buffer em memória da API)
    const [allArticles, setAllArticles] = useState<JournalArticle[]>([]);
    // Array renderizado na UI (Visível)
    const [visibleArticles, setVisibleArticles] = useState<JournalArticle[]>([]);
    const [page, setPage] = useState(1);

    // Estados de rede e progresso
    const [initialLoading, setInitialLoading] = useState(true);
    const [fetchingMore, setFetchingMore] = useState(false); // API requests
    const [scrollingMore, setScrollingMore] = useState(false); // UI render blocks
    const [hasMoreAPI, setHasMoreAPI] = useState(true);
    const [error, setError] = useState(false);

    // Refs for Auto-scroll
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isInteracting, setIsInteracting] = useState(false);
    const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const observer = useRef<IntersectionObserver | null>(null);

    // Identifica o lote adequado para o layout atual preservando harmonia da grid
    const getBatchConfig = () => {
        if (typeof window === 'undefined') return { initial: 6, step: 2 };
        const w = window.innerWidth;
        if (w < 768) return { initial: 4, step: 2 }; // Mobile: 1 coluna
        return { initial: 6, step: 2 }; // Tablet/Desktop: 2 colunas
    };

    // 1. Carga Inicial do Buffer Completo
    useEffect(() => {
        const fetchInitial = async () => {
            try {
                // Carrega preventivamente os 20 primeiros posts para usar a CPU/render sem travar a rede constantemente
                const posts = await fetchWordPressPosts(1, 20);
                setAllArticles(posts);
                const { initial } = getBatchConfig();
                setVisibleArticles(posts.slice(0, initial));
                setHasMoreAPI(posts.length === 20);
            } catch (err) {
                console.error(err);
                setError(true);
                setHasMoreAPI(false);
            } finally {
                setInitialLoading(false);
            }
        };
        fetchInitial();
    }, []);

    // Auto-Scroll Logic
    useEffect(() => {
        let animationFrameId: number;
        let lastTimestamp: number;

        const autoScroll = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const deltaTime = timestamp - lastTimestamp;

            // Only scroll if not hovered, not interacting, and container exists
            if (!isHovered && !isInteracting && scrollContainerRef.current) {
                const container = scrollContainerRef.current;

                // Check if we reach the extreme right
                const isAtEnd = container.scrollWidth - container.scrollLeft <= container.clientWidth + 2;

                if (!isAtEnd) {
                    // Scroll horizontally approx 30px per second -> 0.045px per ms
                    container.scrollLeft += 0.045 * deltaTime;
                }
            }

            lastTimestamp = timestamp;
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isHovered, isInteracting]);


    const handleUserInteraction = () => {
        setIsInteracting(true);
        if (interactionTimeoutRef.current) {
            clearTimeout(interactionTimeoutRef.current);
        }
        interactionTimeoutRef.current = setTimeout(() => {
            setIsInteracting(false);
        }, 2000); // Resume 2s after last interaction
    };


    // 2. Lógica Mestre de Progressão de Leitura Diante do Scroll
    const loadNextBatch = useCallback(async () => {
        if (scrollingMore || fetchingMore || initialLoading) return;

        const currentCount = visibleArticles.length;
        const totalFetched = allArticles.length;
        const { step } = getBatchConfig();

        if (currentCount < totalFetched) {
            // Transfere o buffer que já temos para a tela num lote
            setScrollingMore(true);
            setTimeout(() => { // Animação fake pra transição não espasmar a UI
                const nextCount = Math.min(currentCount + step, totalFetched);
                setVisibleArticles(allArticles.slice(0, nextCount));
                setScrollingMore(false);
            }, 600);
        } else if (hasMoreAPI) {
            // Buffer esvaziou: Vamos puxar o próximo pacotão da API
            setFetchingMore(true);
            try {
                const nextPage = page + 1;
                const newPosts = await fetchWordPressPosts(nextPage, 20);

                if (newPosts.length === 0) {
                    setHasMoreAPI(false);
                } else {
                    const merged = [...allArticles, ...newPosts];
                    // Clean duplicate IDs para blindagem
                    const uniqueIds = new Set();
                    const cleanMerged = merged.filter(p => {
                        if (uniqueIds.has(p.id)) return false;
                        uniqueIds.add(p.id);
                        return true;
                    });

                    setAllArticles(cleanMerged);
                    setPage(nextPage);
                    const nextCount = Math.min(currentCount + step, cleanMerged.length);
                    setVisibleArticles(cleanMerged.slice(0, nextCount));
                    setHasMoreAPI(newPosts.length === 20); // Se devolveu algo < 20, chegou no post 0 oficial
                }
            } catch (err) {
                console.error(err);
                setHasMoreAPI(false);
            } finally {
                setFetchingMore(false);
            }
        }
    }, [visibleArticles.length, allArticles, page, hasMoreAPI, fetchingMore, scrollingMore, initialLoading]);

    // 3. Sensor de Sentinel via IO para intersecção exata
    const lastElementRef = useCallback((node: HTMLDivElement | null) => {
        if (initialLoading || fetchingMore || scrollingMore) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            // Offset sutil (-10px/threshold) antecipa o despache contínuo sem que o usuário espere bater 100% no fundão
            if (entries[0].isIntersecting && (hasMoreAPI || visibleArticles.length < allArticles.length)) {
                loadNextBatch();
            }
        }, { rootMargin: '300px', threshold: 0.1 });

        if (node) observer.current.observe(node);
    }, [initialLoading, fetchingMore, scrollingMore, hasMoreAPI, visibleArticles.length, allArticles.length, loadNextBatch]);


    // Define se esgotou todos os carregáveis para tela
    const hasReachedEnd = !hasMoreAPI && visibleArticles.length === allArticles.length && allArticles.length > 0;

    return (
        <section id="articles" className="py-24 md:py-32 bg-[#F5F2EB] border-t border-[#D6D1C7]/30 overflow-hidden">
            <div className="max-w-[1800px] mx-auto flex flex-col items-center px-6 md:px-12">
                <div className="flex flex-col items-center text-center mb-16 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-2 border-b border-emerald-500 pb-2">Artigos Técnicos</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2C2A26] leading-tight">Artigos e Análises</h2>
                    <p className="max-w-2xl text-[#5D5A53] font-light text-lg">
                        Textos publicados no blog Entre Linhas, com reflexões sobre direito, tecnologia, poder, economia e sociedade.
                    </p>
                </div>

                {initialLoading ? (
                    <div className="w-full flex justify-center py-20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-emerald-700 animate-bounce"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-700 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-700 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full w-screen relative -ml-6 md:-ml-12 pl-6 md:pl-12">
                        {/* Feed Container Horizontal */}
                        <div
                            ref={scrollContainerRef}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onScroll={handleUserInteraction}
                            onTouchStart={handleUserInteraction}
                            onTouchMove={handleUserInteraction}
                            onWheel={handleUserInteraction}
                            className="flex overflow-x-auto overflow-y-hidden gap-6 lg:gap-10 transition-all duration-700 pb-16 pt-6 custom-scrollbar scroll-smooth"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
                            }}
                        >
                            {visibleArticles.map((article, index) => {
                                const isLastElement = visibleArticles.length === index + 1;
                                return (
                                    <div
                                        key={article.id}
                                        ref={isLastElement ? lastElementRef : null}
                                        onClick={() => {
                                            if (article.url) window.open(article.url, "_blank");
                                            else onArticleClick(article);
                                        }}
                                        className="w-[280px] md:w-[380px] shrink-0 group cursor-pointer flex flex-col items-center border border-[#D6D1C7]/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white animate-fade-in-up"
                                    >
                                        <div className="w-full relative aspect-[4/3] md:aspect-video overflow-hidden bg-[#2C2A26]">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-[1500ms] group-hover:scale-105 group-hover:grayscale-0 pointer-events-none"
                                            />
                                        </div>

                                        <div className="p-6 md:p-8 w-full flex flex-col flex-1 bg-white">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">
                                                {article.date}
                                            </span>
                                            <h3 className="text-xl font-serif text-[#2C2A26] mb-3 leading-normal group-hover:text-emerald-700 transition-colors line-clamp-3">
                                                {article.title}
                                            </h3>
                                            <p className="text-[#5D5A53] text-[13px] font-light text-justify leading-relaxed mb-8 flex-1 line-clamp-4">
                                                {article.excerpt}
                                            </p>

                                            <span className="self-start text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C2A26] border-b border-[#2C2A26] pb-1 opacity-60 group-hover:opacity-100 group-hover:border-emerald-700 transition-all">
                                                Ler Artigo
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Loader Discreto no fim do Feed Horizontal */}
                            {(scrollingMore || fetchingMore) && !initialLoading && (
                                <div className="flex h-[400px] w-[100px] shrink-0 items-center justify-center fade-in">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#A8A29E] animate-pulse"></div>
                                        <div className="w-2 h-2 rounded-full bg-[#A8A29E] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 rounded-full bg-[#A8A29E] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            )}

                            {/* Fim da lista no eixo horizontal */}
                            {hasReachedEnd && (
                                <div className="flex h-[400px] shrink-0 items-center justify-center fade-in px-8">
                                    <div className="border-l border-[#D6D1C7]/50 pl-8 flex flex-col justify-center h-full">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A8A29E]">Fim da lista</span>
                                        <p className="text-[#5D5A53] font-serif text-base italic mt-4 max-w-[150px]">
                                            Você chegou ao fim dos artigos.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent; /* Pista invisível */
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(214, 209, 199, 0.4);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(214, 209, 199, 0.8);
                }
            `}</style>
        </section>
    );
};

export default JournalGrid;
