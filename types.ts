export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Avaliação' | 'Perícia' | 'Consultoria';
  imageUrl: string;
  gallery?: string[];
  features: string[];
}

export type PropertyStatus = 'Venda' | 'Locação';
export type PropertyType =
  | 'Casa'
  | 'Apartamento'
  | 'Terreno'
  | 'Rural'
  | 'Comercial';

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  location: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  price: string;
  image: string;
  featured?: boolean;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState =
  | { type: 'home' }
  | { type: 'service'; service: Service };
