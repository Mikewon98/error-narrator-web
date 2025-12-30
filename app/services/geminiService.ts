import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeError = async (errorMessage: string): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert React and Next.js debugger. 
      Analyze the following error message concisely. 
      Explain what it means in one sentence, and suggest a one-sentence fix.
      Keep it short, friendly, and helpful for a developer who is listening to this via TTS.
      
      Error: "${errorMessage}"`,
    });

    return response.text || "Could not analyze the error.";
  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    return "I couldn't reach the AI analysis service right now, but check your console for details.";
  }
};
