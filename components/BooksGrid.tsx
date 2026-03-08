import React from 'react';
import { BOOKS } from '../constants';

const BooksGrid: React.FC = () => {
    return (
        <section id="publications" className="py-24 md:py-32 px-6 md:px-12 bg-[#2C2A26] border-t border-[#D6D1C7]/10">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col items-center text-center mb-16 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500/80 mb-2">Publicações</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#F5F2EB]">Produção Intelectual</h2>
                    <p className="max-w-xl text-[#A8A29E] font-light text-lg">
                        Obras publicadas voltadas à análise jurídica, institucional e as interfaces contínuas da tecnologia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
                    {BOOKS.map(book => (
                        <div key={book.id} className="group flex flex-col items-center bg-[#EBE7DE] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 relative border border-[#D6D1C7]/30">
                            <div className="w-full relative aspect-[3/4] overflow-hidden bg-[#2C2A26] p-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2C2A26]/80 z-10"></div>
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-[70%] lg:w-[60%] h-auto shadow-2xl transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-4 z-20 book-cover"
                                />
                            </div>

                            <div className="p-8 w-full flex flex-col h-full bg-[#EBE7DE] z-20">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700 mb-3 block">Livro Autorizado</span>
                                <h3 className="text-xl font-serif mb-4 text-[#2C2A26] leading-snug">{book.title}</h3>
                                <p className="text-[#5D5A53] text-sm font-light mb-6 flex-grow">{book.description}</p>

                                <div className="mt-auto border-t border-[#D6D1C7] pt-6 flex justify-between items-center">
                                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#5D5A53]">Vinícius Rosoha Pereira</span>

                                    <a
                                        href={book.amazonUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2C2A26] hover:text-emerald-700 transition-colors"
                                    >
                                        Adquirir Obra
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BooksGrid;
