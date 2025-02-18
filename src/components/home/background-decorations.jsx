import { Wand2, Bot } from 'lucide-react';

export const BackgroundDecorations = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-10 left-10 text-primary/20 duration-900 animate-pulse">
      <Wand2 size={48} />
    </div>
    <div className="absolute bottom-10 right-10 text-primary/20 duration-800 animate-pulse">
      <Bot size={48} />
    </div>
  </div>
);
