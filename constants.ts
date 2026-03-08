import React from 'react';
import { Service, JournalArticle, Book } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Avaliação Imobiliária',
    tagline: 'Realizo avaliações e perícias imobiliárias com precisão tecnológica e fundamentação técnica.',
    description: 'Avaliação de imóveis urbanos e rurais com rigor técnico e estatístico.',
    longDescription: 'Utilizamos o Método Comparativo Direto de Dados de Mercado, com tratamento estatístico por regressão linear, conforme as normas da ABNT NBR 14653. Ideal para garantias bancárias, partilhas de bens e decisões de investimento.',
    category: 'Avaliação',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Normas ABNT', 'Regressão Linear', 'Laudo Digital']
  },
  {
    id: 's2',
    name: 'Perícia Judicial',
    tagline: 'Utilizo modelos de elaboração avançada para garantir que o valor apurado reflita a realidade dinâmica do mercado.',
    description: 'Atuação como perito assistente ou perito do juízo em processos que envolvam questões imobiliárias.',
    longDescription: 'Elaboração de laudos periciais e pareceres técnicos fundamentados para suporte em ações renovatórias, revisionais de aluguel, desapropriações e inventários com clareza nas conclusões.',
    category: 'Perícia',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Assistência Técnica', 'Quesitos Periciais', 'Suporte Jurídico']
  },
  {
    id: 's3',
    name: 'Consultoria Especializada',
    tagline: 'Atendimento e análises customizadas.',
    description: 'Entre em contato para uma análise específica da sua necessidade imobiliária.',
    longDescription: 'Cada caso é único. Oferecemos suporte técnico e assessoria imobiliária personalizada para garantir que sua decisão seja baseada em dados reais e segurança patrimonial.',
    category: 'Consultoria',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Consultoria Técnica', 'Análise de Viabilidade', 'Georreferenciamento']
  }
];

export const BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'A Sombra do Crime',
    image: 'https://m.media-amazon.com/images/I/71u-fP-vA+L._SY466_.jpg',
    amazonUrl: 'https://www.amazon.com.br/dp/B0FH4MHCXW/',
    description: 'Uma exploração profunda sobre os mistérios e as sombras do sistema criminal.'
  },
  {
    id: 'b2',
    title: 'Insuficiência da Legislação Brasileira no Combate ao Ransomware',
    image: 'https://m.media-amazon.com/images/I/71z+6P+QY+L._SY466_.jpg',
    amazonUrl: 'https://www.amazon.com.br/dp/B0DTD4DP29/',
    description: 'Análise crítica sobre os desafios jurídicos impostos pelos ataques cibernéticos modernos.'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: 'O Papel do Perito Avaliador em Disputas Societárias',
    date: '10 de Janeiro, 2026',
    excerpt: 'Análise metodológica da valoração de ativos imobiliários em processos de dissolução de sociedade e apuração de haveres.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement('p', { className: 'text-justify' }, 'Em disputas societárias, a avaliação patrimonial imobiliária reveste-se de complexidade ímpar e demanda técnica apurada, pois os ativos físicos frequentemente correspondem a parcela significativa do valor do negócio jurídico. A imperícia na delimitação do valor de mercado pode incorrer em grave distorção contábil, prejudicando os haveres dos sócios retirantes ou remanescentes.')
  },
  {
    id: 2,
    title: 'A Aplicação da Inferência Estatística na Engenharia de Avaliações',
    date: '22 de Novembro, 2025',
    excerpt: 'Um olhar técnico sobre o uso de regressão linear múltipla na determinação de valor pelo Método Comparativo Direto de Dados de Mercado.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement('p', { className: 'text-justify' }, 'A inferência estatística mitigou fortemente a subjetividade na engenharia de avaliações. Conforme estabelece o corpo diretivo da Norma Brasileira (ABNT NBR 14.653), deve-se perseguir sempre o maior rigor científico no saneamento e modelagem da amostra paradigma, a fim de expurgar dados discrepantes, estabelecer correlações significativas entre as variáveis independentes e a variável dependente.')
  },
  {
    id: 3,
    title: 'Crise de Confiança e Segurança em Contratos Inteligentes (Smart Contracts)',
    date: '05 de Setembro, 2025',
    excerpt: 'Desafios jurídicos e tecnológicos na instrumentalização imobiliária no ambiente Web3.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=1000',
    content: React.createElement('p', { className: 'text-justify' }, 'No ecossistema imobiliário contemporâneo, alavancado por transações automatizadas (Smart Contracts), o arcabouço normativo se depara com o desafio da irreversibilidade dos códigos executados. A segurança imposta pelo modelo descentralizado esbarra, por vezes, em vulnerabilidades a nível de código-fonte que, se exploradas, acarretam danos patrimoniais irreparáveis ante ao anonimato dos vetores de ameaça.')
  }
];

export const BRAND_NAME = 'Vinícius Rosoha Pereira';
export const PRIMARY_COLOR = 'stone-900';
export const ACCENT_COLOR = 'stone-500';