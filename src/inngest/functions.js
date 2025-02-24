import axios from 'axios';
import { inngest } from './client';
import { createClient } from '@deepgram/sdk';
import { generateImageScript } from '@/configs/gemini';
import { ImagePromptScript } from '@/constants';

export const helloWorld = inngest.createFunction(
  { id: 'hello-world' },
  { event: 'test/hello.world' },
  async ({ event, step }) => {
    await step.sleep('wait-a-moment', '1s');
    return { message: `Hello ${event.data.email}!` };
  },
);

const BASE_URL = 'https://aigurulab.tech';

export const GenerateVideoData = inngest.createFunction(
  { id: 'generate-video-data' },
  { event: 'generate-video-data' },
  async ({ event, step }) => {
    const { script, topic, title, caption, videoStyle, voice } = event?.data;

    // Generate Audio File MP3
    const GenerateAudioFile = await step.run('generateAudioFile', async () => {
      const result = await axios.post(
        BASE_URL + '/api/text-to-speech',
        {
          input: script,
          voice: voice,
        },
        {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
            'Content-Type': 'application/json', // Content Type
          },
        },
      );
      console.log(result.data.audio); //Output Result: Audio Mp3 Url
      return result.data.audio;
    });
    // Generate Captions
    const GenerateCaptions = await step.run('generateCaptions', async () => {
      const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY);

      // STEP 2: Call the transcribeUrl method with the audio payload and options
      const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
        {
          url: GenerateAudioFile,
        },
        // STEP 3: Configure Deepgram options for audio analysis
        {
          model: 'nova-3',
          // smart_format: true,
        },
      );

      const words = result.results?.channels?.[0]?.alternatives?.[0]?.words;

      return words;
    });
    // Generate Image Prompt from Script
    const GenerateImagePrompt = await step.run('generateImagePrompt', async () => {
      const FINAL_PROMPT = ImagePromptScript.replace('{style}', videoStyle).replace(
        '{script}',
        script,
      );
      const result = await generateImageScript.sendMessage(FINAL_PROMPT);
      const resp = JSON.parse(result.response.text());

      return resp;
    });
    // Generate Images using AI
    // Save All Data to DB

    return GenerateImagePrompt;
  },
);
