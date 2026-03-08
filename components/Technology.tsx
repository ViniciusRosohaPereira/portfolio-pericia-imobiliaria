import React from 'react';

const Technology: React.FC = () => {
    return (
        <section id="technology" className="bg-[#2C2A26] pt-16 pb-32 px-6 md:px-12 text-[#F5F2EB]">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[70vh]">

                <div className="flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500/80 mb-6">Integração Digital</span>
                    <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">
                        Tecnologia Aplicada <br className="hidden md:block" /> ao Laudo Pericial.
                    </h3>
                    <p className="text-lg md:text-xl text-[#A8A29E] font-light leading-relaxed mb-8 text-justify">
                        A tecnologia não substitui o juízo pericial, mas atua como instrumento central no apoio à precisão técnica, no enriquecimento dos pareceres e na confiabilidade do Laudo Avaliatório.
                    </p>
                    <p className="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 text-justify">
                        Os trabalhos exploram soluções contemporâneas focadas na organização lógica das informações, mitigando falhas materiais, ampliando a rastreabilidade analítica e promovendo relatórios interativos e objetivos para otimizar os tempos do processo judicial ou tratativas privadas.
                    </p>

                    <ul className="space-y-6 max-w-lg pt-8 border-t border-emerald-500/20">
                        <li className="flex items-start gap-4 text-[#EBE7DE] font-light text-sm">
                            <svg className="w-5 h-5 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                            <span>Gestão avançada de Amostras Paradigma: Estruturação dos dados e extração georreferenciada.</span>
                        </li>
                        <li className="flex items-start gap-4 text-[#EBE7DE] font-light text-sm">
                            <svg className="w-5 h-5 mt-0.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>Criptografia, rastreabilidade documental e conformidade estrita à Cibersegurança e LGPD nos fluxos de envio.</span>
                        </li>
                    </ul>
                </div>

                <div className="relative h-[400px] lg:h-full min-h-[500px] overflow-hidden rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.1)] group">
                    <div className="absolute inset-0 bg-emerald-500/10 z-10 mix-blend-overlay group-hover:bg-transparent transition-all duration-1000"></div>
                    <img
                        src="https://images.unsplash.com/photo-1512446816042-444d641267d4?fm=webp&fit=crop&q=75&w=1200"
                        alt="Integração Tecnológica e Jurídica"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-[0.7] grayscale group-hover:grayscale-0"
                    />
                </div>

            </div>
        </section>
    );
};

export default Technology;
