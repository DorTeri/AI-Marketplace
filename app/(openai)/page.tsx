// pages/index.tsx
import { generateImage } from '@/utils/openai';
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
  const [generatedImage, setGeneratedImage] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const description = 'A description for generating an image...';
        const result: string = await generateImage(description);
        setGeneratedImage(result);
      } catch (error) {
        // Handle error
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Generated Image:</h1>
      <img src={generatedImage} alt="Generated" />
    </div>
  );
}
