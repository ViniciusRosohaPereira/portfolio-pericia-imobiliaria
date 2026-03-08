/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = (customInstruction?: string) => {
  const productContext = PRODUCTS.map(p => 
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

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string, customInstruction?: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      // process is likely not defined in this environment
      console.warn("Accessing process.env failed");
    }
    
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