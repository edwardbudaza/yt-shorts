import { generateScript } from '@/configs/gemini';
import { SCRIPT_PROMPT } from '@/constants';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { topic } = await req.json();

  const PROMPT = SCRIPT_PROMPT.replace('{topic}', topic);

  const result = await generateScript.sendMessage(PROMPT);

  const resp = result?.response?.text();

  return NextResponse.json(JSON.parse(resp));
}
