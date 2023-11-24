// utils/openai.ts
import axios, { AxiosResponse } from 'axios';

interface OpenAIAPIResponse {
  choices: [{ text: string }];
}

const openaiApiKey = process.env.OPENAI_SECRET_KEY ? process.env.OPENAI_SECRET_KEY : "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"
const openaiApiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

export async function generateImage(description: string): Promise<string> {
  try {
    const response: AxiosResponse<OpenAIAPIResponse> = await axios.post(
      openaiApiEndpoint,
      {
        prompt: description,
        max_tokens: 150,
        n: 1,
        stop: '\n',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}
