/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle, Book } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Avaliação Imobiliária',
    tagline: 'Realizo avaliações e perícias imobiliárias com precisão tecnológica e fundamentação técnica.',
    description: 'Avaliação de imóveis urbanos e rurais com rigor técnico e estatístico.',
    longDescription: 'Utilizamos o Método Comparativo Direto de Dados de Mercado, com tratamento estatístico por regressão linear, conforme as normas da ABNT NBR 14653. Ideal para garantias bancárias, partilhas de bens e decisões de investimento.',
    price: 0,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Normas ABNT', 'Regressão Linear', 'Laudo Digital']
  },
  {
    id: 'p2',
    name: 'Perícia Judicial',
    tagline: 'Utilizo modelos de regressão linear e análise espacial para garantir que o valor apurado reflita a realidade dinâmica do mercado, minimizando subjetividades.',
    description: 'Atuação como perito assistente ou perito do juízo em processos que envolvam valores imobiliários.',
    longDescription: 'Elaboração de laudos periciais e pareceres técnicos fundamentados para suporte em ações renovatórias, revisionais de aluguel, desapropriações e inventários.',
    price: 0,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Assistência Técnica', 'Quesitos Periciais', 'Suporte Jurídico']
  },
  {
    id: 'p3',
    name: 'Solicite Orçamento',
    tagline: 'Atendimento personalizado.',
    description: 'Entre em contato para uma análise específica da sua necessidade imobiliária.',
    longDescription: 'Cada caso é único. Oferecemos suporte técnico e assessoria imobiliária personalizada para garantir que sua decisão seja baseada em dados reais e segurança patrimonial.',
    price: 0,
    category: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Consultoria Técnica', 'Análise de Viabilidade', 'Segurança Jurídica']
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
        title: "O Impacto da Tecnologia 5G no Valor dos Imóveis",
        date: "Maio 15, 2025",
        excerpt: "Como a conectividade ultra-rápida está redefinindo o que consideramos 'localização premium'.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "A localização sempre foi o pilar do valor imobiliário. No entanto, a infraestrutura digital está começando a rivalizar com a infraestrutura física. Imóveis em zonas de alta conectividade estão apresentando valorizações superiores."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "Com o aumento do trabalho remoto, a capacidade de processamento de dados em casa tornou-se um item de primeira necessidade, influenciando diretamente as amostras de mercado que utilizamos em nossas avaliações."
            )
        )
    },
    {
        id: 2,
        title: "A Importância da NBR 14653",
        date: "Abril 10, 2025",
        excerpt: "Por que a conformidade normativa é a única garantia de um laudo incontestável.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "Seguir as normas da ABNT não é apenas uma formalidade, é a segurança jurídica do cliente. Um laudo fora das normas é facilmente derrubado em juízo ou rejeitado por instituições financeiras."
            )
        )
    }
];

export const BRAND_NAME = 'AvaliaTech';
export const PRIMARY_COLOR = 'stone-900'; 
export const ACCENT_COLOR = 'stone-500';