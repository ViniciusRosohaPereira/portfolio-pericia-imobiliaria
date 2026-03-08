import { JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../constants'; // Para fallback inicial

export const fetchWordPressPosts = async (page: number = 1, perPage: number = 6): Promise<JournalArticle[]> => {
    const WP_URL = "https://public-api.wordpress.com/rest/v1.1/sites/entrelinhasvrp.wordpress.com/posts";

    try {
        const response = await fetch(`${WP_URL}?number=${perPage}&page=${page}&fields=ID,title,date,excerpt,featured_image,URL,content`);

        if (!response.ok) {
            throw new Error(`WordPress API falhou com status ${response.status}`);
        }

        const data = await response.json();

        if (data.posts && Array.isArray(data.posts)) {
            return data.posts.map((post: any) => ({
                id: post.ID,
                title: decodeHtmlEntities(post.title),
                date: new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
                excerpt: cleanHtmlTags(post.excerpt) || 'Leia o artigo completo...',
                image: post.featured_image || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000',
                url: post.URL,
                content: post.content
            }));
        }

        return [];

    } catch (error) {
        console.error("Falha ao buscar posts do WP:", error);

        // Se falhar a API nativa e não for a primeira página, não retorna nada pra não bugar o scroll.
        if (page > 1) return [];

        return JOURNAL_ARTICLES;
    }
};

const cleanHtmlTags = (str: string): string => {
    if (!str) return '';
    return str.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 150) + "...";
};

const decodeHtmlEntities = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
};
