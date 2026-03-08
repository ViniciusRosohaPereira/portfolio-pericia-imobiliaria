/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { SERVICES } from '../constants';

const getSystemInstruction = (customInstruction?: string) => {
  const productContext = SERVICES.map(p =>
    `- ${p.name}: ${p.description}. Características: ${p.features.join(', ')}`
  ).join('\n');

  const baseInstruction = `Você é o assistente virtual da AvaliaTech, o portfólio profissional de Vinícius Rosoha Pereira.
  Vinícius é Perito Avaliador, Assessor Técnico Imobiliário, Bacharel em Direito e Avaliador Juramentado.
  Seu tom é profissional, técnico, preciso e prestativo.
  
  Serviços oferecidos:
  ${productContext}
  
  Responda a perguntas sobre os serviços de avaliação, perícia e a trajetória do Vinícius.
  Mantenha as respostas concisas (geralmente abaixo de 3 frases).
  Se perguntado sobre algo fora do escopo de atuação do Vinícius, sugira que entrem em contato diretamente para uma análise personalizada.`;

  return customInstruction ? `${baseInstruction}\n\n${customInstruction}` : baseInstruction;
};

export const sendMessageToGemini = async (history: { role: string, text: string }[], newMessage: string, customInstruction?: string): Promise<string> => {
  try {
    let apiKey: string | undefined;

    // FIXME: SECURITY RISK - Using AI tokens directly in the client application exposes them to users.
    // This service call MUST be moved to a backend proxy or serverless function.
    // To ensure NO exposure occurs, we do not read from import.meta.env in the client.

    // apiKey = import.meta.env.VITE_GEMINI_API_KEY; // <-- MOVED TO BACKEND

    // Force missing API key for now to prevent any frontend execution leakage.
    // You should create an API route (e.g., using Vercel Serverless Functions) to handle this securely.

    if (!apiKey) {
      return "Desculpe, não consigo me conectar ao servidor no momento. (Chave de API ausente)";
    }

    const ai = new GoogleGenAI({ apiKey });

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(customInstruction),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble reaching our archives at the moment.";
  }
};