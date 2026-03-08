import React from 'react';

const Methodology: React.FC = () => {
    return (
        <section id="methodology" className="bg-[#EBE7DE] py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[70vh]">
                <div className="order-2 lg:order-1 relative h-[400px] lg:h-full min-h-[500px] overflow-hidden rounded-xl shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=webp&fit=crop&q=75&w=1200"
                        alt="Análise de Dados e Metodologia"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                    />
                </div>
                <div className="order-1 lg:order-2 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">Prática Normatizada</span>
                    <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">
                        Metodologia Científica <br className="hidden md:block" /> na Avaliação de Imóveis.
                    </h3>
                    <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8 text-justify">
                        Os trabalhos são desenvolvidos com base em critérios técnicos estritos, compatíveis com a avaliação imobiliária profissional conforme as diretrizes da ABNT.
                    </p>
                    <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 text-justify">
                        A prática envolve minuciosa análise comparativa de mercado, tratamento de dados qualificados, observação in loco das características do imóvel e exame de todos os fatores exógenos e endógenos que influenciam na efetiva formação do valor.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#D6D1C7]">
                        <div>
                            <h4 className="text-[#2C2A26] font-bold text-sm uppercase tracking-widest mb-3">Rigor Estatístico</h4>
                            <p className="text-[#5D5A53] text-sm font-light text-justify">Adoção de métodos quantitativos, com inferência estatística, quando apropriado, visando minorar subjetividades.</p>
                        </div>
                        <div>
                            <h4 className="text-[#2C2A26] font-bold text-sm uppercase tracking-widest mb-3">Isenção Pericial</h4>
                            <p className="text-[#5D5A53] text-sm font-light text-justify">Atuação pautada pela estrita imparcialidade enquanto Perito do Juízo, e contundência normativa como Assistente Técnico.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
