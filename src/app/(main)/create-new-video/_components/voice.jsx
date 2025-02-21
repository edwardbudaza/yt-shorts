import { useEffect, useState } from 'react';

import { voiceOptions } from '@/constants';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

export const Voice = ({ onHandleInputChange }) => {
  const [selectedVoice, setSelectedVoice] = useState();

  const handleVoiceSelection = (voice) => {
    setSelectedVoice(voice.name);
    onHandleInputChange('voice', voice.value);
  };

  // Set a default voice on component mount
  useEffect(() => {
    if (voiceOptions.length > 0 && !selectedVoice) {
      handleVoiceSelection(voiceOptions[0]);
    }
  }, []);

  return (
    <div className="mt-5">
      <h2>Video Voice</h2>
      <p className="text-sm text-gray-400">Select voice for your voice</p>
      <ScrollArea className="h-[80px] w-full">
        <div className="grid grid-cols-2 gap-3">
          {voiceOptions.map((voice, index) => (
            <h2
              onClick={() => handleVoiceSelection(voice)}
              className={cn(
                'cursor-pointer p-1 dark:bg-slate-900 dark:border-white rounded-lg hover:border',
                voice.name === selectedVoice && 'border',
              )}
              key={index}
            >
              {voice.name}
            </h2>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
