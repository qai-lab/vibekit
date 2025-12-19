
import { GoogleGenAI } from "@google/genai";
import { NewsInsight } from "../types";

export const getAiNewsInsights = async (): Promise<NewsInsight[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate 5 trending AI news items specifically related to 'Vibe Coding', GenAI startups, and new open source models. Include titles, short punchy summaries, and categories. Focus on current sentiment from AI leaders like Andrej Karpathy and Sam Altman.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
      },
    });

    // Extract text and parse as JSON
    const text = response.text || "[]";
    try {
      const data = JSON.parse(text);
      if (Array.isArray(data)) return data;
      if (data.news) return data.news;
      return [];
    } catch (e) {
      console.error("Failed to parse Gemini news response", e);
      return [];
    }
  } catch (error) {
    console.error("Gemini News Error:", error);
    // Fallback static news if API fails
    return [
      {
        title: "Vibe Coding Takes Over Silicon Valley",
        summary: "Developers are increasingly shifting from manual syntax to 'prompting' entire feature sets in one go.",
        source: "The Verge",
        url: "#",
        category: "Trend"
      },
      {
        title: "Gemini 3 Pro Sets New Benchmark",
        summary: "New reasoning capabilities allow for complex codebase refactoring with 99% accuracy.",
        source: "Google AI Blog",
        url: "#",
        category: "Model Release"
      },
      {
        title: "The Rise of Solo-Unicorns",
        summary: "AI tools enable single founders to build and maintain billion-dollar infrastructure.",
        source: "TechCrunch",
        url: "#",
        category: "Startups"
      }
    ];
  }
};
