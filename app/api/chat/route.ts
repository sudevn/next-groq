import { createOpenAI } from '@ai-sdk/openai';
import { StreamingTextResponse, experimental_streamText } from 'ai';

export const dynamic = 'force-dynamic';

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY ?? '',
  baseURL: 'https://api.groq.com/openai/v1',
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await experimental_streamText({
      model: groq.chat('gemma-7b-it'),
      messages,
    });

    return new StreamingTextResponse(result.toAIStream());
  } catch (error) {
    console.log(error);
    throw error;
  }
}
