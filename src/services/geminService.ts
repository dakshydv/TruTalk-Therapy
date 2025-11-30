import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key is available to avoid runtime crashes on init
// We will check for the key inside the function call as well.
const ai = new GoogleGenAI({ apiKey });

export const generateMindfulnessTip = async (): Promise<string> => {
  if (!apiKey) {
    return "Breathe in deeply, breathe out slowly. (API Key missing)";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Generate a single, short, soothing, and unique mindfulness tip or positive affirmation (max 25 words) for someone seeking mental clarity. Do not use markdown formatting.",
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Disable thinking for faster, simple response
        temperature: 0.7,
      }
    });

    return response.text?.trim() || "Take a moment to appreciate the silence.";
  } catch (error) {
    console.error("Error generating tip:", error);
    return "In stillness, we find our strength.";
  }
};