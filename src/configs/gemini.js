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

export const generateImageScript = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [
        {
          text: 'Generate detailed image prompts in the Realistic style for each scene of a 30 to 60-second video based on the provided script: "Did you know Steve Jobs was once fired from Apple? After creating the Macintosh, Apple\'s board pushed him out. He started NeXT, a computer company that struggled for years. The NeXT computer was innovative but expensive and didn\'t sell well. Despite the failure, Apple eventually bought NeXT, bringing Jobs back. It was his return that led to the iPod, iPhone, and Apple\'s incredible resurgence. Sometimes, even a firing can be a stepping stone.".\n\nGuidelines:\n- Generate prompts strictly based on the storyline.\n- Do not include camera angles in the prompts.\n- Ensure each prompt captures key visual details relevant to the scene.\n- Return JSON data with a maximum of 5-10 images.\n- Follow this schema:\n[\n  {\n    "imagePrompt": "",\n    "sceneContent": "<Script Content>"\n  }\n]',
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A tense boardroom meeting, circa 1985. Steve Jobs, mid-30s, with intense eyes and a slight frown, stands opposite a long table of older, stern-faced board members in suits. Papers scattered on the table. Sunlight streams dramatically through a window, highlighting the tension.",\n    "sceneContent": "Did you know Steve Jobs was once fired from Apple? After creating the Macintosh, Apple\'s board pushed him out."\n  },\n  {\n    "imagePrompt": "Steve Jobs in a minimalist office space, late 1980s. He\'s younger, more intense, standing beside a sleek black NeXT Computer. The office is clean but sparsely furnished. Natural light from a window illuminates the futuristic design of the computer.",\n    "sceneContent": "He started NeXT, a computer company that struggled for years. The NeXT computer was innovative but expensive and didn\'t sell well."\n  },\n  {\n    "imagePrompt": "Empty office, early 90s. A single NeXT computer sits unused on a desk. Dust motes float in the air, illuminated by a single shaft of light. The scene conveys a sense of failure and abandonment.",\n    "sceneContent": "Despite the failure..."\n  },\n  {\n    "imagePrompt": "Apple headquarters, late 1990s. Steve Jobs, now in his 40s, with a knowing smile, walks confidently through a modern office. Employees are working diligently at their desks, a sense of quiet optimism in the air.",\n    "sceneContent": "Apple eventually bought NeXT, bringing Jobs back."\n  },\n  {\n    "imagePrompt": "Close-up shot of the original iPod in Steve Jobs\' hand. He\'s smiling subtly. The background is blurred, emphasizing the sleek design of the iPod. The iPod shines with a subtle glint.",\n    "sceneContent": "It was his return that led to the iPod, iPhone..."\n  },\n  {\n    "imagePrompt": "Montage of iconic Apple products: the iPod, iPhone, iPad, MacBook. Each product is displayed in a clean, modern setting, emphasizing their minimalist design and technological innovation. Light bounces off each surface.",\n    "sceneContent": "...and Apple\'s incredible resurgence. Sometimes, even a firing can be a stepping stone."\n  }\n]\n```',
        },
      ],
    },
  ],
});
// const result = await chatSession.sendMessage('INSERT_INPUT_HERE');
// console.log(result.response.text());
