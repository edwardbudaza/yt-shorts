import { generateScript } from '@/configs/gemini';
import { SCRIPT_PROMPT } from '@/constants';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse request body safely
    const body = await req.json();

    // Validate input
    if (!body?.topic || typeof body.topic !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Invalid or missing topic parameter.' },
        { status: 400 },
      );
    }

    // Generate prompt dynamically
    const PROMPT = SCRIPT_PROMPT.replace('{topic}', body.topic);

    // Send request to Gemini API
    const result = await generateScript.sendMessage(PROMPT);

    // Ensure response exists
    if (!result?.response) {
      throw new Error('Invalid response from AI service.');
    }

    // Parse AI response safely
    const responseText = await result.response.text();
    const parsedResponse = JSON.parse(responseText);

    // Ensure scripts exist, fallback to empty array
    const scripts = parsedResponse?.scripts || [];

    // Return successful response
    return NextResponse.json({ success: true, scripts });
  } catch (error) {
    console.error('Error generating script:', error);

    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 },
    );
  }
}
