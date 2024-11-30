import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY ?? "",
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: groq.chat("llama3-70b-8192"), // llama3-8b-8192 , llama3-70b-8192, llama2-70b-4096,  mixtral-8x7b-32768, gemma-7b-it,
      system: 'You are a helpful assistant.',
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
