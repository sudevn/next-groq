import { createOpenAI } from "@ai-sdk/openai";
import { StreamingTextResponse, experimental_streamText } from "ai";

export const dynamic = "force-dynamic";

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY ?? "",
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await experimental_streamText({
      model: groq.chat("gemma-7b-it"), // llama3-8b-8192 , llama3-70b-8192, llama2-70b-4096,  mixtral-8x7b-32768, gemma-7b-it
      messages,
    });

    return new StreamingTextResponse(result.toAIStream());
  } catch (error) {
    console.log(error);
    throw error;
  }
}
