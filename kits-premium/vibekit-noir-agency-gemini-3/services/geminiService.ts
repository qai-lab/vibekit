
import { GoogleGenAI } from "@google/genai";
import { APPS, PODCASTS, NEWS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `
You are the personal AI concierge for VIBEKIT, a high-end, world-class creative agency.
Your goal is to assist clients and visitors with inquiries regarding our work, philosophy, and media presence.

Agency Intelligence:
- Portfolio: ${JSON.stringify(APPS)}
- Media/Podcasts: ${JSON.stringify(PODCASTS)}
- Intelligence Feed: ${JSON.stringify(NEWS)}

Operational Protocol:
1. RESPONSE STYLE: AUTHORITATIVE, MINIMALIST, INTELLIGENT.
2. ALL RESPONSES MUST BE IN ALL CAPS TO MATCH THE AGENCY BRANDING.
3. BE CONCISE. DO NOT WASTE WORDS.
4. HIGHLIGHT THE INTERSECTION OF DESIGN AND TECHNOLOGY.
5. USE MARKDOWN FOR STRUCTURE IF NECESSARY.
`;

export async function getPortfolioResponse(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.5,
      },
    });
    return response.text?.toUpperCase() || "ERROR: RESPONSE GENERATION FAILED.";
  } catch (error) {
    console.error("CONCIERGE OFFLINE:", error);
    return "SYSTEM OFFLINE. CONTACT SUPPORT@VIBEKIT.AGENCY.";
  }
}
