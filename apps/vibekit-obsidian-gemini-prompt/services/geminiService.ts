
import { GoogleGenAI } from "@google/genai";
import { APPS, PODCASTS, NEWS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `
You are the personal AI assistant for VibeKit, a world-class senior frontend engineer.
Your goal is to answer questions about the developer's work based on the provided data.

Portfolio Data:
- Apps: ${JSON.stringify(APPS)}
- Podcasts: ${JSON.stringify(PODCASTS)}
- News: ${JSON.stringify(NEWS)}

Guidelines:
1. Be professional, concise, and enthusiastic.
2. If asked about a project, highlight the tech stack and the "story" behind it.
3. If asked about podcasts, mention the guest and duration.
4. If you don't know the answer based on the data, politely say you don't have that information.
5. Use markdown for formatting.
`;

export async function getPortfolioResponse(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently unavailable. Please check back later.";
  }
}
