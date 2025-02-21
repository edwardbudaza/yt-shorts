import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json',
};

export const generateScript = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [
        {
          text: "Write two distinct scripts for a 30-second video on Topic: Kids Story,\n- Use plain text storytelling with no scene descriptions.\n- Avoid brackets, parentheses, or additional formatting—just the script content.\n- Ensure each script has a clear beginning, middle, and end.\nReturn the response strictly in JSON format following this schema: {scripts:[{content:''}]}",
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: '```json\n{\n  "scripts": [\n    {\n      "content": "Once upon a time, there was a little firefly named Flicker who was afraid of the dark. All the other fireflies loved to light up the night, but Flicker hid in the leaves. One night, a lost little owl hooted sadly. Flicker, feeling brave, blinked his light. The owl saw him, and Flicker guided the owl home. From then on, Flicker wasn\'t afraid, and he lit up the night sky with joy."\n    },\n    {\n      "content": "Lily loved to draw. One day, she drew a picture of a sad cloud. Suddenly, it started raining inside her house. She quickly drew a sun next to the cloud. The rain stopped, and the sun smiled in her drawing. Lily learned that day that even a little drawing can change the world, or at least her living room, in a big way."\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage('INSERT_INPUT_HERE');
// console.log(result.response.text());
