'use client';

import Link from 'next/link';
import { Play, Sparkles, Youtube } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Authentication } from '@/components/auth/authentication';
import { BackgroundDecorations } from './background-decorations';
import { Stats } from './stats';

export const Hero = () => (
  <div className="relative p-10 flex flex-col items-center justify-center mt-7 md:mt-16 md:px-20 lg:px-36">
    <BackgroundDecorations />
    <div className="flex items-center gap-3 mb-6">
      <Youtube className="w-8 h-8 text-red-500" />
      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
        AI-Powered Shorts
      </span>
    </div>
    <h2 className="font-bold text-4xl md:text-6xl text-center leading-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
      Transform Your Content Into
      <br />
      Viral YouTube Shorts
    </h2>
    <p className="mt-6 text-xl md:text-2xl text-center text-muted-foreground max-w-2xl">
      Create engaging shorts in seconds with AI-generated scripts, stunning visuals, and natural
      voiceovers.
    </p>
    <div className="relative z-10 mt-8 gap-4 md:gap-8 flex flex-col sm:flex-row items-center">
      <Authentication>
        <Button
          size="lg"
          className="cursor-pointer hover:bg-primary/90 active:scale-95 transition-all"
        >
          Get Started
          <div className="ml-2">
            <Sparkles className="w-5 h-5" />
          </div>
        </Button>
      </Authentication>
      <Link href="https://www.youtube.com/shorts" target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          variant="outline"
          className="group cursor-pointer hover:border-primary hover:text-primary active:scale-95 transition-all"
        >
          Watch Demo
          <Play className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
    <Stats />
  </div>
);
