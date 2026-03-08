import React from 'react';

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

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export interface Book {
  id: string;
  title: string;
  image: string;
  amazonUrl: string;
  description: string;
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
  | { type: 'service', service: Service }
  | { type: 'journal', article: JournalArticle };
