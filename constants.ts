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

export const JOURNAL_ARTICLES: JournalArticle[] = [];

export const BRAND_NAME = 'Vinícius Rosoha Pereira';
export const PRIMARY_COLOR = 'stone-900';
export const ACCENT_COLOR = 'stone-500';