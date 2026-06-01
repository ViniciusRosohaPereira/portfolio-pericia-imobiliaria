import { Service, Property } from './types';

/* ============================================================
   IDENTIDADE DE MARCA
   ============================================================ */
export const BRAND_NAME = 'Vinícius Rosoha Pereira - Perícias e Consultoria Imobiliária';
export const PERSON_NAME = 'Vinícius Rosoha Pereira';
export const BRAND_SUBTITLE = 'Perícias e Consultoria Imobiliária';
export const TAGLINE = 'Avaliação com rigor técnico. Imóveis com visão de mercado.';
export const HANDLE = '@rosoha.peritorecorretor';

export const CONTACT = {
  city: 'São Mateus do Sul, PR',
  email: 'viniciusrosohapereira@creci.org.br',
  phoneLabel: '+55 (42) 98255-385',
  whatsapp: 'https://wa.me/554298255385',
  facebook: 'https://www.facebook.com/rosoha.peritorecorretor/',
  creci: 'CRECI PR nº F56113',
  cnai: 'CNAI nº 56570',
};

/* ============================================================
   SERVIÇOS
   ============================================================ */
export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Avaliação Imobiliária',
    tagline: 'Avaliações imobiliárias com precisão tecnológica e fundamentação técnica.',
    description: 'Avaliação de imóveis urbanos e rurais com rigor técnico e estatístico.',
    longDescription: 'Utilizo o Método Comparativo Direto de Dados de Mercado, com tratamento estatístico por regressão linear, conforme a ABNT NBR 14653. Ideal para garantias bancárias, partilhas de bens e decisões de investimento.',
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
    tagline: 'Modelos avançados para que o valor apurado reflita a realidade dinâmica do mercado.',
    description: 'Atuação como perito assistente ou perito do juízo em processos com questões imobiliárias.',
    longDescription: 'Elaboração de laudos periciais e pareceres técnicos fundamentados para suporte em ações renovatórias, revisionais de aluguel, desapropriações e inventários, com clareza nas conclusões.',
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
    tagline: 'Atendimento e análises customizadas para cada necessidade imobiliária.',
    description: 'Análise específica da sua necessidade imobiliária, com suporte técnico personalizado.',
    longDescription: 'Cada caso é único. Ofereço suporte técnico e assessoria imobiliária personalizada para garantir que sua decisão seja baseada em dados reais e segurança patrimonial.',
    category: 'Consultoria',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Consultoria Técnica', 'Análise de Viabilidade', 'Georreferenciamento']
  }
];

/* ============================================================
   IMÓVEIS — nenhum imóvel cadastrado no momento.
   ============================================================ */
export const PROPERTIES: Property[] = [];
