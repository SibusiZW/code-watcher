'use server';

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

const model = "gemini-3-flash-preview"

export default async function generateResponse(code: string) {
    if (code.trim() === '') return "Please enter prompt"

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: `Please analyse the following code and give a brief explanation of it. Check for any errors point them out and give the solution(s). Code: ${code}`,
            config: {
                systemInstruction: 'You are a professional code tester and analyser and your job is to analyse the code presented by the user'
            }
        })

        return response.text
    } catch (error) {
        console.error(error)
        return "Error, check API Key"
    }
}